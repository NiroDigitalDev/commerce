#!/usr/bin/env bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"
NEXT_BIN="${REPO_ROOT}/node_modules/.bin/next"
NGROK_URL="unsnobbish-autocatalytically-margarita.ngrok-free.dev"

if ! command -v ngrok >/dev/null 2>&1; then
  echo "Error: ngrok is not installed or not on the PATH." >&2
  exit 1
fi

if [[ ! -x "${NEXT_BIN}" ]]; then
  echo "Error: Next.js CLI not found at ${NEXT_BIN}. Run 'bun install' to install dependencies." >&2
  exit 1
fi

NEXT_PID=""
NGROK_PID=""

cleanup() {
  if [[ -n "${NEXT_PID}" ]]; then
    kill "${NEXT_PID}" 2>/dev/null || true
    wait "${NEXT_PID}" 2>/dev/null || true
    NEXT_PID=""
  fi
  if [[ -n "${NGROK_PID}" ]]; then
    kill "${NGROK_PID}" 2>/dev/null || true
    wait "${NGROK_PID}" 2>/dev/null || true
    NGROK_PID=""
  fi
}

terminate() {
  cleanup
  exit 130
}

trap cleanup EXIT
trap terminate INT TERM

"${SCRIPT_DIR}/ngrok-auth.sh"

echo "Starting ngrok tunnel (${NGROK_URL} -> http://localhost:3000)..."
ngrok http --url="${NGROK_URL}" 3000 &
NGROK_PID=$!

sleep 1
if [[ -n "${NGROK_PID}" ]] && ! kill -0 "${NGROK_PID}" 2>/dev/null; then
  wait "${NGROK_PID}" 2>/dev/null || true
  NGROK_PID=""
  echo "ngrok exited unexpectedly during startup. Check the logs above for details." >&2
  exit 1
fi

echo "Starting Next.js dev server..."
"${NEXT_BIN}" dev --turbopack &
NEXT_PID=$!

RESULT=0
while true; do
  if [[ -n "${NEXT_PID}" ]] && ! kill -0 "${NEXT_PID}" 2>/dev/null; then
    wait "${NEXT_PID}" 2>/dev/null || true
    RESULT=$?
    NEXT_PID=""
    break
  fi

  if [[ -n "${NGROK_PID}" ]] && ! kill -0 "${NGROK_PID}" 2>/dev/null; then
    wait "${NGROK_PID}" 2>/dev/null || true
    RESULT=$?
    NGROK_PID=""
    echo "ngrok exited unexpectedly. Check the output above." >&2
    break
  fi

  sleep 1
done

cleanup
exit "${RESULT}"

#!/usr/bin/env bash

# Exit immediately on error or use of unset variables; fail pipelines early.
set -euo pipefail

AUTH_TOKEN="3206KsETu5IINkJbgHxpqlgfy3c_jFdWauTcfQ66DKtJPdrU"

echo "Configuring ngrok auth token..."
ngrok config add-authtoken "${AUTH_TOKEN}"

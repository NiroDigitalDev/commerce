"use client";

import { AddToCart } from "components/cart/add-to-cart";
import Price from "components/price";
import Prose from "components/prose";
import { Product } from "lib/shopify/types";
import { useState } from "react";
import { VariantSelector } from "./variant-selector";

interface BulkDiscount {
  quantity: number;
  discount: number;
  label: string;
}

const bulkDiscounts: BulkDiscount[] = [
  { quantity: 3, discount: 10, label: "Buy 3, Get 10% Off" },
  { quantity: 6, discount: 15, label: "Buy 6, Get 15% Off" },
  { quantity: 12, discount: 20, label: "Buy 12, Get 20% Off" },
];

export function ProductDescription({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= 99) {
      setQuantity(newQuantity);
    }
  };

  const getAppliedDiscount = () => {
    const applicable = bulkDiscounts
      .filter((d) => quantity >= d.quantity)
      .sort((a, b) => b.discount - a.discount);
    return applicable[0] || null;
  };

  const appliedDiscount = getAppliedDiscount();
  const basePrice = parseFloat(product.priceRange.maxVariantPrice.amount);
  const finalPrice = appliedDiscount
    ? basePrice * (1 - appliedDiscount.discount / 100)
    : basePrice;

  return (
    <div className="product-detail-content-inner">
      {/* Rating at the top */}
      <div className="product-rating-wrapper">
        <div className="product-rating">
          <div className="product-stars">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`product-star ${i < 4 ? "filled" : ""}`}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill="currentColor"
                />
              </svg>
            ))}
          </div>
          <span className="product-rating-text">4.8 (127 reviews)</span>
        </div>
      </div>

      {/* Title */}
      <div className="product-header">
        <h1 className="product-title">{product.title}</h1>
      </div>

      {/* Variant Selector */}
      <VariantSelector options={product.options} variants={product.variants} />

      {/* Description */}
      {product.descriptionHtml ? (
        <Prose className="product-description" html={product.descriptionHtml} />
      ) : null}

      {/* Bulk Discounts */}
      <div className="product-bulk-discounts">
        <h3 className="bulk-discount-title">Volume Discounts</h3>
        <div className="bulk-discount-cards">
          {bulkDiscounts.map((discount) => (
            <button
              key={discount.quantity}
              type="button"
              onClick={() => handleQuantityChange(discount.quantity)}
              className={`bulk-discount-card ${
                quantity >= discount.quantity ? "active" : ""
              }`}
            >
              <div className="bulk-discount-card-badge">
                {quantity >= discount.quantity ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <span className="bulk-discount-percentage">-{discount.discount}%</span>
                )}
              </div>
              <div className="bulk-discount-card-quantity">Buy {discount.quantity}+</div>
              <div className="bulk-discount-card-label">Save {discount.discount}%</div>
            </button>
          ))}
        </div>
      </div>

      {/* Price Display Above Quantity and Cart */}
      <div className="product-price-above-actions">
        {appliedDiscount ? (
          <div className="price-with-discount">
            <span className="price-label">Total:</span>
            <div className="price-values">
              <span className="product-price-original-inline">
                <Price
                  amount={(basePrice * quantity).toFixed(2)}
                  currencyCode={product.priceRange.maxVariantPrice.currencyCode}
                />
              </span>
              <span className="product-price-current-inline">
                <Price
                  amount={(finalPrice * quantity).toFixed(2)}
                  currencyCode={product.priceRange.maxVariantPrice.currencyCode}
                />
              </span>
            </div>
          </div>
        ) : (
          <div className="price-simple">
            <span className="price-label">Total:</span>
            <span className="product-price-current-inline">
              <Price
                amount={(basePrice * quantity).toFixed(2)}
                currencyCode={product.priceRange.maxVariantPrice.currencyCode}
              />
            </span>
          </div>
        )}
      </div>

      {/* Quantity and Add to Cart Row */}
      <div className="product-actions-row">
        {/* Quantity Picker */}
        <div className="product-quantity-wrapper-inline">
          <div className="product-quantity-picker">
            <button
              type="button"
              className="quantity-button quantity-decrease"
              onClick={() => handleQuantityChange(quantity - 1)}
              disabled={quantity <= 1}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12H19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <input
              type="number"
              className="quantity-input"
              value={quantity}
              onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
              min="1"
              max="99"
            />
            <button
              type="button"
              className="quantity-button quantity-increase"
              onClick={() => handleQuantityChange(quantity + 1)}
              disabled={quantity >= 99}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 5V19M5 12H19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Add to Cart */}
        <div className="product-add-to-cart-inline">
          <AddToCart product={product} quantity={quantity} />
        </div>
      </div>

      {/* Trust Badges */}
      <div className="product-trust-badges">
        <div className="trust-badge">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M20 7L9.5 17.5L4 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Free Shipping Over $50</span>
        </div>
        <div className="trust-badge">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 12L7 8L11 12M7 8V16M21 12L17 16L13 12M17 16V8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>14-Day Money Back</span>
        </div>
        <div className="trust-badge">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              fill="currentColor"
            />
          </svg>
          <span>Premium Quality</span>
        </div>
        <div className="trust-badge">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
              fill="currentColor"
            />
          </svg>
          <span>100% Secure Checkout</span>
        </div>
      </div>
    </div>
  );
}

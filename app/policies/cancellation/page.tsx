import type { Metadata } from 'next';
import Prose from 'components/prose';

export const metadata: Metadata = {
  title: 'Cancellation Policy',
  description: 'Our cancellation policy explains how to cancel orders and subscriptions.'
};

export default function CancellationPolicyPage() {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <h1 className="mb-8 text-5xl font-bold">Cancellation Policy</h1>
      <Prose
        className="mb-8"
        html={`
        <p><strong>Last Updated: ${lastUpdated}</strong></p>
        
        <h2>Order Cancellation</h2>
        <p>
          You may cancel your order before it has been shipped. Once an order has been 
          processed and shipped, it cannot be cancelled, but you may return it according 
          to our <a href="/policies/return-refund">Return & Refund Policy</a>.
        </p>

        <h2>How to Cancel an Order</h2>
        <p>To cancel an order:</p>
        <ol>
          <li>Contact our customer service team as soon as possible</li>
          <li>Provide your order number and reason for cancellation</li>
          <li>We will process your cancellation and issue a refund if payment has been processed</li>
        </ol>

        <h2>Cancellation Timeframe</h2>
        <p>
          Orders can typically be cancelled within 24 hours of placement, provided they 
          have not yet entered the shipping process. For orders that have already been 
          processed or shipped, please refer to our return policy.
        </p>

        <h2>Refund for Cancelled Orders</h2>
        <p>
          If you cancel an order before it ships, you will receive a full refund to your 
          original payment method. Refunds may take 5-10 business days to appear in your 
          account, depending on your payment provider.
        </p>

        <h2>Items That Cannot Be Cancelled</h2>
        <p>The following items may not be eligible for cancellation:</p>
        <ul>
          <li>Custom or personalized items that have already entered production</li>
          <li>Digital products that have been delivered</li>
          <li>Items that have already been shipped</li>
          <li>Gift cards or store credit</li>
        </ul>

        <h2>Subscription Cancellations</h2>
        <p>
          If you have a subscription service, you may cancel at any time. Cancellation 
          will take effect at the end of your current billing period. You will continue 
          to have access to the service until the end of the paid period.
        </p>

        <h2>Our Right to Cancel</h2>
        <p>
          We reserve the right to cancel any order at our discretion, including but not 
          limited to:
        </p>
        <ul>
          <li>Items that are out of stock or unavailable</li>
          <li>Suspected fraudulent or unauthorized transactions</li>
          <li>Pricing errors or incorrect product information</li>
          <li>Violations of our Terms & Conditions</li>
        </ul>
        <p>
          If we cancel your order, we will notify you and issue a full refund if payment 
          has been processed.
        </p>

        <h2>Processing Cancellations</h2>
        <p>
          Once a cancellation request is received and approved, we will process it as 
          quickly as possible. You will receive a confirmation email once the cancellation 
          has been processed.
        </p>

        <h2>Partial Cancellations</h2>
        <p>
          If you wish to cancel only part of your order, please contact our customer 
          service team. We will do our best to accommodate your request, subject to 
          order processing status.
        </p>

        <h2>Contact Us</h2>
        <p>
          For questions about cancelling an order or subscription, please contact our 
          customer service team. We're here to help!
        </p>
      `}
      />
      <p className="text-sm italic">
        This document was last updated on {lastUpdated}.
      </p>
    </>
  );
}


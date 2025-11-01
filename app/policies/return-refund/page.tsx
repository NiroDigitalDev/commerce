import type { Metadata } from 'next';
import Prose from 'components/prose';

export const metadata: Metadata = {
  title: 'Return & Refund Policy',
  description: 'Our return and refund policy explains how to return products and receive refunds.'
};

export default function ReturnRefundPolicyPage() {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <h1 className="mb-8 text-5xl font-bold">Return & Refund Policy</h1>
      <Prose
        className="mb-8"
        html={`
        <p><strong>Last Updated: ${lastUpdated}</strong></p>
        
        <h2>Returns</h2>
        <p>
          We want you to be completely satisfied with your purchase. If you are not satisfied, 
          you may return eligible items within 30 days of delivery for a full refund or exchange.
        </p>

        <h2>Eligibility for Returns</h2>
        <p>To be eligible for a return, items must:</p>
        <ul>
          <li>Be in their original condition (unused, unworn, unwashed)</li>
          <li>Have all original tags and packaging</li>
          <li>Be returned within 30 days of delivery</li>
          <li>Not be final sale items (as marked)</li>
        </ul>

        <h2>How to Return</h2>
        <p>To initiate a return:</p>
        <ol>
          <li>Contact our customer service team to obtain a Return Authorization (RA) number</li>
          <li>Package the item securely in its original packaging</li>
          <li>Include the RA number and original receipt/invoice</li>
          <li>Ship the item to the address provided by our customer service team</li>
        </ol>

        <h2>Return Shipping</h2>
        <p>
          Return shipping costs are the responsibility of the customer unless the item 
          was defective or we made an error. We recommend using a trackable shipping service 
          and purchasing shipping insurance for valuable items.
        </p>

        <h2>Refunds</h2>
        <p>
          Once we receive and inspect your returned item, we will notify you of the 
          approval or rejection of your refund. If approved, your refund will be processed 
          to your original payment method within 5-10 business days.
        </p>

        <h2>Refund Processing Time</h2>
        <p>
          Refunds may take 5-10 business days to appear in your account after processing, 
          depending on your payment provider.
        </p>

        <h2>Exchanges</h2>
        <p>
          We currently do not offer direct exchanges. To exchange an item, please return 
          the original item for a refund and place a new order for the desired item.
        </p>

        <h2>Non-Returnable Items</h2>
        <p>The following items cannot be returned:</p>
        <ul>
          <li>Items marked as "Final Sale"</li>
          <li>Personalized or custom-made items</li>
          <li>Items damaged by misuse or normal wear and tear</li>
          <li>Items without proof of purchase</li>
        </ul>

        <h2>Damaged or Defective Items</h2>
        <p>
          If you receive a damaged or defective item, please contact us immediately within 
          7 days of delivery. We will arrange for a replacement or full refund, including 
          return shipping costs.
        </p>

        <h2>Contact Us</h2>
        <p>
          For questions about returns or refunds, please contact our customer service 
          team. We're here to help!
        </p>
      `}
      />
      <p className="text-sm italic">
        This document was last updated on {lastUpdated}.
      </p>
    </>
  );
}


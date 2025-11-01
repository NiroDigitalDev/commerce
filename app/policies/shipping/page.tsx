import type { Metadata } from 'next';
import Prose from 'components/prose';

export const metadata: Metadata = {
  title: 'Shipping Policy',
  description: 'Information about our shipping methods, rates, and delivery times.'
};

export default function ShippingPolicyPage() {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <h1 className="mb-8 text-5xl font-bold">Shipping Policy</h1>
      <Prose
        className="mb-8"
        html={`
        <p><strong>Last Updated: ${lastUpdated}</strong></p>
        
        <h2>Shipping Options</h2>
        <p>
          We offer various shipping options to meet your needs. Available shipping methods 
          and rates are displayed during checkout.
        </p>

        <h2>Processing Time</h2>
        <p>
          Orders are typically processed within 1-3 business days (excluding weekends and 
          holidays). Processing time begins once payment is confirmed.
        </p>

        <h2>Shipping Times</h2>
        <p>Estimated delivery times vary by shipping method and destination:</p>
        <ul>
          <li><strong>Standard Shipping:</strong> 5-7 business days</li>
          <li><strong>Express Shipping:</strong> 2-3 business days</li>
          <li><strong>Overnight Shipping:</strong> Next business day (if ordered before cutoff time)</li>
        </ul>
        <p>
          <em>Note: Delivery times are estimates and may vary due to factors beyond our control, 
          such as weather conditions or carrier delays.</em>
        </p>

        <h2>Shipping Rates</h2>
        <p>
          Shipping rates are calculated based on the weight, dimensions, and destination 
          of your order. Free shipping may be available for orders over a certain amount, 
          as indicated during checkout.
        </p>

        <h2>International Shipping</h2>
        <p>
          We ship to select international destinations. International orders may be subject 
          to customs fees, duties, and taxes, which are the responsibility of the customer. 
          Delivery times for international orders may vary significantly.
        </p>

        <h2>Order Tracking</h2>
        <p>
          Once your order ships, you will receive a tracking number via email. You can 
          use this number to track your package on the carrier's website.
        </p>

        <h2>Address Accuracy</h2>
        <p>
          Please ensure your shipping address is correct. We are not responsible for 
          packages shipped to incorrect addresses provided by the customer. Additional 
          fees may apply for address corrections or redelivery.
        </p>

        <h2>Undeliverable Packages</h2>
        <p>
          If a package is returned to us as undeliverable, we will contact you to arrange 
          reshipment. Additional shipping charges may apply.
        </p>

        <h2>Lost or Stolen Packages</h2>
        <p>
          If your package appears to be lost or stolen, please contact us immediately. 
          We will work with the shipping carrier to locate your package or file a claim 
          if necessary.
        </p>

        <h2>Multiple Item Orders</h2>
        <p>
          Items from the same order may ship separately if they are from different 
          warehouses or have different processing times. You will receive separate tracking 
          numbers for each shipment.
        </p>

        <h2>Holiday Shipping</h2>
        <p>
          During peak holiday seasons, processing and delivery times may be extended. 
          We recommend placing orders early to ensure timely delivery.
        </p>

        <h2>Contact Us</h2>
        <p>
          For questions about shipping, please contact our customer service team. We're 
          happy to help!
        </p>
      `}
      />
      <p className="text-sm italic">
        This document was last updated on {lastUpdated}.
      </p>
    </>
  );
}


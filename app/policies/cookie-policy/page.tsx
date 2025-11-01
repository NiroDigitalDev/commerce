import type { Metadata } from 'next';
import Prose from 'components/prose';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Information about how we use cookies and similar technologies on our website.'
};

export default function CookiePolicyPage() {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <h1 className="mb-8 text-5xl font-bold">Cookie Policy</h1>
      <Prose
        className="mb-8"
        html={`
        <p><strong>Last Updated: ${lastUpdated}</strong></p>
        
        <h2>What Are Cookies?</h2>
        <p>
          Cookies are small text files that are placed on your device when you visit a website. 
          They are widely used to make websites work more efficiently and provide information 
          to website owners.
        </p>

        <h2>How We Use Cookies</h2>
        <p>We use cookies for the following purposes:</p>
        <ul>
          <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
          <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
          <li><strong>Functionality Cookies:</strong> Remember your preferences and settings</li>
          <li><strong>Targeting Cookies:</strong> Used to deliver relevant advertisements</li>
        </ul>

        <h2>Types of Cookies We Use</h2>
        
        <h3>Strictly Necessary Cookies</h3>
        <p>
          These cookies are essential for the website to function and cannot be switched off. 
          They are usually set in response to actions you take, such as setting privacy preferences, 
          logging in, or filling in forms.
        </p>

        <h3>Performance and Analytics Cookies</h3>
        <p>
          These cookies allow us to count visits and traffic sources so we can measure and 
          improve the performance of our site. They help us understand which pages are most 
          popular and how visitors move around the site.
        </p>

        <h3>Functionality Cookies</h3>
        <p>
          These cookies enable the website to provide enhanced functionality and personalization. 
          They may be set by us or by third-party providers whose services we have added to our pages.
        </p>

        <h3>Targeting/Advertising Cookies</h3>
        <p>
          These cookies may be set through our site by our advertising partners. They may be 
          used to build a profile of your interests and show you relevant ads on other sites.
        </p>

        <h2>Third-Party Cookies</h2>
        <p>
          In addition to our own cookies, we may also use various third-party cookies to report 
          usage statistics, deliver advertisements, and so on. These cookies are governed by 
          the respective third-party privacy policies.
        </p>

        <h2>Managing Cookies</h2>
        <p>
          You can control and/or delete cookies as you wish. You can delete all cookies that 
          are already on your device and set most browsers to prevent them from being placed. 
          However, if you do this, you may have to manually adjust some preferences every time 
          you visit a site, and some services and functionalities may not work.
        </p>

        <h2>Browser Settings</h2>
        <p>
          Most web browsers allow some control of cookies through browser settings. To find out 
          more about cookies, including how to see what cookies have been set and how to manage 
          and delete them, visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">www.allaboutcookies.org</a>.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Cookie Policy from time to time. We will notify you of any changes 
          by posting the new policy on this page and updating the "Last Updated" date.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about our use of cookies, please contact us through our 
          customer service channels.
        </p>
      `}
      />
      <p className="text-sm italic">
        This document was last updated on {lastUpdated}.
      </p>
    </>
  );
}


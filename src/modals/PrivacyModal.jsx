export default function PrivacyModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-2xl p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-lg"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-xl font-semibold mb-4">Privacy Policy</h2>

        {/* Content */}
        <div className="max-h-[70vh] overflow-y-auto text-sm text-gray-700 space-y-5 leading-relaxed">
          <p>
            At <strong>Finnova</strong>, we take your privacy seriously and are
            fully committed to protecting the personal information you share
            with us. This Privacy Policy explains how we collect, use, store,
            and safeguard your data when you use our website and services.
          </p>

          <p>
            It applies to our main domain and all subdomains, and governs the
            data collected when you visit, interact with, or register on our
            website. By continuing to use our platform, you agree to the
            practices described in this policy. If you do not agree, please
            discontinue using the website.
          </p>

          {/* Section 1 */}
          <h3 className="font-semibold text-base">1. Information We Collect</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Personal Information:</strong> Name, contact details,
              identification documents, address, family member details, and
              other relevant documents.
            </li>
            <li>
              <strong>Technical Information:</strong> IP address, browser type,
              device identifiers, geolocation data, and cookies to ensure
              security and functionality.
            </li>
            <li>
              <strong>Additional Information:</strong> Medical records, nominee
              details, or social media profile information (if relevant to the
              services you seek).
            </li>
          </ul>

          {/* Section 2 */}
          <h3 className="font-semibold text-base">2. Usage of Information</h3>
          <p>
            We use the information you provide solely for legitimate purposes,
            including:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Verifying your identity and processing service requests.</li>
            <li>
              Communicating with you and sharing information with relevant
              third-party providers (e.g., insurance companies, financers).
            </li>
            <li>
              Improving service delivery, enhancing platform security, and
              ensuring a smooth experience.
            </li>
          </ul>
          <p>
            We <strong>do not</strong> use your information for marketing
            without your consent and we <strong>never</strong> share it with
            unrelated third parties.
          </p>

          {/* Section 3 */}
          <h3 className="font-semibold text-base">
            3. Data Security and Retention
          </h3>
          <p>
            We are committed to maintaining the confidentiality and integrity of
            your data through advanced security protocols, encryption tools, and
            firewalls to prevent unauthorized access.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Retention Period:</strong> Personal data is stored only as
              long as it is required to serve its purpose or as mandated by law.
            </li>
            <li>
              By default, data is retained for <strong>up to two years</strong>{" "}
              from registration or last service interaction, unless the
              relationship is renewed.
            </li>
          </ul>

          {/* Section 4 */}
          <h3 className="font-semibold text-base">
            4. User Rights and Updates
          </h3>
          <p>You have full rights over your personal data, including:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Access, correct, or request deletion of your data.</li>
            <li>
              Update your profile through the platform or by contacting us.
            </li>
          </ul>
          <p>
            This Privacy Policy may be updated from time to time to reflect
            legal requirements or improve clarity. Updates will be published on
            our website with the revision date.
          </p>

          {/* Section 5 */}
          <h3 className="font-semibold text-base">5. Contact Us</h3>
          <p>
            For concerns, questions, or requests regarding your data or this
            Privacy Policy, please contact us:
          </p>
          <p>
            📧{" "}
            <a
              href="mailto:support@volohealth.in"
              className="text-lightBlue underline"
            >
              support@volohealth.in
            </a>
          </p>
          <p>
            We will make every effort to respond in a timely and transparent
            manner.
          </p>
        </div>
      </div>
    </div>
  );
}

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
        <h2 className="text-xl font-semibold mb-4 border-b border-gray-300">
          Privacy Policy
        </h2>

        {/* Content */}
        <div className="max-h-[70vh] overflow-y-auto text-sm text-gray-700 space-y-5 leading-relaxed">
          <p>
            At Finnova, we take your privacy seriously and are fully committed
            to protecting the personal information you share with us. This
            privacy policy outlines how we collect, use, store, and safeguard
            your data when you use our website and services. It applies to our
            main domain and all its subdomains. This policy governs the data and
            information collected from users when they visit, interact with, or
            register on our website. It applies to all services offered through
            our online platform and ensures that all data shared is handled in
            compliance with legal and ethical standards. By continuing to use
            our website, you agree to the practices described in this policy. If
            you do not agree with any part of this policy, we request you to
            discontinue using the website. For any questions or concerns, you
            may contact us at support@volohealth.in.
          </p>
          <h2 className="text-lg">Information We Collect</h2>
          <p>
            When you interact with our platform, you may be required to provide
            personal information such as your name, contact details,
            identification documents, address, family member details and other
            relevant documents. We may also collect technical information
            including your IP address, browser type, device identifiers,
            geolocation data, and cookies to ensure security and seamless
            functionality. Additional information such as your medical records,
            nominee details or social media profile information may also be
            collected if relevant to the service you seek.
          </p>
          <h2 className="text-lg">Usage of Information</h2>
          <p>
            All information shared with us is used only for the legitimate
            purpose of offering our services. We use your details to verify your
            identity, communicate with you, process your service requests and
            share information with relevant third-party service providers such
            as insurance companies and financers wherever required. We do not
            use your information for marketing purposes without your consent nor
            do we share it with any unrelated third-party organizations. Your
            information helps us improve service delivery, enhance our
            platform’s security and ensure a smooth experience while using
            Finnova.
          </p>
          <h2 className="text-lg">Data Security and Retention</h2>
          <p>
            We are committed to maintain the confidentiality and integrity of
            your data. Our platform is equipped with advanced data security
            protocols, encryption tools, and firewalls to prevent unauthorized
            access and data breaches. Your personal data is retained only for as
            long as it serves the purpose for which it was collected or as
            mandated by applicable law. In general, we retain data for a period
            of up to two years from your registration or last service
            interaction, unless you renew your relationship with us.
          </p>
          <h2 className="text-lg">User Rights and Updates</h2>
          <p>
            You have full rights over your personal data, including the right to
            access, correct or request deletion of your information. You may
            update your profile through the platform or by writing to us. We may
            revise this privacy policy from time to time to align with legal
            requirements or improve clarity. Any such updates will be published
            on our website along with the date of the last revision.
          </p>
          <h2 className="text-lg">Contact Us</h2>
          <p>
            If you have any concerns, questions, or requests regarding your data
            or this privacy policy, you can reach us directly at
            support@volohealth.in. We will make every effort to address your
            concerns in a timely and transparent manner.
          </p>
        </div>
      </div>
    </div>
  );
}

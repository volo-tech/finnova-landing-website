export default function TermsModal({ onClose }) {
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
        
        <h2 className="text-xl font-semibold mb-2 border-b border-gray-300">
          Terms & Conditions
        </h2>
        {/* <p className="text-xs text-gray-500 mb-4">Last Updated: [Date]</p> */}

        {/* Content */}
        <div className="max-h-[70vh] overflow-y-auto text-sm text-gray-700 space-y-5 leading-relaxed">
          <p>
            Welcome to <strong>Finnova</strong> (“we,” “our,” “us”), a
            healthcare financing platform designed to assist patients in
            managing out-of-pocket medical expenses through flexible loan and
            EMI solutions. By accessing or using our website and services, you
            (“you,” “your,” “user”) agree to be bound by these Terms &
            Conditions (“Terms”). If you do not agree, please do not use our
            services.
          </p>

          {/* Section 1 */}
          <h3 className="font-semibold text-base">1. Services Provided</h3>
          <p>
            Finnova facilitates healthcare financing through partner lending
            institutions and hospitals. Our services may include:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>No-cost / low-cost EMI options</li>
            <li>Instant loan approval (subject to eligibility)</li>
            <li>Paperless transactions</li>
          </ul>
          <p>
            All financing is subject to the policies and approval of our partner
            lenders.
          </p>

          {/* Section 2 */}
          <h3 className="font-semibold text-base">2. Eligibility</h3>
          <p>To use our services, you must:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Be at least 21 years old</li>
            <li>Be a resident of India</li>
            <li>Provide valid and verifiable KYC documents</li>
            <li>
              Meet the credit and other criteria set by our partner lenders
            </li>
          </ul>
          <p>
            We reserve the right to refuse service without assigning any reason
            if you do not meet the eligibility criteria.
          </p>

          {/* Section 3 */}
          <h3 className="font-semibold text-base">
            3. Loan Approval & Disbursement
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Loan approval is at the sole discretion of the partner lender.
            </li>
            <li>
              Loan amounts, interest rates, EMI options, and repayment terms are
              determined by the lending partner.
            </li>
            <li>Approval timelines are indicative and may vary.</li>
            <li>
              Finnova does not guarantee loan approval or specific interest
              rates.
            </li>
          </ul>

          {/* Section 4 */}
          <h3 className="font-semibold text-base">4. User Responsibilities</h3>
          <p>You agree to:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Provide accurate and complete information when applying for
              financing.
            </li>
            <li>Use the financing only for lawful medical purposes.</li>
            <li>
              Repay the loan as per the agreement with the lending partner.
            </li>
          </ul>

          {/* Section 5 */}
          <h3 className="font-semibold text-base">5. Privacy & Data Use</h3>
          <p>By using our services, you consent to:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Collection and use of your personal, financial, and
              medical-related information for loan processing and service
              delivery.
            </li>
            <li>
              Sharing of your data with partner lenders, hospitals, and
              verification agencies for the purpose of providing services.
            </li>
            <li>
              Processing of your data in accordance with applicable Indian data
              protection laws.
            </li>
          </ul>

          {/* Section 6 */}
          <h3 className="font-semibold text-base">
            6. No Financial or Medical Advice
          </h3>
          <p>
            The information on our website, including testimonials, is for
            general information only and does not constitute financial, medical,
            or professional advice. You should seek independent advice before
            making any decisions.
          </p>

          {/* Section 7 */}
          <h3 className="font-semibold text-base">
            7. Limitation of Liability
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Finnova is a facilitator, not a direct lender, unless otherwise
              specified.
            </li>
            <li>
              We are not responsible for any delays, declines, disputes, or
              service quality issues arising from hospitals, healthcare
              providers, or lending partners.
            </li>
            <li>
              To the fullest extent permitted by law, Finnova will not be liable
              for any indirect, incidental, or consequential damages.
            </li>
          </ul>

          {/* Section 8 */}
          <h3 className="font-semibold text-base">8. Intellectual Property</h3>
          <p>
            All content on the Finnova website, including text, graphics, logos,
            and design, is owned by or licensed to us and is protected by
            applicable copyright and trademark laws. Unauthorized use is
            prohibited.
          </p>

          {/* Section 9 */}
          <h3 className="font-semibold text-base">9. Third-Party Links</h3>
          <p>
            Our website may contain links to third-party websites. We are not
            responsible for the content, privacy policies, or practices of such
            third-party sites.
          </p>

          {/* Section 10 */}
          <h3 className="font-semibold text-base">10. Amendments</h3>
          <p>
            We may update these Terms from time to time without prior notice.
            The updated Terms will be posted on our website, and continued use
            of our services constitutes acceptance of the updated Terms.
          </p>

          {/* Section 11 */}
          <h3 className="font-semibold text-base">
            11. Governing Law & Jurisdiction
          </h3>
          <p>
            These Terms are governed by the laws of India. Any disputes shall be
            subject to the exclusive jurisdiction of the courts in [City,
            State].
          </p>

          {/* Section 12 */}
          <h3 className="font-semibold text-base">12. Contact Information</h3>
          <p>For any queries about these Terms, please contact:</p>
          <p>📧 Email: [support@volohealth.in]</p>

          {/* Disclaimer */}
          <p className="text-xs text-gray-500 italic">
            ⚠ Disclaimer: All financing is subject to eligibility criteria,
            verification, and approval by our lending partners. Terms and
            conditions of the lender will apply.
          </p>
        </div>
      </div>
    </div>
  );
}

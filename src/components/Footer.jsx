"use client";
import { useState } from "react";
import TermsModal from "../modals/TermsModal";
import PrivacyModal from "../modals/PrivacyModal";

export default function Footer() {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <footer id="footer" className="bg-lightGray text-black py-8">
      <div className="container mx-auto px-4">
        {/* Top Section: Links + Disclaimer */}
        <div className="flex flex-col md:flex-col items-center md:items-center justify-between gap-6 text-center md:text-center">
          {/* Links */}
          <ul className="flex flex-row md:flex-row gap-6 md:gap-6 text-sm text-purpleSecondary">
            <li>
              <button
                onClick={() => setShowTerms(true)}
                className="hover:text-purplePrimary"
              >
                Terms of Use
              </button>
            </li>
            <li>
              <button
                onClick={() => setShowPrivacy(true)}
                className="hover:text-purplePrimary"
              >
                Privacy Policy
              </button>
            </li>
          </ul>

          {/* Disclaimer */}
          <p className="text-gray-500 text-xs md:text-sm leading-relaxed max-w-xl">
            *All financing is subject to eligibility criteria, verification, and
            approval. Terms and conditions apply. The information provided here
            is not a substitute for professional advice.
          </p>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="text-gray-500 text-center text-xs mt-6">
          <p>
            Copyright © 2024-2025{" "}
            <a
              href="https://volohealth.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lightBlue hover:underline font-semibold"
            >
              Volo Health Services Private Limited
            </a>{" "}
            – All rights reserved.
          </p>
        </div>
      </div>

      {/* Modals */}
      {showTerms && <TermsModal onClose={() => setShowTerms(false)} />}
      {showPrivacy && <PrivacyModal onClose={() => setShowPrivacy(false)} />}
    </footer>
  );
}

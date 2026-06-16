"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TermsModal from "../modals/TermsModal";
import PrivacyModal from "../modals/PrivacyModal";

export default function Footer() {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <footer
      id="footer"
      className="bg-slate-50 pt-16 pb-12 border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left-Aligned Flex Layout Container */}
        <div className="flex flex-col lg:flex-row justify-start items-start gap-12 lg:gap-32">

          {/* Column 1: Brand, Disclaimer & Copyright */}
          <div className="flex flex-col max-w-md">
            <a
              href="https://volohealth.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-bold text-slate-800 tracking-tight mb-5 hover:text-slate-600 transition-colors leading-none"
            >
              Volohealth
            </a>

            <p className="text-xs text-slate-500 mb-6 leading-relaxed">
              *Financing is subject to eligibility, verification, and approval.
              Terms and conditions apply. The information provided is not a
              substitute for professional medical, financial, or legal advice.
            </p>

            <p className="text-xs text-slate-400 font-medium leading-relaxed">
              Copyright © 2024-2025{" "}
              <a
                href="https://volohealth.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-600 transition-colors"
              >
                Volo Health Services Private Limited®.
              </a>{" "}
              <br className="hidden sm:block" />
              All rights reserved.
            </p>
          </div>

          {/* Grouped Left-Aligned Columns */}
          <div className="flex flex-col sm:flex-row justify-start items-start gap-10 sm:gap-16 lg:gap-24">

            {/* Column 2: Useful Links (Using your state buttons) */}
            <div className="flex flex-col items-start">
              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-5 mt-1.5 leading-none">
                Useful Links
              </h3>
              <ul className="flex flex-col space-y-3">
                <li>
                  <button
                    onClick={() => setShowTerms(true)}
                    className="text-sm text-slate-600 hover:text-slate-900 hover:underline transition-all text-left"
                  >
                    Terms of Use
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setShowPrivacy(true)}
                    className="text-sm text-slate-600 hover:text-slate-900 hover:underline transition-all text-left"
                  >
                    Privacy Policy
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Our Lending Partner */}
            <div className="flex flex-col items-start">
              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-5 mt-1.5 leading-none">
                Our Lending Partner
              </h3>
              {/* Logo Card */}
              <div className="inline-flex bg-white border border-slate-200 px-5 py-3 rounded-xl shadow-sm hover:shadow-md transition-all">
                <Link
                  href="/lenders/respo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/respo.png"
                    alt="Lending Partner Logo"
                    width={75}
                    height={35}
                    className="object-contain cursor-pointer hover:scale-105 transition-transform"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {showTerms && <TermsModal onClose={() => setShowTerms(false)} />}
      {showPrivacy && <PrivacyModal onClose={() => setShowPrivacy(false)} />}
    </footer>
  );
}
"use client";
import { useState } from "react";

export default function FAQs() {
  const faqs = [
    {
      id: 1,
      question: "Who is eligible to apply for a Finnova healthcare loan?",
      answer:
        "Any patient undergoing treatment is eligible to apply for the loan. Loan approvals are based on quick digital checks and do not require lengthy procedures.",
    },
    {
      id: 2,
      question: "What documents are required for approval?",
      answer:
        "Typically, only basic KYC documents (Aadhaar, PAN, income proof if required) are needed. The process is simple and fully digital.",
    },
    {
      id: 3,
      question: "How fast can I get medical credit approved?",
      answer:
        "Most loans are approved within minutes when the eligibility criteria are met, ensuring patients don’t face delays in starting their treatment.",
    },
    {
      id: 4,
      question: "What repayment options are available?",
      answer:
        "Finnova offers flexible repayment options, including EMIs tailored to patient needs. Repayments can be made monthly through convenient digital channels.",
    },
    {
      id: 5,
      question: "Are there any pre-closure or hidden charges?",
      answer:
        "No. Finnova offers zero pre-closure charges and maintains complete transparency with patients about repayment terms.",
    },
    {
      id: 6,
      question: "Will taking a Finnova loan affect my credit score?",
      answer:
        "Repayments are reported like any other financial product. Timely repayment can improve your credit score, while delays may impact it.",
    },
    {
      id: 7,
      question: "Can I apply for Finnova credit before admission?",
      answer:
        "Yes, patients can apply in advance for planned procedures, ensuring funds are available when needed. For emergencies, approvals are processed within minutes at the hospital.",
    },
    {
      id: 8,
      question: "Do I need a guarantor for the loan?",
      answer:
        "In most cases, no guarantor is required. Loan approvals are based on digital checks of your eligibility.",
    },
    {
      id: 9,
      question: "What happens if I miss an EMI?",
      answer:
        "If an EMI is missed, Finnova will notify you immediately and provide options to regularize payments. Patients are encouraged to stay on track to avoid late fees or impact to their credit score.",
    },
    {
      id: 10,
      question: "Can I prepay my loan early?",
      answer:
        "Yes. You can prepay your loan at any time without penalty or pre-closure charges.",
    },
    {
      id: 11,
      question: "Can I use a portion of the loan amount for personal use?",
      answer:
        "No. Finnova offers a medical loan. The loan amount cannot be utilized for any other purposes.",
    },
    {
      id: 12,
      question: "Can the loan amount be transferred to my personal account?",
      answer:
        "No. The approved loan amount is transferred directly to the hospital when the bill is raised or at the time of discharge.",
    },
    {
      id: 13,
      question: "Are there interest-free or no-cost EMI options?",
      answer:
        "No-cost EMI and low cost EMI options are available with Finnova.",
    },
    {
      id: 14,
      question: "Is Finnova available across India?",
      answer:
        "Yes. Finnova has a growing network of partner hospitals across India, so patients can access credit solutions nationwide.",
    },
    {
      id: 15,
      question: "How secure is the Finnova platform?",
      answer:
        "We use bank-grade encryption, secure payment gateways, and follow RBI-compliant digital lending practices to ensure full data and transaction safety.",
    },
    {
      id: 16,
      question: "How does Finnova ensure data privacy and security?",
      answer:
        "We follow strict data security protocols and comply with Indian regulatory standards. Patient and hospital data is encrypted and never shared without consent.",
    },
    {
      id: 17,
      question: "Which hospitals are partnered with Finnova?",
      answer:
        "Finnova has partnered with over 14,000 hospitals across India, ranging from large multispecialty hospitals to smaller regional centers.",
    },
    {
      id: 18,
      question: "Is Finnova regulated by financial authorities in India?",
      answer:
        "Yes. Finnova operates under the regulatory framework applicable to NBFCs and digital lenders in India, ensuring compliance and transparency.",
    },
    {
      id: 19,
      question: "How is Finnova different from insurance or traditional loans?",
      answer:
        "Insurance may not cover all treatments, and traditional loans can be slow. Finnova bridges this gap by offering instant medical credit, fast hospital settlements, and patient-friendly repayment — with no delays and no hidden charges.",
    },
    {
      id: 20,
      question: "How is Finnova different from credit cards?",
      answer:
        "Credit cards have high interest rates and may not always be accepted for large medical bills. Finnova offers structured repayment plans, lower costs, and direct hospital settlements.",
    },
    {
      id: 21,
      question: "What specialties or treatments does Finnova cover?",
      answer:
        "Finnova covers a wide range of medical treatments — from surgeries and emergency care to specialized procedures. Coverage depends on the partner hospital and treatment plan.",
    },
    {
      id: 22,
      question: "How do hospitals get onboarded with Finnova?",
      answer:
        "The onboarding process is quick and digital. Our team works with hospital administrators to set up integration, provide staff training, and go live in a matter of days.",
    },
    {
      id: 23,
      question: "Can Finnova be used along with insurance?",
      answer:
        "Yes. Patients can use Finnova credit to cover expenses not paid by insurance — such as deductibles, non-covered procedures, or co-payments.",
    },
    {
      id: 24,
      question: "How long has Finnova been in operation?",
      answer:
        "Finnova was founded in 2024 by Volo Health Services, a leading healthcare technology and fintech company in India, and has already touched over 2.5 million lives.",
    },
    {
      id: 25,
      question: "Who can I contact for support?",
      answer:
        "You can reach our support team by filling the contact us form on our website- finnova.health",
    },
  ];

  const [openId, setOpenId] = useState(null);
  const [showAll, setShowAll] = useState(false);

  // Only show 6 FAQs until "Show More" is clicked
  const visibleFaqs = showAll ? faqs : faqs.slice(0, 6);

  return (
    <section id="faq" className="py-10 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-purpleSecondary mb-8">
        Frequently Asked Questions
      </h2>

      {/* FAQ list */}
      <div className="flex flex-col gap-4">
        {visibleFaqs.map((faq) => (
          <div key={faq.id} className="border rounded-lg shadow-sm">
            <button
              onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              className="w-full text-left px-4 py-3 flex justify-between items-center"
            >
              <span className="font-medium text-gray-800">{faq.question}</span>
              <span className="text-purpleSecondary">
                {openId === faq.id ? "−" : "+"}
              </span>
            </button>
            <div
              className={`px-4 overflow-hidden transition-all duration-500 ease-in-out ${
                openId === faq.id ? "max-h-[1000px] py-2" : "max-h-0 py-0"
              }`}
            >
              <p className="text-gray-600 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Show More / Show Less button */}
      {faqs.length > 6 && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-purpleSecondary text-white rounded-lg shadow hover:bg-purple-700 transition"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </section>
  );
}

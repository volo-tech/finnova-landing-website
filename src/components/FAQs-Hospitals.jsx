"use client";
import { useState } from "react";

export default function FAQs() {
  const faqs = [
    {
      id: 1,
      question: "How does Finnova improve hospital cash flow?",
      answer:
        "Finnova provides instant credit to patients, ensuring hospitals receive timely payments without delays. This reduces receivables, strengthens cash flow, and allows hospitals to focus on delivering uninterrupted care.",
    },
    {
      id: 2,
      question: "Are there any charges or fees for hospitals?",
      answer:
        "No hidden fees. Finnova operates transparently, with terms agreed upfront. Hospitals benefit from improved patient retention and faster settlements without additional financial burden.",
    },
    {
      id: 3,
      question: "Does Finnova integrate with existing hospital systems?",
      answer:
        "Yes. Finnova is designed to integrate seamlessly with hospital billing and administration processes, minimizing disruption to existing workflows.",
    },
    {
      id: 4,
      question:
        "What kind of support does Finnova provide to hospital finance teams?",
      answer:
        "We offer dedicated support, training, and easy-to-use dashboards so finance teams can track settlements, repayments, and patient status in real time.",
    },
    {
      id: 5,
      question: "Can Finnova help increase patient retention?",
      answer:
        "Yes. By offering patients instant access to medical credit, hospitals reduce treatment dropouts due to financial stress. This leads to higher retention, improved outcomes, and stronger patient trust.",
    },
    {
      id: 6,
      question: "What is the settlement process and how fast is it?",
      answer:
        "Hospitals receive settlements within hours of approval. Our digital-first platform ensures a smooth process, eliminating lengthy paperwork and delays.",
    },
    {
      id: 7,
      question:
        "What kind of support does Finnova provide to hospital finance teams?",
      answer:
        "We offer dedicated support, training, and easy-to-use dashboards so finance teams can track settlements, repayments, and patient status in real time.",
    },
    {
      id: 8,
      question: "Does Finnova offer reporting or analytics for hospitals?",
      answer:
        "Yes. Hospitals have access to dashboards that provide insights into patient credit uptake, settlement timelines, and repayment performance.",
    },
    {
      id: 9,
      question: "Can smaller or regional hospitals also partner with Finnova?",
      answer:
        "Absolutely. Finnova is designed to support hospitals of all sizes — from large multispecialty networks to regional and local hospitals and clinics.",
    },
    {
      id: 10,
      question: "How secure is the Finnova platform?",
      answer:
        "We use bank-grade encryption, secure payment gateways, and follow RBI-compliant digital lending practices to ensure full data and transaction safety.",
    },
    {
      id: 11,
      question: "How does Finnova ensure data privacy and security?",
      answer:
        "We follow strict data security protocols and comply with Indian regulatory standards. Patient and hospital data is encrypted and never shared without consent.",
    },
    {
      id: 12,
      question: "Which hospitals are partnered with Finnova?",
      answer:
        "Finnova has partnered with over 14,000 hospitals across India, ranging from large multispecialty hospitals to smaller regional centers.",
    },
    {
      id: 13,
      question: "Is Finnova regulated by financial authorities in India?",
      answer:
        "Yes. Finnova operates under the regulatory framework applicable to NBFCs and digital lenders in India, ensuring compliance and transparency.",
    },
    {
      id: 14,
      question: "What specialties or treatments does Finnova cover?",
      answer:
        "Finnova covers a wide range of medical treatments — from surgeries and emergency care to specialized procedures. Coverage depends on the partner hospital and treatment plan.",
    },
    {
      id: 15,
      question: "How do hospitals get onboarded with Finnova?",
      answer:
        "The onboarding process is quick and digital. Our team works with hospital administrators to set up integration, provide staff training, and go live in a matter of days.",
    },
    {
      id: 16,
      question: "Can Finnova be used along with insurance?",
      answer:
        "Yes. Patients can use Finnova credit to cover expenses not paid by insurance — such as deductibles, non-covered procedures, or co-payments.",
    },
    {
      id: 17,
      question: "How long has Finnova been in operation?",
      answer:
        "Finnova was founded in 2024 by Volo Health Services, a leading healthcare technology and fintech company in India, and has already touched over 2.5 million lives.",
    },
    {
      id: 18,
      question: "Who can I contact for support?",
      answer:
        "You can reach our support team by filling the contact us form on our website - finnova.health",
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

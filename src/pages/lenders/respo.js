import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const OurLender = () => {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 flex flex-col items-center">
            {/* Main Container */}
            <div className="w-full max-w-4xl bg-white shadow-md rounded-xl p-8 md:p-12 border border-gray-100">

                {/* Back Button Section - Ready for router.back() implementation */}

                {/* Header Section: Logos & Title */}
                <div className="flex flex-col items-center text-center mb-10 border-b border-gray-200 pb-8 mt-2">
                    <div className="flex items-center justify-center gap-8 mb-6">
                        <Image
                            src="/respo.png"
                            alt="Respo Logo"
                            width={120}
                            height={60}
                            className="object-contain"
                        />
                        {/* Divider line between logos */}
                        <div className="h-10 w-px bg-gray-300"></div>
                        <Image
                            src="/zype.svg"
                            alt="Zype Logo"
                            width={100}
                            height={50}
                            className="object-contain"
                        />
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                        Respo Financial Capital Private Limited
                    </h1>
                    <p className="text-gray-500 mt-2 font-medium">(In partnership with Zype)</p>
                </div>

                {/* Content Layout: Grid for links, full width for Grievance Details */}
                <div className="space-y-10">

                    {/* Important Links Grid */}
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Important Links</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ExternalLink href="https://respo.co.in/loan-product/" label="Loan Product Details" />
                            <ExternalLink href="https://respo.co.in/privacy-policy/" label="Data Privacy & Storage Policy" />
                            <ExternalLink href="https://respo.co.in/fair-practice-code/" label="Fair Practice Code Policy" />
                            <ExternalLink href="https://sachet.rbi.org.in/home/index" label="Sachet Portal (RBI)" />
                            <ExternalLink href="https://respo.co.in/" label="Official Website" />
                        </div>
                    </div>

                    {/* Grievance Redressal Section */}
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Grievance Redressal Officials</h2>
                        <p className="text-sm text-gray-500 mb-6 italic">
                            (As per Internal Ombudsman Scheme of RBI)
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Card 1: Grievance Redressal Officer */}
                            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                                    Grievance Redressal Officer
                                </h3>
                                <div className="space-y-2 text-sm text-gray-600">
                                    <p><span className="font-medium text-gray-800">Name:</span> Mr. Swapnil Kinalekar</p>
                                    <p><span className="font-medium text-gray-800">Address:</span> 2nd Floor Dyna Business Park MIDC, Andheri (East), Mumbai-400093</p>
                                    <p>
                                        <span className="font-medium text-gray-800">Contact:</span>{" "}
                                        <a href="tel:9819658465" className="text-blue-600 hover:underline">9819658465</a>
                                    </p>
                                    <p>
                                        <span className="font-medium text-gray-800">Email:</span>{" "}
                                        <a href="mailto:nodal@respo.co.in" className="text-blue-600 hover:underline">nodal@respo.co.in</a>
                                    </p>
                                </div>
                            </div>

                            {/* Card 2: Principal Nodal Officer */}
                            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                                    Principal Nodal Officer
                                </h3>
                                <div className="space-y-2 text-sm text-gray-600">
                                    <p><span className="font-medium text-gray-800">Name:</span> Mr. Swapnil Kinalekar</p>
                                    <p><span className="font-medium text-gray-800">Address:</span> 2nd Floor Dyna Business Park MIDC, Andheri (East), Mumbai-400093</p>
                                    <p>
                                        <span className="font-medium text-gray-800">Contact:</span>{" "}
                                        <a href="tel:9819658465" className="text-blue-600 hover:underline">9819658465</a>
                                    </p>
                                    <p>
                                        <span className="font-medium text-gray-800">Email:</span>{" "}
                                        <a href="mailto:nodal@respo.co.in" className="text-blue-600 hover:underline">nodal@respo.co.in</a>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

// Helper Component for consistent, nice-looking links
const ExternalLink = ({ href, label }) => {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 border border-gray-100 rounded-lg transition-colors group text-gray-700 hover:text-blue-600 font-medium text-sm"
        >
            <span>{label}</span>
            <svg
                className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
        </Link>
    );
};

export default OurLender;
export default function Footer() {
  return (
    <footer id="footer" className="bg-lightGray text-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex text-center flex-col justify-between items-center gap-6">
          {/* Left Section */}
          <div className="max-w-xl text-sm space-y-4">
            <p>
              Copyright © 2025{" "}
              <a
                href="https://volohealth.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lightBlue hover:underline"
              >
                <strong>Volohealth Services Private Limited</strong>
              </a>
              <br />
              All rights reserved.
            </p>
          </div>

          {/* Right Section */}
          <ul className="flex flex-col md:flex-row gap-3 md:gap-6 text-sm text-secondaryBlue">
            <li>
              <a href="#" className="hover:text-lightBlue">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-lightBlue">
                Privacy Policy
              </a>
            </li>
          </ul>
          <p className="text-gray-500 text-xs leading-relaxed">
            *All financing is subject to eligibility criteria, verification, and
            approval. Terms and conditions apply. The information provided is
            not a substitute for professional advice.
          </p>
        </div>
      </div>
    </footer>
  );
}

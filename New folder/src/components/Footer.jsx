import React from "react";

export default function Footer() {
  return (
    <>
      <footer
        id="contact"
        className="bg-[#000000] rounded-2xl border border-[#585858] text-white py-8 px-8 text-center"
      >
        <p className="mb-2">&copy; 2025 ChiBar. All rights reserved.</p>
        <div className="space-x-4">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
        </div>
      </footer>
    </>
  );
}

"use client";
import Link from "next/link";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { SUCCESS_TOAST, showToast } from "@/components/Toast";

export default function Footer() {
  const handleFeatures = () => {
    showToast("Coming Soon!", SUCCESS_TOAST);
  };

  return (
    <footer className="bg-blue-900 text-white rounded-t-2xl">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">SIAPIN</h2>
          <p className="text-sm text-gray-200 mb-4">Siap Hadapi Dunia Kerja</p>
          <div className="flex space-x-4 text-xl">
            <FaWhatsapp
              className="hover:text-green-400 transition"
              onClick={handleFeatures}
            />
            <FaInstagram
              className="hover:text-pink-400 transition"
              onClick={handleFeatures}
            />
          </div>
          <p className="mt-6 text-xs text-gray-300">
            © 2025 SIAPIN. All rights reserved.
          </p>
        </div>

        {/* Tentang Siapin */}
        <div>
          <h3 className="font-semibold mb-3">Tentang Siapin</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li>
              <Link href="/#about" className="hover:text-white">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Cari Kerja */}
        <div>
          <h3 className="font-semibold mb-3">Cari Kerja</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li>
              <Link href="/#job-trend" className="hover:text-white">
                Job Trend
              </Link>
            </li>
            <li>
              <Link href="/#skill-check" className="hover:text-white">
                Skill Check
              </Link>
            </li>
          </ul>
        </div>

        {/* Karierku */}
        <div>
          <h3 className="font-semibold mb-3">Karierku</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li>
              <Link
                href="/karierku/path-generator"
                className="hover:text-white"
              >
                Career Path Generator
              </Link>
            </li>
            <li>
              <Link
                href="/karierku/salary-predictor"
                className="hover:text-white"
              >
                Salary Predictor
              </Link>
            </li>
            <li>
              <Link href="/karierku/ai-cv/review" className="hover:text-white">
                AI CV Review
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

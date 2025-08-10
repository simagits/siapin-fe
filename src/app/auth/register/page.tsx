"use client";

import { FaGoogle } from "react-icons/fa";
import NextImage from "@/components/NextImage";
import { SUCCESS_TOAST, showToast } from "@/components/Toast";

export default function SignupPage() {
  const handleFeatures = () => {
    showToast("Coming Soon!", SUCCESS_TOAST);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-fixed bg-cover bg-center p-4"
      style={{
        backgroundImage: "url('/images/landing-page/noisy-background.png')",
      }}
    >
      <div className="absolute bottom-6 left-6">
        <NextImage
          src="/landing-page/hero-kiri.png"
          alt="Money"
          width={120}
          height={120}
        />
      </div>

      {/* Ilustrasi kanan atas */}
      <div className="absolute top-6 right-6">
        <NextImage
          src="/landing-page/hero-kanan.png"
          alt="Hero"
          width={120}
          height={120}
        />
      </div>

      <div className="bg-sky-200 rounded-2xl shadow-lg p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-purple-900 mb-2">
          Hello There!
        </h1>
        <p className="text-gray-700 mb-6">
          Let’s unlock your potential, create your free account
        </p>

        {/* Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>
          <div className="relative">
            <input
              type="confirm-password"
              placeholder="Confirm Password"
              className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-sky-500 hover:bg-sky-600 text-white py-2 rounded-md font-semibold"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-600">
          already have an account?{" "}
          <a href="/auth/login" className="text-sky-500 font-medium">
            login
          </a>
        </p>

        {/* Divider */}
        <div className="my-6 text-gray-500">-- or continue with --</div>

        {/* Google Button */}
        <button
          className="flex items-center justify-center w-10 h-10 mx-auto bg-white rounded-full shadow hover:shadow-lg transition"
          onClick={handleFeatures}
        >
          <FaGoogle className="text-lg text-gray-700" />
        </button>
      </div>
    </div>
  );
}

import NextImage from "@/components/NextImage";
import Typography from "@/components/Typography";
import Button from "@/components/buttons/Button";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm rounded-b-2xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/">
          <NextImage
            src="/navbar/logo.png"
            width={40}
            height={40}
            alt="Logo"
            className="cursor-pointer"
          />
        </Link>

        {/* Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-teal-600 font-semibold">
            Home
          </Link>
          <Link href="/about" className="text-blue-900 hover:text-teal-600">
            About
          </Link>
          <Link href="/job-trend" className="text-blue-900 hover:text-teal-600">
            Job Trend
          </Link>
          <Link
            href="/skill-check"
            className="text-blue-900 hover:text-teal-600"
          >
            Skill Check
          </Link>
          <div className="relative group">
            <button className="text-blue-900 hover:text-teal-600 flex items-center">
              Karierku <span className="ml-1">▼</span>
            </button>
            {/* Dropdown */}
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white rounded-lg shadow-lg py-2">
              <Link
                href="/karierku/profile"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Profile
              </Link>
              <Link
                href="/karierku/history"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                History
              </Link>
            </div>
          </div>
          <Link href="/testimoni" className="text-blue-900 hover:text-teal-600">
            Testimoni
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-3">
          <Button
            variant="ghost"
            size="sm"
            className="text-white bg-blue-900 px-4 py-2 rounded-md"
          >
            Login
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border border-blue-900 text-blue-900 px-4 py-2 rounded-md"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
}

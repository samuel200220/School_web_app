'use client';

import { Mail, Lock } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 via-blue-600 to-blue-800 px-4 py-10">
      <div className="bg-white rounded-lg shadow-lg flex w-full max-w-4xl overflow-hidden">
        {/* Left (Login Form) */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Login please</h2>

          <div className="space-y-4">
            {/* Email */}
            <div className="flex items-center border rounded-md px-3 py-2">
              <Mail className="text-gray-500 mr-2" />
              <input
                type="email"
                placeholder="Input your user ID or Email"
                className="w-full focus:outline-none"
              />
            </div>

            {/* Password */}
            <div className="flex items-center border rounded-md px-3 py-2">
              <Lock className="text-gray-500 mr-2" />
              <input
                type="password"
                placeholder="Input your password"
                className="w-full focus:outline-none"
              />
            </div>

            {/* Options */}
            <div className="flex justify-between items-center text-sm text-gray-600">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span>Remember me</span>
              </label>
              <Link href="#" className="hover:underline text-blue-600">Forgot Password?</Link>
            </div>

            {/* Login Button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded-md font-semibold flex justify-center items-center">
              <span>🔐</span>
              <span className="ml-2">LOG IN</span>
            </button>
          </div>
        </div>

        {/* Right (Welcome Box) */}
        <div className="hidden md:flex md:w-1/2 items-center justify-center bg-gradient-to-br from-blue-700 to-blue-900 text-white p-10">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">WELCOME!</h2>
            <p className="mb-6">Enter your details and start journey with us</p>
            <Link
              href="/signup"
              className="bg-white text-blue-700 px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition"
            >
              SIGNUP
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";

// Register Page
const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await fetch("api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstname, lastname, email, password }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data?.message || "Registration failed!");
      }

      setSuccess("User registered successfully!");
      setFirstname("");
      setLastname("");
      setEmail("");
      setPassword("");

      setTimeout(() => setSuccess(""), 3000);
    } catch (err: any) {
      setError(err.message || "Email already in use!");
      setTimeout(() => setError(""), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-l from-gray-800 via-gray-900 to-black flex items-center justify-center px-4">
      <div className="bg-transparent p-6 md:flex md:flex-row flex-col max-w-screen-lg mx-auto rounded-2xl shadow-xl w-full">

        {/* Column 1 */}
        <div className="w-full md:flex-1 p-6 bg-[#f5f5f5] rounded-xl shadow-md mb-6 md:mb-0 md:mr-6 flex flex-col justify-center">
          <p className="text-5xl font-bold mb-6 text-[#034a9c]">Nexus</p>
          <p className="text-[#2d2d2d] text-lg mb-4 text-left">
            Is therapy too expensive? Discover insights from others' therapy sessions. Join Nexus, the social media app dedicated to sharing therapy resources at no cost.
          </p>

          <p className="text-[#2d2d2d] text-sm mb-2 mt-5">Already have an account?</p>
          <Link href="/login">
            <button className="w-full bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded-xl font-semibold shadow-xl">
              Login
            </button>
          </Link>
        </div>

        {/* Column 2 */}
        <div className="w-full md:flex-1 bg-white shadow-lg rounded-2xl p-6 flex flex-col">
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="First name"
              className="mb-4 p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-gray-500"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Last name"
              className="mb-4 p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-gray-500"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Enter email"
              className="mb-4 p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-gray-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Enter password"
              className="mb-4 p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-gray-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-[#034a9c] hover:bg-[#022f73] text-white py-2 px-4 rounded-lg font-semibold shadow-xl"
            >
              Register
            </button>
            {success && <p className="text-blue-600 mt-4">{success}</p>}
            {error && <p className="text-red-600 mt-4">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

"use client";

import React, { useState } from "react";

export default function Home() {

  const handleLogin = async (e: any) => {
    e.preventDefault();

    let email = "falguni@gmail.com";
    let password = "1234";

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();

    if (res.status == 200) {
      // localStorage.setItem("token", data.token);
      // localStorage.setItem("email", data.email);
      // localStorage.setItem("password", data.password);
      window.location.href = "/dashboard"; // redirect after login
    } else {
      alert("Invalid credentials");
    }
  };

  const goToReport = () => {
    // Redirect to form page (app3 remote)
    console.log("here")
    window.location.href = "/remote2";
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded shadow-md w-80"
      >
        <h1 className="text-xl font-bold mb-4">Login</h1>
        <input
          type="email"
          placeholder="Email"
          value="falguni@gmail.com"
          // onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded w-full mb-3"
          required
        />
        <input
          type="password"
          placeholder="1234"
          value="1234"
          // onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded w-full mb-3"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Login
        </button>

      </form>
      <button
        onClick={goToReport}
        className="bg-grey-500 text-white p-2 rounded w-full"
      >
        Show report
      </button>
    </div>
  );
}
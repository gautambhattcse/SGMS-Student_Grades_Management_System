import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white py-4 mt-10">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-center sm:text-left">
          Made by <span className="font-semibold text-blue-400">Gautam Bhatt</span>
        </p>
        <p className="text-sm mt-2 sm:mt-0 text-center sm:text-right">
          © {new Date().getFullYear()} Student Grade Management System
        </p>
      </div>
    </footer>
  );
}

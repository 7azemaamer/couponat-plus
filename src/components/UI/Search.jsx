"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const Search = ({ label, inputClass, buttonClass, full = false }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-0">
      <input
        type="text"
        className={`border  border-gray-300 rounded-r-lg px-4 py-2 ${
          full ? "w-full" : " w-72"
        } bg-lightGray focus:outline-none hover:border-none border-none ${inputClass}`}
        placeholder={label}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        type="submit"
        className={`${buttonClass} bg-accent rounded-l-lg px-3 py-2`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </form>
  );
};

export const Search = ({ label }) => {
  return (
    <div className="flex gap-0">
      <input
        type="text"
        className="border border-gray-300 rounded-r-lg px-4 py-2 w-72 bg-lightGray focus:outline-none hover:border-none  border-none"
        placeholder={label}
      />
      <button className="bg-accent rounded-l-lg px-3 py-2">
        <svg
          xmlns="URL_ADDRESS.w3.org/2000/svg"
          className="h-5 w-5"
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
    </div>
  );
};

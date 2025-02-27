import React from "react";

const Category = ({ data, title, link }) => {
  return (
    <section className="w-full py-8 px-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg md:text-xl font-bold text-gray-800">{title}</h2>
        <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:border-black transition-colors">
          عرض الكل
        </button>
      </div>

      {/* Categories grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {data.map((category, index) => (
          <div
            key={index}
            className="flex items-center gap-5 justify-center p-4 bg-white shadow-lg rounded-lg  hover:border-accent hover:border transition-shadow"
          >
            <div className="flex items-center">
              <img
                src={category.icon}
                alt={category.title}
                className="w-5 h-auto mb-2"
              />
            </div>
            <p className="text-gray-700 text-sm font-medium">
              {category.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;

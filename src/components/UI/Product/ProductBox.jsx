export const ProductBox = ({ product }) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden border border-gray-200">
      <div className="flex">
        {/* Image and Logo  */}
        <div className="flex border-b border-lightGray w-60">
          <img
            src={product.offerImage}
            alt={`${product.title} logo`}
            className="max-w-full w-full h-full object-cover object-center"
          />
        </div>

        {/* Content  */}
        <div className="p-4 flex flex-col justify-between w-full">
          <img
            src={product.logo}
            alt={`${product.store} logo`}
            className="w-32 px-2 h-auto"
          />

          <div className="w-full">
            {/* Pirce */}
            <h3 className="text-xl text-center font-bold text-gray-800 min-h-[40px]">
              {product.price}
            </h3>

            {/* Action Buttonssssssssss */}
            <div className="bg-accent text-[12px] font-medium py-2 px-2 text-center cursor-pointer w-full">
              <a target="_blank" href={product.href || product.link}></a>
              احصل على العرض
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

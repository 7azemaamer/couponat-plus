export const StoreBox = ({ store }) => {
  return (
    <a
      href={store.link}
      className="group bg-white p-4 rounded-xl border border-gray-200 hover:border-primary transition-all"
    >
      <div className="flex flex-col items-center h-full">
        <img
          src={store.image}
          alt={store.name}
          className="w-32 h-16 object-contain mb-4"
        />
        <div className="mt-auto w-full text-center">
          <div className="text-xs text-gray-600">{store.coupons} كوبونات</div>
        </div>
      </div>
    </a>
  );
};

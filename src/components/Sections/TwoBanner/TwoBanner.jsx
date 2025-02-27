export const TwoBanner = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 d-container overflow-hidden my-16">
      <img
        src="https://couponksa.com/img/pages/home/add-to-chrome-ar.jpg"
        alt="Banner Image "
        className="md:w-[48%] w-full h-auto"
      />
      <img
        src="https://couponksa.com/img/pages/home/couponksabookbanner-ar.jpg"
        alt="Banner Image "
        className="md:w-[48%] w-full h-auto"
      />
    </div>
  );
};

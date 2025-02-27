import StorePageItem from "@/components/UI/Store/StorePageItem";
import { FaFilter } from "react-icons/fa";
import OtherCoupon from "./components/OtherCoupon";

export default function StorePage() {
  return (
    <>
      <StorePageItem />
      <div className="content">
        <div className="main d-container">
          <div className="top-title shadow-lg py-10 px-4 ">
            <h4 className="text-2xl font-bold">كوبونات وأكواد خصم امازون</h4>
          </div>
          <div className="filters bg-white rounded-lg shadow-sm my-3">
            <div className="p-4 border-b border-gray-100">
              <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
                <div className="w-full lg:w-auto">
                  <div
                    className="flex gap-2"
                    role="group"
                    aria-label="Store filters"
                  >
                    <a className="px-6 py-2 text-primary rounded-full font-medium text-md cursor-pointer  transition-all">
                      الكل
                    </a>
                    <a className="px-6 py-2 rounded-full  font-medium text-md cursor-pointer transition-all">
                      كوبون
                    </a>
                    <a className="px-6 py-2 rounded-full  font-medium text-md cursor-pointer transition-all">
                      عروض
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 w-full lg:w-auto">
                  <div className="flex-1 lg:flex-none">
                    <select
                      className="w-full lg:w-auto px-4 py-2 border-2 rounded-md text-sm font-medium focus:outline-none  transition-all"
                      aria-label="Sort options"
                    >
                      <option value="latest">أحدث</option>
                      <option value="popular">شائع</option>
                      <option value="expiry">تاريخ انتهاء الصلاحية</option>
                    </select>
                  </div>
                  <button
                    className="px-4 py-2 border-2 rounded-md text-sm font-medium flex items-center gap-2  transition-all"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#filter-collapse"
                    aria-expanded="true"
                    aria-controls="filter-collapse"
                  >
                    <span>تصفية</span>
                    <FaFilter size={15} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="other-categories">
            <OtherCoupon />
          </div>
        </div>
        <div className="sidebar"></div>
      </div>
    </>
  );
}

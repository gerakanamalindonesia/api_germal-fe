import React, { useState } from "react";

// plugins
import { motion, AnimatePresence } from "framer-motion";

// constant
import { menuLink, menuCategory, serviceCompany } from "fakeData";

// components
const ServiceCompanyDesktop = React.lazy(() =>
  import("components/moleculs/NavigationLayoutGlobal/ServiceCompanyDesktop")
);
const ServiceCompanyTablet = React.lazy(() =>
  import("components/moleculs/NavigationLayoutGlobal/ServiceCompanyTablet")
);
const DrawerMenuTablet = React.lazy(() =>
  import("components/moleculs/NavigationLayoutGlobal/DrawerMenuTablet")
);

export default function DesktopNavigation() {
  // initial state
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const [openDrawerTablet, setOpenDrawerTablet] = useState(false);

  // === handle show hide category menu ===
  const handleShowHideCategoryMenu = () => {
    setShowCategoryMenu(!showCategoryMenu);
  };
  // === end handle show hide category menu ===

  // === handle open hide drawer tablet ===
  const handleOpenHideDrawerTablet = () => {
    setOpenDrawerTablet(!openDrawerTablet);
  };
  // === end handle open hide drawer tablet ===
  return (
    <>
      <div className="px-5 py-3 hidden sm:flex items-center justify-between">
        {/* --- drawer menu --- */}
        <div className="hidden sm:block lg:hidden">
          <i
            className="bx bx-menu text-grayBlack text-3xl"
            onClick={handleOpenHideDrawerTablet}
          ></i>
        </div>
        {/* --- end drawer menu --- */}

        {/* --- logo --- */}
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-grayBlack">
            <span className="bg-red text-white py-1 px-2 rounded-md">
              jajan
            </span>
            kuy
          </h1>
        </div>
        {/* --- end logo --- */}

        {/* --- menu links --- */}
        <div className="hidden lg:flex items-center gap-5">
          {menuLink.map((item, index) => (
            <h6
              key={index}
              className="text-md text-grayBlack font-medium hover:underline hover:underline-offset-4 hover:decoration-4 decoration-red cursor-pointer"
            >
              {item.name}
            </h6>
          ))}
        </div>
        {/* --- end menu links --- */}

        {/* --- menu action --- */}
        <div className="flex items-center gap-5">
          <div className="relative cursor-pointer">
            <i className="bx bxs-shopping-bags text-3xl lg:text-4xl text-grayBlack"></i>

            <h6 className="text-white absolute text-sm lg:text-base font-semibold bg-red shadow shadow-red rounded-full px-2 top-0 -left-5">
              10
            </h6>
          </div>

          <div className="flex items-center flex-col cursor-pointer">
            <i className="bx bxs-user text-grayBlack text-2xl md:text-3xl lg:text-4xl"></i>
            <h6 className="text-grayBlack text-sm font-semibold -mt-1 lg:-mt-0">
              Daftar Akun
            </h6>
          </div>
        </div>
        {/* --- end menu action --- */}
      </div>

      {/* --- search section --- */}
      <div className="bg-yellow w-full px-5 py-3 hidden sm:flex items-center justify-between">
        {/* --- menu category --- */}
        <div className="relative">
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={handleShowHideCategoryMenu}
          >
            <i className="bx bx-menu text-2xl text-grayBlack"></i>
            <h6 className="text-xl text-grayBlack font-medium">
              Semua kategori
            </h6>
          </div>

          {/* --- category --- */}
          <AnimatePresence>
            {showCategoryMenu ? (
              <motion.div
                key="animateMenuCategory"
                initial={{
                  opacity: 0,
                  marginTop: "-10%",
                }}
                animate={{
                  opacity: 1,
                  marginTop: "0%",
                }}
                exit={{
                  opacity: 0,
                  marginTop: "-10%",
                }}
                className="absolute bg-white top-10 shadow-lg rounded-md h-56 overflow-y-auto"
                transition={{
                  type: "tween",
                }}
              >
                {menuCategory.map((item, index) => (
                  <div
                    key={index}
                    className="border-b-[1.5px] border-slate-200 "
                  >
                    <h6 className="text-grayBlack text-base font-medium p-5">
                      {item.name}
                    </h6>
                  </div>
                ))}
              </motion.div>
            ) : (
              ""
            )}
          </AnimatePresence>
          {/* --- end category --- */}
        </div>
        {/* --- end menu category --- */}

        {/* --- search bar --- */}
        <div className="bg-white w-8/12 flex items-center py-2 px-4 gap-1 rounded-md">
          <input
            placeholder="Cari produk disini...."
            className="w-full text-sm text-grayBlack font-medium outline-none"
          />

          <button className="bg-grayBlack text-white py-2 px-4 rounded-md shadow-md">
            <i className="bx bx-search text-xl font-bold"></i>
          </button>
        </div>
        {/* --- end search bar --- */}
      </div>
      {/* --- end search section --- */}

      {/* --- service company --- */}
      <div className="hidden lg:block">
        <ServiceCompanyDesktop service={serviceCompany} />
      </div>

      <div className="hidden sm:block lg:hidden">
        <ServiceCompanyTablet service={serviceCompany} />
      </div>
      {/* --- end service company --- */}

      {/* --- drawer menu tablet --- */}
      <DrawerMenuTablet
        menuLinks={menuLink}
        open={openDrawerTablet}
        onClose={handleOpenHideDrawerTablet}
      />
      {/* --- end drawer menu tablet --- */}
    </>
  );
}

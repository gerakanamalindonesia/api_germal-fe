import React, { useState } from "react";

// plugins
import { motion, AnimatePresence } from "framer-motion";

// constant
import { menuSelection, menuLink, menuCategory } from "fakeData";

export default function MobileNavigation() {
  // initial state
  const [menuSelectionActive, setMenuSelectionActive] = useState(0);
  const [showHideDrawerMenu, setShowHideDrawerMenu] = useState(false);

  // === handle change menu selection active ===
  const handleChangeMenuSelectionActive = (id) => {
    setMenuSelectionActive(id);
  };
  // === end handle change menu selection active ===

  // === handle show hide drawer menu ===
  const handleShowHideDrawerMenu = () => {
    setShowHideDrawerMenu(!showHideDrawerMenu);
  };
  // === end handle show hide drawer menu ===

  return (
    <>
      <div className="flex items-center justify-between py-3 px-2 ">
        {/* --- icon drawer --- */}
        <div>
          <motion.i
            whileTap={{
              scale: 0.9,
            }}
            className="bx bx-menu text-3xl text-grayBlack"
            onClick={handleShowHideDrawerMenu}
          ></motion.i>
        </div>
        {/* --- end icon drawer --- */}

        {/* --- logo --- */}
        <div>
          <h1 className="text-xl font-bold text-grayBlack">
            <span className="bg-red text-white py-1 px-2 rounded-md">
              jajan
            </span>
            kuy
          </h1>
        </div>
        {/* --- end logo --- */}

        {/* --- chart --- */}
        <div className="flex items-center gap-1 relative">
          <i className="bx bxs-shopping-bags text-grayBlack text-3xl"></i>

          <h6 className="text-xs font-bold bg-red shadow shadow-red text-white inline-block rounded-full px-2 absolute -top-0 -left-5">
            10
          </h6>
        </div>
        {/* --- chart --- */}
      </div>

      {/* --- search section --- */}
      <div className="bg-yellow py-2 px-3 flex items-center">
        <div className="bg-white w-full">
          <input
            placeholder="Cari produk disini..."
            className="text-xs font-semibold text-grayBlack w-full p-2 outline-none"
          />
        </div>

        <button className="bg-grayBlack py-1 px-3">
          <i className="bx bx-search text-white font-bold"></i>
        </button>
      </div>
      {/* --- end search section --- */}

      {/* --- drawer menu --- */}
      <AnimatePresence>
        {showHideDrawerMenu ? (
          <motion.div
            key="animateDrawerMenu"
            initial={{
              marginLeft: "-100%",
            }}
            animate={{
              marginLeft: "0%",
            }}
            exit={{
              marginLeft: "-90%",
            }}
            transition={{
              type: "tween",
            }}
            className="fixed top-0 w-9/12 h-screen bg-white shadow-2xl overflow-y-auto"
          >
            {/* --- close button --- */}
            <div className="w-full bg-yellow text-center py-1">
              <i
                className="bx bx-x text-3xl font-semibold text-grayBlack"
                onClick={handleShowHideDrawerMenu}
              ></i>
            </div>
            {/* --- end close button --- */}

            {/* --- menu selection --- */}
            <div className="flex justify-center gap-3 py-2">
              {menuSelection.map((item) => (
                <h6
                  key={item.id}
                  className={`text-grayBlack text-md font-medium ${
                    menuSelectionActive == item.id
                      ? "underline underline-offset-4 decoration-4 decoration-yellow"
                      : ""
                  }`}
                  onClick={() => handleChangeMenuSelectionActive(item.id)}
                >
                  {item.name}
                </h6>
              ))}
            </div>
            {/* --- end menu selection --- */}

            {/* --- main menu links --- */}
            <div className="mt-2">
              {menuSelectionActive == 0
                ? menuLink.map((item) => (
                    <div
                      key={item.id}
                      className="border-b-[1.5px] border-slate-300"
                    >
                      <motion.h6
                        key="animateMenuLink"
                        initial={{
                          opacity: 0,
                          marginLeft: "-10%",
                        }}
                        animate={{
                          opacity: 1,
                          marginLeft: "0%",
                        }}
                        exit={{
                          opacity: 0,
                          marginLeft: "-10%",
                        }}
                        className="text-grayBlack text-sm font-medium p-3"
                      >
                        {item.name}
                      </motion.h6>
                    </div>
                  ))
                : menuCategory.map((item) => (
                    <div
                      key={item.id}
                      className="border-b-[1.5px] border-slate-300"
                    >
                      <motion.h6
                        key="animateMenuCategory"
                        initial={{
                          opacity: 0,
                          marginLeft: "-10%",
                        }}
                        animate={{
                          opacity: 1,
                          marginLeft: "0%",
                        }}
                        exit={{
                          opacity: 0,
                          marginLeft: "-10%",
                        }}
                        className="text-grayBlack text-sm font-medium p-3"
                      >
                        {item.name}
                      </motion.h6>
                    </div>
                  ))}
            </div>
            {/* --- end main menu links --- */}
          </motion.div>
        ) : (
          ""
        )}
      </AnimatePresence>
      {/* --- end drawer menu --- */}
    </>
  );
}

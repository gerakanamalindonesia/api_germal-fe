// plugins
import { motion, AnimatePresence } from "framer-motion";

export default function DrawerMenuTablet({ menuLinks, open, onClose }) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          key="animateDrawerTablet"
          initial={{
            marginLeft: "-100%",
          }}
          animate={{
            marginLeft: "0%",
          }}
          exit={{
            marginLeft: "-100%",
          }}
          transition={{
            type: "tween",
          }}
          className="hidden sm:block lg:hidden fixed w-7/12 md:w-6/12 shadow-2xl h-screen bg-white top-0"
        >
          {/* --- close button --- */}
          <div className="bg-yellow text-center py-2">
            <i
              className="bx bx-x text-grayBlack text-4xl font-bold"
              onClick={onClose}
            ></i>
          </div>
          {/* --- end close button --- */}

          {/* --- main menu links --- */}
          <div>
            {menuLinks.map((item, index) => (
              <div key={index} className="border-b-[1.5px] border-slate-200">
                <h6 className="text-base font-medium text-grayBlack py-5 px-4">
                  {item.name}
                </h6>
              </div>
            ))}
          </div>
          {/* --- end main menu links --- */}
        </motion.div>
      ) : (
        ""
      )}
    </AnimatePresence>
  );
}

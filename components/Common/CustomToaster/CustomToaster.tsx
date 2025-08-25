import { AnimatePresence, motion } from "framer-motion";
import React, { ReactNode, cloneElement } from "react";
import { X } from "react-feather";
import { ToastIcon, Toaster, toast } from "react-hot-toast";

const CustomToaster = () => (
  <Toaster position="bottom-right">
    {t => {
      const icon = <ToastIcon toast={t} />;

      return (
        <AnimatePresence>
          {t.visible && (
            <motion.div
              className="flex rounded-lg bg-gray-50 px-6 py-4 shadow-lg dark:bg-tertiary"
              initial={{ scale: 0.6, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.6, opacity: 0, y: 20 }}
            >
              <React.Fragment>
                {cloneElement(icon, { className: "w-4 h-4 !mr-2" })}
                <span className="ml-2">{t.message as ReactNode}</span>
                {t.type !== "loading" && (
                  <button
                    className="ml-2 transition duration-200 hover:opacity-60"
                    onClick={() => toast.dismiss(t.id)}
                  >
                    <X  size={16} />
                  </button>
                )}
              </React.Fragment>
            </motion.div>
          )}
        </AnimatePresence>
      );
    }}
  </Toaster>
);

export default CustomToaster;

import React, { useEffect, useState } from "react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { DialogProps, PopupProps } from "../types";

const Dialog: React.FC<DialogProps> = ({ open, onClose, children }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center overflow-y-auto">
      <div
        className="fixed inset-0 bg-gray-500/75 transition-opacity"
        onClick={onClose}
      />
      <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        {children}
      </div>
    </div>
  );
};

const DialogPanel: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
      <div className="sm:flex sm:items-start">{children}</div>
    </div>
  );
};

const DialogTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <h3 className="text-base font-semibold text-gray-900">{children}</h3>;
};

const Popup: React.FC<PopupProps> = ({ showPopup, onConfirm, onCancel }) => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (showPopup) {
        event.preventDefault();
        event.returnValue =
          "You have unsaved changes. Are you sure you want to leave?";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [showPopup]);

  if (!showPopup) return null;

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogPanel>
        <div className="mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-yellow-100 sm:mx-0 sm:h-10 sm:w-10">
          <ExclamationTriangleIcon
            aria-hidden="true"
            className="h-6 w-6 text-yellow-600"
          />
        </div>
        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
          <DialogTitle>Unsaved Changes</DialogTitle>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              You have unsaved changes. Are you sure you want to leave without
              saving?
            </p>
          </div>
        </div>
      </DialogPanel>
      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
        <button
          type="button"
          onClick={onConfirm}
          className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
        >
          Leave
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
        >
          Stay
        </button>
      </div>
    </Dialog>
  );
};
export default Popup;

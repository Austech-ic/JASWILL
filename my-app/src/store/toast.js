import { create } from "zustand";

const TTE = 4 * 1000;

const defaultData = {
  type: "info",
  message: "Toast Loaded Successfully",
};

const Toast = create((set) => ({
  showToast: false,
  toastData: defaultData,
  toast: (params) => {
    set(() => ({ showToast: true, toastData: params }));

    if (params.type === "success") {
      return setTimeout(() => set(() => ({ showToast: false })), TTE);
    }

    if (params.type !== "error") {
      return setTimeout(() => set(() => ({ showToast: false })), TTE * 2);
    }
  },
  closeToast: () => set(() => ({ showToast: false })),
}));

export default Toast;

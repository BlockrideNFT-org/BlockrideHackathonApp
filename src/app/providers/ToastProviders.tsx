import * as React from "react";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { ReactComponent as Success } from "../assets/icons/success.svg";
import { ReactComponent as InfoError } from "../assets/icons/info-filled-error.svg";

export type ToastVariant = "success" | "error";

interface ToastContextType {
  showToast: (
    title: string,
    subTitle: string,
    variant: ToastVariant,
    transaction: boolean,
    link: string
  ) => void;
}

export const ToastContext = React.createContext<ToastContextType>({
  showToast: (_, __, ___) => {},
});
ToastContext.displayName = "ToastContext";

export default function ToastProvider(props: React.PropsWithChildren<any>) {
  const showToast = (
    title: string,
    subTitle: string,
    varaint: ToastVariant,
    transaction: boolean,
    link: string
  ) => {
    const message = (
      <div>
        {title && <p>{title}</p>}
        {subTitle && <p className="text-[14px]">{subTitle}</p>}
        {transaction && (
          <a
            onClick={() =>
              window.open(`https://xray.helius.xyz/tx/${link}?network=devnet`)
            }
            className="text-blue-500 text-[14px] mt-[10px] cursor-pointer"
          >
            View transaction
          </a>
        )}
      </div>
    );

    if (varaint === "success") {
      toast.success(message, { icon: Success });
    } else if (varaint === "error") {
      toast.error(message, {
        icon: <InfoError className="icon-error" />,
      });
    } else {
      toast(message);
    }
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      <ToastContainer hideProgressBar autoClose={10000} />
      {props.children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const { showToast } = React.useContext(ToastContext);

  return showToast;
}

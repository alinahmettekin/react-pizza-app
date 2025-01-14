import { createContext, useState } from "react";

export const UIContext = createContext();

export function UIContextProvider({ children }) {
  const [uiProgress, setUiProgress] = useState("");

  function showCart() {
    setUiProgress("cart");
  }

  function hideCart() {
    setUiProgress("");
  }

  function showCheckout() {
    setUiProgress("checkout");
  }

  function hideCheckout() {
    setUiProgress("");
  }

  const uiContext = {
    uiProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };

  return <UIContext.Provider value={uiContext}>{children}</UIContext.Provider>;
}

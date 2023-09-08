import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { configureStore, PreloadedState } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

// Import your own reducer
import ChangeInputSlice from "../store/ChangeInputSlice";

function render(
  ui,
  {
    preloadedState,
    store = configureStore({ reducer: { home: ChangeInputSlice }, preloadedState }),
    ...renderOptions 
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
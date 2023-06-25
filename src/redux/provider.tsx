"use client";

import { store } from "./store";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";

export function Providers({
  children,
  session,
}: {
  children: React.ReactNode;
  session?: any;
}) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        {children}
        <ToastContainer />
      </Provider>
    </SessionProvider>
  );
}

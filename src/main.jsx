import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routers/routers";
import AuhtProvider from "./providers/AuhtProvider";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuhtProvider>
        <RouterProvider router={router} />
      </AuhtProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

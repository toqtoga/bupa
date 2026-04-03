import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { OwnerAndBooks } from "./components/OwnerAndBooks/OwnerAndBooks";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10,
      retry: 1,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <OwnerAndBooks />
    </QueryClientProvider>
  </StrictMode>,
);

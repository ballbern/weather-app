import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import "./index.css";
import { WeatherProvider } from "./context/WeatherContext";

// async function deferRender() {
//   const { worker } = await import("./mocks/browser.ts");
//   return worker.start();
// }

// deferRender().then(() => {
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <WeatherProvider>
        <App />
        <ReactQueryDevtools />
      </WeatherProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
// });

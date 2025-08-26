import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// IMPORTING THE NAVBAR LINKS FILE
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Country } from "./pages/Country";
import { Contact } from "./pages/Contact";
import { AppLayout } from "./Components/Layout/AppLayout";
import { ErrorPage } from "./pages/ErrorPage";
import { CountryDetails } from "./Components/Layout/CountryDetails";

// CREATING A ROUTER TO ROUTE OR NAVIGATE THE URL
const router = createBrowserRouter([
  {
    path: "/", // THIS IS A PARENT
    element: <AppLayout />,
    errorElement: <ErrorPage /> ,// IF THE COMPONENT DOES'NT MATCH IT WILL SHOW THE CUSTOME ERROR APP
    children: [ // WE PASS THE NAVBAR ELEMENT FROM PARENT TO CHILD.
      {
        path: "/", // DECIDE KIS PATH PE JANA HE
        element: <Home />, //KIS ELEMENT KO RE-DIRECT KARNA HE
      },
      {
        path: "about", // DECIDE KIS PATH PE JANA HE
        element: <About />, //KIS ELEMENT KO RE-DIRECT KARNA HE
      },
      {
        path: "country", // DECIDE KIS PATH PE JANA HE
        element: <Country />, //KIS ELEMENT KO RE-DIRECT KARNA HE
      },
      {
        path: "country/:id",
        element: <CountryDetails />,
      },
      {
        path: "contact", // DECIDE KIS PATH PE JANA HE
        element: <Contact />, //KIS ELEMENT KO RE-DIRECT KARNA HE
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
export default App;

import { createBrowserRouter, Route, Link } from "react-router-dom";
import App from "./App";
import MainLayout from "./layouts/MainLayout";
import RegisterPage from "./pages/register";
import HomePage from "./pages";
import { DetailsPage } from "./pages/details";
import { PageNotFound } from "./pages/_404";
import FooterSection from "./components/FooterSection";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <HomePage />
        <FooterSection />
      </MainLayout>
    ),
  },

  {
    path: "/register",
    element: (
      <MainLayout>
        <RegisterPage />
      </MainLayout>
    ),
  },

  {
    path: "/profile/:id",
    element: (
      <MainLayout>
        <DetailsPage />
      </MainLayout>
    ),
  },

  {
    path: "/*",
    element: (
      <MainLayout>
        <PageNotFound />
      </MainLayout>
    ),
  },
]);

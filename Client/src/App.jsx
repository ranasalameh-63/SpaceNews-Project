import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home,
  ArticleDetails,
  Bookmark,
  Categories,
  Contact,
  About,
  Login,
  Navbar,
  NewsArticleCreation,
  Profile,
  Register,
  ToBeJournalist,
  PageNotFound
} from "./Components";
import Footer from "./Components/Footer/Footer";

// NEW IMPORTS:
import AdminDashboard from "./Components/AdminDashboard/AdminDashboard";
import ProtectedRoute from "./Components/ProtectedRoute";
import AboutUs from "./Components/About/About";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/",
          element: <Home />,
          errorElement: <PageNotFound />,
        },
        {
          path: "/ArticleDetails/:id",
          element: <ArticleDetails />,
        },
        {
          path: "/Bookmark",
          element: <Bookmark />,
        },
        {
          path: "/Categories",
          element: <Categories />,
        },
        {
          path: "/Contact",
          element: <Contact />,
        },
        {
          path: "/About",
          element: <AboutUs />,
        },
        {
          path: "/ToBeJournalist",
          element: <ToBeJournalist />,
        },
        {
          path: "/Profile/:id",
          element: <Profile />,
        },
        {
          path: "/NewsArticleCreation",
          element: <NewsArticleCreation />,
        },
      ],
      errorElement: <PageNotFound />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/Register",
      element: <Register />,
    },
    // ----------------------------------
    // Add the Admin route here:
    {
      path: "/admin",
      element: (
        <ProtectedRoute requiredRole="admin">
          <AdminDashboard />
        </ProtectedRoute>
      ),
      errorElement: <PageNotFound />,
    },
    // ----------------------------------
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;

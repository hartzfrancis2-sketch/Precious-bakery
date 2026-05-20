import { lazy, Suspense } from "react";
import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes/paths";
import { useScrollToTop } from "./hooks/useScrollToTop";
import { SEO } from "./components/common";

/* NORMAL IMPORTS FOR SERVICES */
import CakeService from "./services/CakeService";
import DessertService from "./services/DessertService";
import BreadService from "./services/BreadService";
import BirthService from "./services/BirthService";
import DesignService from "./services/DesignService";
import WeddingService from "./services/WeddingService";

/* LAZY LOAD ONLY PAGES */
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  useScrollToTop({ x: 0, y: 0 }, "auto");

  return (
    <div className="bg-primary text-black min-h-screen">
      <SEO
        title="Precious Bakery"
        description="Luxury cakes, pastries and desserts in Accra Ghana"
        keywords="bakery Ghana, cakes Accra"
      />

      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen">
            <div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        }
      >
        <Layout>
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.SERVICES} element={<Services />} />
            <Route path={ROUTES.GALLERY} element={<Gallery />} />
            <Route path={ROUTES.CONTACT} element={<Contact />} />

            <Route
              path={ROUTES.CAKESERVICE}
              element={<CakeService />}
            />

            <Route
              path={ROUTES.DESSERTSERVICE}
              element={<DessertService />}
            />

            <Route
              path={ROUTES.BREADSERVICE}
              element={<BreadService />}
            />

            <Route
              path={ROUTES.WEDDINGSERVICE}
              element={<WeddingService />}
            />

            <Route
              path={ROUTES.BIRTHSERVICE}
              element={<BirthService />}
            />

            <Route
              path={ROUTES.DESIGNSERVICE}
              element={<DesignService />}
            />

            <Route
              path={ROUTES.NOTFOUND}
              element={<NotFound />}
            />
          </Routes>
        </Layout>
      </Suspense>
    </div>
  );
}

export default App;
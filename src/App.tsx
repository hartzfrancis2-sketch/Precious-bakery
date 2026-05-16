import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes/paths";
import { useScrollToTop } from "./hooks/useScrollToTop";
import { Home, About, Services, Gallery, Contact } from "./pages";
import CakeService from "./services/CakeService";
import DessertService from "./services/DessertService";
import BreadService from "./services/BreadService";
import BirthService from "./services/BirthService";
import DesignService from "./services/DesignService";
import WeddingService from "./services/WeddingService";
import NotFound from "./pages/NotFound";
import { SEO } from "./components/common";

function App() {
  useScrollToTop({ x: 0, y: 0 }, "auto");

  return (
    <div className="bg-primary text-black min-h-screen">
      <SEO
        title="Precious Bakery"
        description="Luxury cakes, pastries and desserts in Accra Ghana"
        keywords="bakery Ghana, cakes Accra"
      />
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.SERVICES} element={<Services />} />
          <Route path={ROUTES.GALLERY} element={<Gallery />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path={ROUTES.CAKESERVICE} element={<CakeService />} />
          <Route path={ROUTES.DESSERTSERVICE} element={<DessertService />} />
          <Route path={ROUTES.BREADSERVICE} element={<BreadService />} />
          <Route path={ROUTES.WEDDINGSERVICE} element={<WeddingService />} />
          <Route path={ROUTES.BIRTHSERVICE} element={<BirthService />} />
          <Route path={ROUTES.DESIGNSERVICE} element={<DesignService />} />
          <Route path={ROUTES.NOTFOUND} element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

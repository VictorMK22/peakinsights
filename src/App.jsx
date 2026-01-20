import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Leadership from "./pages/Leadership";
import Insights from "./pages/Insights";
import Contact from "./pages/Contact";
import InsightArticle from "./pages/InsightArticle";

import FractionalCFO from "./pages/services/FractionalCFO";
import GrowthTransformation from "./pages/services/GrowthTransformation";
import FamilyBusiness from "./pages/services/FamilyBusiness";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/insights/:slug" element={<InsightArticle />} />

        {/* Service sub-pages */}
        <Route
          path="/services/fractional-cfo"
          element={<FractionalCFO />}
        />
        <Route
          path="/services/growth-transformation"
          element={<GrowthTransformation />}
        />
        <Route
          path="/services/family-business"
          element={<FamilyBusiness />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

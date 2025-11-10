import { Routes, Route } from 'react-router-dom';

// Layouts
import PageLayout from './layouts/PageLayout';

// Pages
import Home from './pages/Home';
import ProjectStarter from './pages/ProjectStarter';         // Pour les porteurs de projet
import IndependentPro from './pages/IndependentPro';         // Pour les indépendants déjà établis
import SmallBusiness from './pages/SmallBusiness';           // Pour les TPE / PME
import NotFound from './pages/NotFound';                     // Page 404
import LegalInfo from './pages/LegalInfo';
import WebAgency from './pages/WebAgency';                  // Pour les agences web

// Others
import ContactModal from './components/ContactModal';
import ScrollToTop from './utils/ScrollToTop';
import ToTopButton from './components/UI/ToTopButton';


function App() {

  return (
    <>
      <ContactModal />
      <ScrollToTop />
      <ToTopButton />
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projet-lancement" element={<ProjectStarter />} />
          <Route path="/professionnel-independant" element={<IndependentPro />} />
          <Route path="/entreprise-locale" element={<SmallBusiness />} />
          <Route path="/mentions-legales" element={<LegalInfo />} />
          <Route path="/agence-web" element={<WebAgency />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

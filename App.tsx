import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LoadingScreen from './components/ui/LoadingScreen';

const HomePage = lazy(() => import('./pages/HomePage'));
const ModelsPage = lazy(() => import('./pages/ModelsPage'));
const ModelDetailPage = lazy(() => import('./pages/ModelDetailPage'));
const EngineeringPage = lazy(() => import('./pages/EngineeringPage'));
const ConfiguratorPage = lazy(() => import('./pages/ConfiguratorPage'));
const ComparePage = lazy(() => import('./pages/ComparePage'));
const BookTestDrivePage = lazy(() => import('./pages/BookTestDrivePage'));
const BookingConfirmationPage = lazy(() => import('./pages/BookingConfirmationPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/models" element={<ModelsPage />} />
            <Route path="/models/:modelId" element={<ModelDetailPage />} />
            <Route path="/engineering" element={<EngineeringPage />} />
            <Route path="/configurator/:modelId" element={<ConfiguratorPage />} />
            <Route path="/compare" element={<ComparePage />} />
            <Route path="/book-test-drive" element={<BookTestDrivePage />} />
            <Route path="/booking-confirmation" element={<BookingConfirmationPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

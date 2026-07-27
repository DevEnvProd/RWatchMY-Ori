import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import './index.css';

// Pages
import { News } from './pages/News';
import { ArticleDetail } from './pages/ArticleDetail';
import { Directory } from './pages/Directory';
import { ReitDetail } from './pages/ReitDetail';
import { HospitalityFocus } from './pages/HospitalityFocus';
import { Compare } from './pages/Compare';
import { Learn } from './pages/Learn';
import { About } from './pages/About';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<News />} />
          <Route path="news" element={<News />} />
          <Route path="blog/:slug" element={<ArticleDetail />} />
          <Route path="reits" element={<Directory />} />
          <Route path="reits/:id" element={<ReitDetail />} />
          <Route path="sectors/hospitality" element={<HospitalityFocus />} />
          <Route path="compare" element={<Compare />} />
          <Route path="learn" element={<Learn />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

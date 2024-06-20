import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './HomePage.js';
import BlogPage from './BlogPage.js';
import BlogPostPage from './BlogPostPage.js';
import PhotoPage from './PhotoPage.js';
import NotFoundPage from './components/NotFoundPage.js';
import './i18n'; // 追加
import Loader from './components/Loader'; // ローディングコンポーネントをインポート

const App = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleLoading = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000); // ローディングの遅延を設定（例：1秒）
    };

    handleLoading();
  }, [location]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:postId" element={<BlogPostPage />} />
      <Route path="/photo" element={<PhotoPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

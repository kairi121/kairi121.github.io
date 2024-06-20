import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './HomePage.js';
import BlogPage from './BlogPage.js';
import BlogPostPage from './BlogPostPage.js';
import PhotoPage from './PhotoPage.js'; // PhotoPageのインポート
import './i18n'; // 追加

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:postId" element={<BlogPostPage />} />
        <Route path="/photo" element={<PhotoPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

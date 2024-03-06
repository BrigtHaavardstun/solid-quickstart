import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

function RedirectReactRouterExample() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
}

function About() {
  return <div>About</div>;
}

function Index() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      // Redirects to the '/about' page with 'replace: true'
      navigate('/about', { replace: true });
    }, 3000); // Redirect after 3 seconds
  }, []);

  return <div>Redirecting...</div>;
}

export default RedirectReactRouterExample;

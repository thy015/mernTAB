import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { routers } from "./routers/router";
import { Fragment } from "react";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import React, { Suspense } from 'react';
import { useState } from "react";
function App() {
  const [formData, setFormData] = useState({});
  const DynamicComponent = React.lazy(() => import('authApp'))
  return (
    <div className="App">
       <React.Suspense fallback="Loading...">
      <DynamicComponent />
    </React.Suspense>
      <Router>
        <Routes>
          {routers.map((r) => {
            const Page = r.page;
            const Layout = r.isShowHeader ? Header : Fragment;
            const FooterLayout = r.isShowFooter ? Footer : Fragment;
            return (
              <Route
                key={r.path}
                path={r.path}
                element={
                  <Layout>
                    <Page />
                    <FooterLayout></FooterLayout>
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
      HI

    </div>
  );
}

export default App;

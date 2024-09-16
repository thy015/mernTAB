import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import {routers} from './routers/router';
import Header from './partials/Header';
import Footer from './partials/Footer';
import React, {Fragment, useState} from 'react';

function App() {
  const [formData, setFormData] = useState();
  return (<div className="App">

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
  </div>);
}

export default App;
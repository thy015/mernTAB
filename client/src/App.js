import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { routers } from "./routers/router";
import { Fragment } from "react";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import Register from "./component/Register";
import CreateRoom from "./component/CreateRoom";
import RevenueStats from "./component/RevenueStats";
import RoomList from "./component/RoomList";
import Manage from "./component/Manage";
import Dashboard from "./component/Dashboard";
import ProfileDetail from "./component/ProfileDetail";
import Login from "./component/Login";
import { useState } from "react";
function App() {
  const [formData, setFormData] = useState({});
  return (
    <div className="App">
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
    </div>
  );
}

export default App;

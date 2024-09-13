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
    // <div className="App">
    //   <Router>
    //     <Routes>
    //       {routers.map((r) => {
    //         const Page = r.page;
    //         const Layout = r.isShowHeader ? Header : Fragment;
    //         const FooterLayout = r.isShowFooter ? Footer : Fragment;
    //         return (
    //           <Route
    //             key={r.path}
    //             path={r.path}
    //             element={
    //               <Layout>
    //                 <Page />
    //                 <FooterLayout></FooterLayout>
    //               </Layout>
    //             }
    //           />
    //         );
    //       })}
    //     </Routes>
    //   </Router>
    // </div>

    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="register-owner" element={<Register />} />
          <Route path="/" element={<Manage />}>
            <Route index element={<Dashboard />} />
            <Route
              path="create-room"
              element={
                <CreateRoom formData={formData} setFormData={setFormData} />
              }
            />
            <Route path="revenue-stats" element={<RevenueStats />} />
            <Route path="room-list" element={<RoomList />} />
            <Route path="profile/:id" element={<ProfileDetail />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

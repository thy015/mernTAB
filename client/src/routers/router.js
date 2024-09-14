import Login from "../component/Login";
import HomePage from "../pages/user/HomePage";

export const routers = [
  {
    path: "/",
    page: HomePage,
    isShowHeader: true,
    isShowFooter: true,
  },
  {
    path: "/ownerLogin",
    page: Login,
    isShowHeader: false,
    isShowFooter: true,
  },
];

{
  /* <Router>
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
    </Router> */
}

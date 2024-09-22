
import HomePage from "../pages/user/HomePage";
import {SignInPage,SignUpPage} from '../pages/auth/AuthPage'
import HotelDisplayCompre from "../pages/user/HotelDisplayPage";

export const routers = [
  {
    path: "/",
    page: HomePage,
    isShowHeader: true,
    isShowFooter: true,
  },
  {
    path: "/booking",
    page: HotelDisplayCompre,
    isShowHeader: true,
    isShowFooter: true,
  },
  // {
  //   path: "/sign-in",
  //   page: SignInPage,
  //   isShowHeader: false,
  //   isShowFooter: false,
  // },
  // {
  //   path: "/sign-up",
  //   page: SignUpPage,
  //   isShowHeader: false,
  //   isShowFooter: false,
  // },
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

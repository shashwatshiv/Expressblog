import { BrowserRouter, Route, Routes } from "react-router";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Blog } from "./pages/Blog";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import { UserProfile } from "./pages/UserProfile";
import { LandingPage } from "./pages/LandingPage";
import { Blogs } from "./pages/Blogs";
import { AuthProvider } from "./contexts/AuthProvider";
import Footer from "./components/Footer";
import WriteBlog from "./pages/WriteBlog";
function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/write" element={<WriteBlog />} />
              <Route path="/blog/:id" element={<Blog />} />
              <Route path="/user" element={<UserProfile />} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;

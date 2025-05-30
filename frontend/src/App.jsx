import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage"
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import SettingsPage from "./pages/SettingsPage";
import { useAuthStore } from "./store/useAuthStore";
import { useThemeStore } from "./store/useThemeStore";
import { useEffect } from "react";
import { Loader } from "lucide-react";
import { Toaster } from "react-hot-toast"
import { Navigate } from "react-router-dom";




const App = () => {
  const {authUser,checkAuth,isCheckingAuth,onlineUsers} = useAuthStore();
  const {theme}=useThemeStore();

  console.log({onlineUsers});

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log({authUser});
  //console.log("Auth User:", authUser);
  //console.log("Is Checking Auth:", isCheckingAuth);
  if (isCheckingAuth && !authUser)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );



  return (
<div data-theme={theme}>
<Navbar />

<Routes>
  <Route path="/" element={authUser ? <HomePage /> : <Navigate to ="/login" />} />
  <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/"/>} />
  <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/"/>} />
  <Route path="/settings" element={<SettingsPage />} />
  <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to ="/login" />} />
</Routes>

<Toaster />
</div>
  )
}
export default App;
import { useContext } from "react";

import { Route, Routes, Navigate } from "react-router-dom";
import AuthForm from "./components/Auth/AuthForm";

import Layout from "./components/Layout/Layout";
import About from "./components/other/About";
import Contact from "./components/other/Contact";
import UserProfile from "./components/Profile/UserProfile";
import StartingPageContent from "./components/StartingPage/StartingPageContent";
import AuthContext from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route path="/" index element={<StartingPageContent />} /> */}
        {!authCtx.isLoggedIn && <Route path="/" element={<AuthForm />} />}
        {authCtx.isLoggedIn && (
          <Route path="/" element={<StartingPageContent />} />
        )}
        {authCtx.isLoggedIn && (
          <Route path="/profile" element={<UserProfile />} />
        )}
        {authCtx.isLoggedIn && (
          <Route path="/about" element={<About />} />
        )}
        {authCtx.isLoggedIn && (
          <Route path="/contact" element={<Contact />} />
        )}
        {!authCtx.isLoggedIn && (
          <Route path="/profile" element={<Navigate replace to="/auth" />} />
        )}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import { AuthContext } from "./Store/Auth-Context";
import { useContext } from "react";

function App() {
  const context = useContext(AuthContext);

  return (
    <Layout>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {context.isLoggedIn === false ? (
            <Route path="/auth" element={<AuthPage />} />
          ) : null}
          {context.isLoggedIn && (
            <Route path="/profile" element={<UserProfile />} />
          )}
          <Route path="*" element={<HomePage />}></Route>
        </Routes>
      </main>
    </Layout>
  );
}

export default App;

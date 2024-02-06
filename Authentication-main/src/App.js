import { Router, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Layout>
      <Router>
        <Route path="/" elment={<HomePage />} exact />
        <Route path="/auth" elment={<AuthPage />} />
        <Route path="/profile" elment={<UserProfile />} />
      </Router>
    </Layout>
  );
}

export default App;

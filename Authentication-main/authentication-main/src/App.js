import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Layout>
      <main>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/auth" exact>
            <AuthPage />
          </Route>
          <Route path="/profile" exact>
            <UserProfile />
          </Route>
        </Switch>
      </main>
    </Layout>
  );
}

export default App;

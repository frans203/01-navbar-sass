import Layout from "./components/Layout";
import { Switch, Route, Router } from "react-router-dom";
import Home from "./pages/Home";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import PageOne from "./pages/PageOne";
import PageCTA from "./pages/PageCTA";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/page-one">
          <PageOne />
        </Route>

        <Route path="/page-two">
          <PageTwo />
        </Route>

        <Route path="/page-three">
          <PageThree />
        </Route>

        <Route path="/page-cta">
          <PageCTA />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Exercises from "../pages/Exercises";
import ExerciseNew from "../pages/ExerciseNew";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import About from "../pages/About";
import GymMap from "../pages/ContactUs";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Provider } from "react-redux";
import store from "../state/store";

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Navbar />
      <div
        style={{
          backgroundColor: "rgb(250,250,250)",
          position: "relative",
          top: 64,
          backgroundSize: "cover",
          height: "calc(100vh - 85px)",
        }}
      >
        <Switch>
          <Route exact path="/exercise" component={Exercises} />
          <Route exact path="/contactus" component={GymMap} />
          <Route exact path="/exercise/new" component={ExerciseNew} />
          <Route exact path="/about" component={About} />
          <Route exact path="/Gym" component={Home} />
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Provider>
  </BrowserRouter>
);

export default App;

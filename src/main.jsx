import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Products from "./components/Products";
import Home from "./components/Home"
import {Provider} from "react-redux"
import store from "./redux/store";


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Routes>
    </Provider>
  </BrowserRouter>,

  document.getElementById("root")
);

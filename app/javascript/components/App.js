import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PropTypes from "prop-types";

import Greeting from "./Greeting";

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Greeting greeting="Hello World!" />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App

import React from "react";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "@components/ErrorBoundaries/ErrorBoundaries";
import Routes from '@routes';
import "./App.less";

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes />
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;

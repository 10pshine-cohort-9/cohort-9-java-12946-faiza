import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import "./App.css";

import App from "./App.jsx";


class ErrorBoundary extends Component {

  constructor(props) {

    super(props);

    this.state = {
      hasError: false
    };

  }


  static getDerivedStateFromError() {

    return {
      hasError: true
    };

  }


  componentDidCatch(error, errorInfo) {

    console.error(
      "Application rendering error:",
      error,
      errorInfo
    );

  }


  handleRefresh = () => {

    window.location.reload();

  };


  render() {


    if (this.state.hasError) {


      return (

        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "var(--background)",
            padding: "20px"
          }}
        >

          <div
            className="card"
            style={{
              maxWidth: "450px",
              padding: "40px",
              textAlign: "center"
            }}
          >

            <h1>
              Something went wrong
            </h1>


            <p style={{marginTop:"12px"}}>
              We couldn't load this page.
              Please refresh and try again.
            </p>


            <button
              className="auth-button"
              style={{
                marginTop:"25px"
              }}
              onClick={this.handleRefresh}
            >

              Refresh Page

            </button>


          </div>

        </div>

      );

    }


    return this.props.children;

  }

}



createRoot(
  document.getElementById("root")
).render(

  <StrictMode>

    <ErrorBoundary>

      <App />

    </ErrorBoundary>

  </StrictMode>

);
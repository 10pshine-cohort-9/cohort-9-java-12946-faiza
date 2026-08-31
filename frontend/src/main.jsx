import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import "./App.css";

import App from "./App.jsx";


class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
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

    this.setState({ error, errorInfo });
  }

  formatError(error) {
    try {
      return String(error);
    } catch {
      return "Unknown error";
    }
  }

  handleRefresh = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div>
          {/* Existing UI */}

          <button
            className="auth-button"
            onClick={async () => {
              try {
                if (!window.navigator.clipboard) {
  throw new Error("Clipboard API is not available.");
}

await window.navigator.clipboard.writeText(
  JSON.stringify({
    error: this.formatError(this.state.error),
    stack: this.state.errorInfo?.componentStack
  })
);
              } catch (error) {
                console.error("Could not copy error details:", error);
              }
            }}
          >
            Copy error
          </button>

          {this.state.error && (
            <details>
              <summary>View error details</summary>

              <div>
                <div>
                  <strong>Message:</strong>{" "}
                  {this.formatError(this.state.error)}
                </div>

                <div>
                  <strong>Stack:</strong>

                  <pre>
                    {this.state.errorInfo?.componentStack}
                  </pre>
                </div>
              </div>
            </details>
          )}
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
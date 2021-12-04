import React from "react";
import { System } from "../utils/loadComponents";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      system: undefined,
    };
  }

  static getDeliveredStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      system: {
        url: "http://localhost:8081/remoteEntry.js",
        scope: "dsl",
        module: "./ButtonFallback",
      },
    });
  }

  render() {
    if (this.state.hasError) {
      return <System system={this.state.system} />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

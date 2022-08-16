import React from 'react';
import { Message } from '@innovaccer/design-system';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Message
          className="my-7"
          appearance="alert"
          title="Something is broken."
          description="Hold tight, we are working to get it up for you to interact with."
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

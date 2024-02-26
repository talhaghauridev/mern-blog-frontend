import React, { ReactNode, ErrorInfo } from "react";

interface ErrorBoundaryProps {
  fallback: ReactNode;
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | undefined;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: undefined,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error: error,
    };
  }

  // Log the error to some sort of a service logger
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log(error);
    console.log(errorInfo);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return <>{this.props.fallback}</>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;

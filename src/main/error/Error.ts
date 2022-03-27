class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
  }
}

class RouteValidationError extends ValidationError {
  constructor(params: string, routeUsage: string) {
    super(`Bad params: ${params}. Usage: ${routeUsage}`);
    this.name = this.constructor.name;
  }
}

class RequestBodyValidationError extends ValidationError {
  constructor(message: string, params?: string[]) {
    super(params ? `Bad params: ${params}` : message);
    this.name = this.constructor.name;
  }
}

class DatabaseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
  }
}

export { RouteValidationError, RequestBodyValidationError, DatabaseError };

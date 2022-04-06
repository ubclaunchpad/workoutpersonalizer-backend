class ValidationError extends Error {
  constructor(message: string) {
    super(message);
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

class NotFoundError extends Error {
  constructor(message: string) {
    super(message + ' not found');
    this.name = this.constructor.name;
  }
}
export { RequestBodyValidationError, DatabaseError, NotFoundError };

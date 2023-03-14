export interface IExtendableError {
  message?: any;
  status?: any;
  isPublic?: boolean | undefined;
}

/**
 * @extends Error
 */
class ExtendableError extends Error {
  name: string;
  message: any;
  status: any;
  isPublic: boolean | undefined;

  constructor({ message, status, isPublic }: IExtendableError) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.status = status;
    this.isPublic = isPublic;
    // Error.captureStackTrace(this, this.constructor.name);
  }
}

/**
 * Class representing an API error.
 * @extends ExtendableError
 */
class APIError extends ExtendableError {
  /**
   * Creates an API error.
   * @param {string} message - Error message.
   * @param {number} status - HTTP status code of error.
   * @param {boolean} isPublic - Whether the message should be visible to user or not.
   */
  constructor({
                message,
                status = 500,
                isPublic = true
              }: IExtendableError) {
    super({
      message,
      status,
      isPublic
    });
  }
}

export default APIError;

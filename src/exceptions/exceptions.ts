export class ResourceNotFoundError extends Error {
    statusCode: number;
    constructor(resource_name: string, resource_column: string, resource_value: string) {
        super(`resource: ${resource_name} --> ${resource_column} with value ${resource_value} is not found`);
        this.statusCode = 404;
        this.name = "ResourceNotFoundError"
        Object.setPrototypeOf(this, ResourceNotFoundError.prototype);
    }

}

export class BadRequestError extends Error {
    statusCode: number;
    constructor(message: string) {
        super(message);
        this.statusCode = 400;
        this.name = "BadRequestError";
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }
}

export class InternalServerError extends Error {
    statusCode: number;
    constructor(message: string) {
        super(message);
        this.statusCode = 500;
        this.name="InternalServerError"
        Object.setPrototypeOf(this, InternalServerError.prototype);
    }
}
const buildResponse = (statusCode: number, data: any = undefined, error: any = undefined) => {
    return {
        statusCode,
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data, error }),
    };
};

export const success = (data: any) => {
    return buildResponse(200, data, undefined);
}
  
export const noContent = () => {
    return buildResponse(204, undefined, undefined);
};

export const unprocessableEntity = (code: string, message: string) => {
    return buildResponse(422, undefined, { code, message });
};


export const internalServerError = (code: string, message: string) => {
    return buildResponse(500, undefined, { code, message });
};
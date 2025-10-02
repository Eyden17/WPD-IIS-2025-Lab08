
// Maneja y envía una respuesta exitosa en formato JSON.
export const successResponse = (res, data, message = "Success") => {
    return res.json({
        success: true,
        message,
        data,
        path: res.req.originalUrl,
        timestamp: new Date().toISOString(),
    });
};
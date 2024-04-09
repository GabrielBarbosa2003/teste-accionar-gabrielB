
function ReturnResponse(
    type,
    statusCode,
    obj,
    res
) {
    const responseObj = {
        type,
        statusCode,
        obj
    }
    return res.status(statusCode).json(responseObj);
}

module.exports = {
    ReturnResponse
}
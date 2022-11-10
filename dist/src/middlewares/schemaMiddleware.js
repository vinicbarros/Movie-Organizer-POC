var schemaMiddleware = function (schema) {
    return function (req, res, next) {
        var body = req.body;
        var validate = schema.validate(body, { abortEarly: false });
        if (validate.error) {
            var error = validate.error.details.map(function (detail) { return detail.message; });
            return res.status(422).send(error);
        }
        res.locals.body = body;
        next();
    };
};
export { schemaMiddleware };

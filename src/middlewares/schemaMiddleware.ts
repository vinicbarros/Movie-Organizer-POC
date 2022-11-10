import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";

const schemaMiddleware = (schema: ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;

    const validate = schema.validate(body, { abortEarly: false });

    if (validate.error) {
      const error = validate.error.details.map((detail) => detail.message);
      return res.status(422).send(error);
    }

    res.locals.body = body;
    next();
  };
};

export { schemaMiddleware };

import expressValidation from "express-validation";
export const validate = (validation: any, options?: any) => {
  options = options || {};
  options.keyByField = true;
  return expressValidation.validate(validation, options);
};
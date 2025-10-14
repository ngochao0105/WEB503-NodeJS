import Joi from "joi";

// Schema tạo sản phẩm mới
export const createProductSchema = Joi.object({
    name: Joi.string().required().max(200).messages({
      "string.base": "Tên sản phẩm phải là chuỗi",
      "string.empty": "Tên sản phẩm không được để trống",
      "string.max": "Tên sản phẩm không được vượt quá {#limit} ký tự",
      "any.required": "Tên sản phẩm là bắt buộc",
    }),
    description: Joi.string().required().messages({
      "string.base": "Mô tả sản phẩm phải là chuỗi",
    }),
    price: Joi.number().required().min(0).messages({
      "number.base": "Giá sản phẩm phải là số",
      "number.min": "Giá sản phẩm không được âm",
      "any.required": "Giá sản phẩm là bắt buộc",
    }),
    category: Joi.string().required().messages({
        "string.base": "ID danh mục phải là chuỗi",
        "string.empty": "ID danh mục không được để trống",
        "any.required": "Danh mục sản phẩm là bắt buộc",
    }),
    // ...các trường khác...
});

// Schema cập nhật sản phẩm
export const updateProductSchema = createProductSchema.fork(
  ["name", "description", "price"],
  (schema) => schema.optional()
);
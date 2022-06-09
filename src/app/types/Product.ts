export type Product =
  {
    _id: String,
    name: string,
    price: Number,
    sale_price:Number,
    description: String,
    image_url:String,
    category_id:Number,
    status: Number
  }
  export type ProductCart = {
    _id: String,
    name: string,
    value: number,
    price: Number,
    sale_price:Number,
    description: String,
    image_url:String,
    category_id:Number,
    status: Number
  };

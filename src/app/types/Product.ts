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
  };
  // export type ProductCreate = {
  //   name: string
  // };
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
  export type ProductAdd = {
    name: string,
    price: number,
    sale_price: number,
    image_url: string,
    status: string,
    description: string,
  }

export interface Product {
    id: number;
    upc_id:string;
    sku_id:string;
    name: string;
    category_1: string;
    category_2: string;
    price: number;
    currency: string;
    status:boolean;
    created_at:Date;
}
  
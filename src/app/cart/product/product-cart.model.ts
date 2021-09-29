export class ProductCartModel{
    id: number;
    title: string;
    price: number;
    description: string;
    type:string;
    category: string;
    image: string;
    rating: {
      rate: number,
      count: number
    }
}
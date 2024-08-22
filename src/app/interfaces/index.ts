export interface ProductType {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    quantity: number;
    rating: {rate: number; count: number};
    image?: string;
}
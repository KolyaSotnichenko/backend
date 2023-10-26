export interface PaymentsRequestBody {
    products: Product[];
    currency: string;
}
export interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
}

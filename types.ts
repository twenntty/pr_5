export type BaseProduct = {
    id: number;
    name: string;
    price: number;
};

export type Electronics = BaseProduct & {
    category: 'electronics';
    warrantyPeriod: number;
};

export type Clothing = BaseProduct & {
    category: 'clothing';
    size: string;
    material: string;
};

export type Book = BaseProduct & {
    category: 'book';
    author: string;
    pages: number;
};

export type CartItem<T> = {
    product: T;
    quantity: number;
};

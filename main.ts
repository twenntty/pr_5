import { Electronics, Clothing, Book, CartItem, BaseProduct } from './types';
import { findProduct, filterByPrice, addToCart, calculateTotal } from './functions';

const electronics: Electronics[] = [
    { id: 1, name: "Телефон", price: 10000, category: 'electronics', warrantyPeriod: 12 },
    { id: 2, name: "Ноутбук", price: 20000, category: 'electronics', warrantyPeriod: 24 }
];

const clothing: Clothing[] = [
    { id: 3, name: "Футболка", price: 500, category: 'clothing', size: 'M', material: 'Cotton' }
];

const books: Book[] = [
    { id: 4, name: "Книга", price: 300, category: 'book', author: 'Author Name', pages: 150 }
];

const phone = findProduct(electronics, 1);
console.log("Знайдений товар:", phone);

const filteredProducts = filterByPrice(electronics, 15000);
console.log("Фільтровані товари за ціною:", filteredProducts);

let cart: CartItem<BaseProduct>[] = [];
cart = addToCart(cart, electronics[0], 1);
cart = addToCart(cart, clothing[0], 2);
console.log("Кошик:", cart);

const total = calculateTotal(cart);
console.log("Загальна вартість:", total);

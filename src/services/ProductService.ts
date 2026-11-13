import type { productType } from "../types/productType";

const API_URL = "http://127.0.0.1:8000/api/books";
//https://fakestoreapi.com/products

export function getProducts() {
  return fetch(API_URL)
    .then((response) => {
      if(!response.ok) {
        throw new Error("Failed to fetch products");
      }
      return response.json() as Promise<productType[]>;
    });

}
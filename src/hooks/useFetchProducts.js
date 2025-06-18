import { useEffect, useState } from "react";
import { getAllProducts } from "../services/productService";

export default function useFetchProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetch();
  }, []);

  return products;
}

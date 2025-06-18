import Swal from "sweetalert2";

export async function getAllProducts() {
  const response = await fetch("https://fakestoreapi.com/products");

  if (!response.ok) {
    throw new Swal.fire("Failed to fetch products");
  }
  return response.json();
}
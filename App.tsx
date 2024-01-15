import { NavigationContainer } from "@react-navigation/native";
import ProductsStackNav from "./app/navigation/product-stack";

export default function App() {
  return (
    <NavigationContainer>
      <ProductsStackNav />
    </NavigationContainer>
  );
}

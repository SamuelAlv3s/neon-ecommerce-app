import { NavigationContainer } from "@react-navigation/native";
import ProductsStackNav from "./app/navigation/productsStack";

export default function App() {
  return (
    <NavigationContainer>
      <ProductsStackNav />
    </NavigationContainer>
  );
}

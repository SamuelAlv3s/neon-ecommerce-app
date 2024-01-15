import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import Products from "../screens/products";

type ProductsStackParamList = {
  Products: undefined;
  ProductDetails: { id: number };
};

export type ProductsPageProps = NativeStackScreenProps<
  ProductsStackParamList,
  "Products"
>;
export type ProductDetailsPageProps = NativeStackScreenProps<
  ProductsStackParamList,
  "ProductDetails"
>;

const ProductsStack = createNativeStackNavigator<ProductsStackParamList>();

const ProductsStackNav = () => {
  return (
    <ProductsStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#1FE687",
        },
        headerTintColor: "#141414",
      }}
    >
      <ProductsStack.Screen
        name="Products"
        component={Products}
        options={{
          headerTitle: "Neon Shop",
        }}
      />
    </ProductsStack.Navigator>
  );
};

export default ProductsStackNav;

import { ScrollView, StyleSheet, Text, View } from "react-native";

const Exercise = () => {
    const products = [
        { id: 1, name: 'Bread', price: '$2' },
        { id: 2, name: 'Milk', price: '$3' },
        { id: 3, name: 'Eggs (12-pack)', price: '$1.50' },
        { id: 4, name: 'Apples (1 lb)', price: '$1.20' },
        { id: 5, name: 'Toothpaste', price: '$4' },
        { id: 6, name: 'Laundry Detergent', price: '$10' },
        { id: 7, name: 'Paper Towels', price: '$5' },
        { id: 8, name: 'Coffee (1 lb)', price: '$8' },
        { id: 9, name: 'Chicken Breast (1 lb)', price: '$5' },
        { id: 10, name: 'Rice (2 lb bag)', price: '$3' }
    ];

  return (
    <View style={styles.container}>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: "blue",
  },
  product: {
    backgroundColor: "#f0f0f0",
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: 16,
  },
});

export default Exercise;

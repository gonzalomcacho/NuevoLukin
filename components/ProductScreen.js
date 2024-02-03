import React from 'react';
import { View, Text, Image, Button } from 'react-native';

export default function Producto(props) {

  const producto = props.route.params.producto;

  return (
    <View style={styles.productoContainer}>
      <Text testID="detalle" style={styles.titulo}>{producto.title}</Text>
      <Image style={styles.thumbnail} source={{ uri: producto.thumbnail }} />
      <Text>{producto.description}</Text>
      <Text>Price: {producto.price} €</Text>
      <Text>Discount Percentage {producto.discountPercentage}%</Text>
      <Text>Rating: {producto.rating}/5</Text>
      <Text style={styles.stockText}>Only {producto.stock} units left!</Text>
      <Button   title="Volver" testID="volver"       onPress={() => props.navigation.goBack()}    style={styles.volverButton}  />
    </View>
  );
}

const styles = {
  productoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  thumbnail: {
    width: 200, // Ajusta el tamaño según tus necesidades
    height: 200,
  },
  stockText: {
    fontWeight: 'bold',
  },
  volverButton: {
    backgroundColor: 'green', // Cambia el color del botón a esmeralda
  },
};

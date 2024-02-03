import { useState } from "react";
import { View, Text, TextInput, Button, Image, StyleSheet, FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SearchPage(props) {
    const [query, setQuery] = useState("");
    const [productosBuscados, setproductosBuscados] = useState(props.theproducts);

    const filtrar =  () => {
        const ProductosCategorizadosYFiltrados = props.theproducts.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()));
        setproductosBuscados(ProductosCategorizadosYFiltrados);
    }

    const renderItem = ({ item }) => (
        <View testID={`item_${item.id}`} style={styles.content}>
          <Text testID={`title_${item.id}`}>{item.title}</Text>
          <Image style={styles.image} source={{ uri: item.thumbnail }} />
          <Button testID={`button_${item.id}`} color="#08EFBA" title="MÁS DETALLES" onPress={() => {props.navigation.navigate('ProductScreen', { producto: item})}}/>
        </View>
      );
      
    
    return (<View testID="searchPage">
                <View testID="formulario">
                    <Text testID="catalogo">Este Es Nuestro Catálogo:</Text>
                    <TextInput testID="filtro" style={styles.input} value={query} onChangeText={(text) => setQuery(text)}   />
                    <Button testID="buscador" title="BUSCAR" onPress={filtrar} />
                </View>
                <View testID="productosresultados" >
                    <FlatList data={productosBuscados} renderItem={renderItem}/>
                </View>
            </View>)
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
    image: {
        width:60,
        height:60,
    },
    content: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',}
});
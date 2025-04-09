import React from 'react'
import { View, Image, Text } from 'react-native'

const ProductDetail = ({navigation}) => {

    const {product} = navigation.state.params // Extraer el producto desde la lista de productos

  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Image source={{uri: product.image}} style={{width: 200, height: 200}} />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{product.title}</Text>
        <Text style={{fontSize: 16}}>${product.price}</Text>
        <Text style={{marginTop: 10}}>{product.description}</Text>
    </View>
  )
}

export default ProductDetail

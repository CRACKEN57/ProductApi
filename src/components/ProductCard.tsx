import React from 'react'
import { View, Text , Image} from 'react-native'
import { ProductsGen } from '../types/ProductsGen';
import { ProductCardStyles } from '../styles/ProductCard.styles';

interface Props {
  Products: ProductsGen
  onPress: () => void
}

const ProductCard = ({Products}:Props) => {
  return (
    <View style={ProductCardStyles.container}>
        <Image source={{ uri: Products.images[0] }} style={ProductCardStyles.image} />
        <Text style={ProductCardStyles.price}> ${Products.price}</Text>
        <Text style={ProductCardStyles.title}>{Products.title}</Text>
        <Text style={ProductCardStyles.description}>{Products.description}</Text>
    </View>
  )
}   

export default ProductCard

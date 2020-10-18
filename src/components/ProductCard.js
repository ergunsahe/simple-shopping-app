import React from 'react';
import {View, Image, Text, Dimensions} from 'react-native';

const ProductCard = ({product}) => {
  return (
    <View style={{flex: 1, borderWidth: 1, borderColor: '#d0d0d0', margin: 5}}>
      <Image
        style={{
          height: Dimensions.get('window').height / 4,
          opacity: product.inStock ? null : 0.5,
        }}
        source={{uri: product.imgURL}}
      />
      <Text
        style={{textDecorationLine: product.inStock ? null : 'line-through'}}>
        {product.title}
      </Text>
      <Text>{product.price}</Text>
    </View>
  );
};

export default ProductCard;

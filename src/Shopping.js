import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  StyleSheet,
  Dimensions,
} from 'react-native';
import product_data from './product_data.json';
import ProductCard from './components/ProductCard';

const App = () => {
  const renderItem = ({item}) => <ProductCard product={item} />;

  const [searchValue, setSearchValue] = useState('');
  const [displayList, setDisplayList] = useState([]);

  useEffect(() => {
    setDisplayList(product_data);
  }, []);

  useEffect(() => {
    const filteredList = product_data.filter((item) => {
      const productTitle = item.title.toLowerCase();
      const text = searchValue.toLowerCase();
      return productTitle.indexOf(text) > -1;
    });
    setDisplayList(filteredList);
  }, [searchValue]);

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, marginBottom: 70}}>
        <Text
          style={{
            alignSelf: 'center',
            fontWeight: 'bold',
            fontSize: 25,
            color:"violet"
          }}>
          CLARUSWAY SHOPPİNG
        </Text>
        <View
          style={{borderColor: 'gray', borderWidth: 1, margin: 5}}>
          <TextInput
            placeholder="ara....."
            onChangeText={(val) => setSearchValue(val)}
          />
        </View>

        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={displayList}
          renderItem={renderItem}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default App;

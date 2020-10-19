import React from 'react';
import {View, TextInput} from 'react-native';

const SearchBar = (props) => {
  return (
    <View style={{borderColor: 'gray', borderWidth: 1, margin: 5}}>
      <TextInput
        placeholder="ara....."
        onChangeText={(val) => props.onSearch(val)}
      />
    </View>
  );
};

export {SearchBar};

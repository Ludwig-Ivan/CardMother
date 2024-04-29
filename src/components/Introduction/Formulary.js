import React, {useState} from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import Btn from '../common/Btn';
import {COLORS} from '../../constants';
const Formulary = ({navigation}) => {
  const [name, setName] = useState('');
  return (
    <View style={style.content}>
      <Text style={style.text}>Write your name</Text>
      <TextInput
        value={name}
        onChangeText={text => setName(text)}
        placeholder="Name"
        style={style.input}
      />
      <Btn
        color={COLORS.verde_pasto}
        text={'Siguiente'}
        func={() => {
          navigation.navigate('Person', {name: name});
        }}
        width={'30%'}
        height={40}
      />
    </View>
  );
};
const style = StyleSheet.create({
  input: {
    backgroundColor: COLORS.mostaza,
    width: '70%',
    height: 60,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 50,
  },
  text: {
    width: '70%',
  },
});
export default Formulary;

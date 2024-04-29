/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View} from 'react-native';
import {COLORS, figures} from '../../constants';
const {Heart1, Heart2} = figures;

const Welcome = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Formulary');
    }, 5000);
    return () => clearTimeout(timer);
  });
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Heart1 fill={COLORS.rojo_heart} />
        <Heart2 fill={COLORS.white} style={{position: 'absolute'}} />
      </View>
    </View>
  );
};

export default Welcome;

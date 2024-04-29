import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Btn from '../common/Btn';
import {COLORS, figures} from '../../constants';
const Person = ({navigation, route}) => {
  const {name} = route.params;
  return (
    <View style={style.content}>
      <View style={style.text_view}>
        <Text>Welcome!</Text>
        <Text>{name}</Text>
        <Text>You're this person?</Text>
      </View>

      <View style={style.btn_view}>
        <Btn
          color={COLORS.verde}
          text={'Si'}
          func={() => {
            console.log('Si');
          }}
          width={'35%'}
          height={40}
        />
        <Btn
          color={COLORS.rojo}
          text={'No'}
          func={() => {
            console.log('No');
          }}
          width={'35%'}
          height={40}
        />
      </View>
      <View style={style.fig_view}>
        <figures.Ellipse1 fill={COLORS.black_gray} />
        <figures.Ellipse2 fill={COLORS.white} style={style.fig} />
      </View>
      <Text>Sure?</Text>
      <Btn
        color={COLORS.pink}
        text={'Siguiente'}
        func={() => {
          navigation.navigate('History1');
        }}
        width={'35%'}
        height={40}
      />
    </View>
  );
};

const style = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  fig: {
    position: 'absolute',
  },
  fig_view: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_view: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  text_view: {
    alignItems: 'center',
    gap: 10,
  },
});
export default Person;

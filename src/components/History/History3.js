import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS, figures} from '../../constants';
import Btn from '../common/Btn';

const History3 = ({navigation}) => {
  return (
    <View style={style.content}>
      <View style={style.text_view}>
        <Text style={style.text_left}>Your're my best friend...</Text>
        <Text style={style.text_rigth}>
          I like to much talks the differents peoples...
        </Text>
        <Text style={style.text_left}>Hear the differents chismes...</Text>
        <Text style={style.text_rigth}>
          and juzged the people for his accions...
        </Text>
        <Text style={style.text_left}>I win the other star for this...</Text>
      </View>
      <View style={style.fig_view}>
        <figures.Star1 fill={COLORS.amarillo} />
        <figures.Star2 fill={COLORS.white} style={style.fig} />
      </View>
      <View
        style={{width: '100%', flexDirection: 'row', justifyContent: 'center'}}>
        <Btn
          color={COLORS.purple}
          text={'Siguiente'}
          func={() => navigation.navigate('History4')}
          width={150}
          height={40}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  fig: {
    position: 'absolute',
  },
  fig_view: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_view: {
    gap: 20,
    paddingHorizontal: 30,
  },
  text_rigth: {
    textAlign: 'right',
  },
  text_left: {
    textAlign: 'left',
  },
});
export default History3;

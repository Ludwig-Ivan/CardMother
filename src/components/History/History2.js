import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS, figures} from '../../constants';
import Btn from '../common/Btn';

const History2 = ({navigation}) => {
  return (
    <View style={style.content}>
      <View style={style.text_view}>
        <Text style={style.text_left}>You're a perfect chef...</Text>
        <Text style={style.text_rigth}>
          I like to much your different's plates...
        </Text>
        <Text style={style.text_left}>
          I love your delicius tacos and burritos...
        </Text>
        <Text style={style.text_rigth}>I win the other star for this...</Text>
        <Text style={style.text_left}>you win the one's start for this...</Text>
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
          func={() => navigation.navigate('History3')}
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
export default History2;

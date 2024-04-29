import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {figures} from '../../constants';
import {COLORS} from '../../constants';

const History7 = ({navigation}) => {
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
      <Pressable onPress={() => navigation.navigate('Photos')}>
        <View style={style.fig_view}>
          <figures.Heart1 fill={COLORS.rojo_heart} />
          <figures.Heart2 fill={COLORS.amarillo} style={style.fig} />
        </View>
      </Pressable>
      <View style={style.flower_view}>
        <View style={style.fig_view}>
          <figures.Leaf fill={COLORS.amarillo} style={style.leaf_inv} />
          <figures.Flower fill={COLORS.rojo_heart} style={style.flower_inv} />
        </View>
        <View style={style.fig_view}>
          <figures.Leaf fill={COLORS.amarillo} style={style.leaf} />
          <figures.Flower fill={COLORS.rojo_heart} />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 20,
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
  flower_inv: {
    transform: [{rotateY: '180deg'}],
  },
  flower_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 0,
  },
  leaf: {
    position: 'absolute',
  },
  leaf_inv: {
    position: 'absolute',
    transform: [{rotateY: '180deg'}],
  },
});
export default History7;

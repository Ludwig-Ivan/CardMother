import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS, figures} from '../../constants';
import Btn from '../common/Btn';

function Stars(can) {
  const stars = [];
  for (let i = 0; i < can; i++) {
    stars.push(
      <View key={i} style={style.fig_view}>
        <figures.Star1 fill={COLORS.amarillo} width={100} height={100} />
        <figures.Star2
          fill={COLORS.white}
          width={90}
          height={90}
          style={style.fig}
        />
      </View>,
    );
  }
  return stars;
}

const History6 = ({navigation}) => {
  return (
    <View style={style.content}>
      <View style={style.text_view}>
        <Text style={style.text_left}>For this and very much that...</Text>
        <Text style={style.text_rigth}>You have a five star's...</Text>
        <Text style={style.text_left}>
          A lot mother's have a five star's, you know?...
        </Text>
        <Text style={style.text_rigth}>
          and see, you have five star's is a incredible!...
        </Text>
      </View>
      <View style={style.star_content}>{Stars(5)}</View>
      <View
        style={{width: '100%', flexDirection: 'row', justifyContent: 'center'}}>
        <Btn
          color={COLORS.purple}
          text={'Siguiente'}
          func={() => navigation.navigate('History7')}
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
  star_content: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: '40%',
  },
});
export default History6;

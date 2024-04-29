/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {figures} from '../../constants';
import {COLORS} from '../../constants';

const Photos = () => {
  return (
    <View style={style.content}>
      <figures.Blob2 fill={COLORS.orange} style={{position: 'absolute'}} />
      <figures.Blob11
        fill={COLORS.black_gray}
        style={{position: 'absolute', right: 0}}
      />
      <figures.Blob1
        fill={COLORS.pink}
        style={{position: 'absolute', bottom: '35%'}}
      />
      <figures.Blob4
        fill={COLORS.verde}
        style={{position: 'absolute', right: 0, top: '23%'}}
      />
      <figures.Blob9
        fill={COLORS.aqua}
        style={{position: 'absolute', bottom: 0}}
      />
      <figures.Blob7
        fill={COLORS.purple}
        style={{position: 'absolute', right: 0, bottom: '25%'}}
      />
      <figures.Blob6
        fill={COLORS.orange_red}
        style={{position: 'absolute', right: 0, bottom: 0}}
      />
    </View>
  );
};

const style = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
export default Photos;

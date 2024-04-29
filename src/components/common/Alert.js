import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS, figures} from '../../constants';
const Alert = ({msg}) => {
  return (
    <View style={style.content}>
      <figures.Bookmark fill={COLORS.orange_red} />
      <Text>{msg}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  content: {
    height: 110,
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    flexDirection: 'row',
    gap: 20,
  },
});
export default Alert;

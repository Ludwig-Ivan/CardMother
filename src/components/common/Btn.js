import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';

const Btn = ({color, text, func, width, height}) => {
  const style = StyleSheet.create({
    btn: {
      backgroundColor: color,
      height: height,
      width: width,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
  });

  return (
    <Pressable onPress={func} style={style.btn}>
      <Text>{text}</Text>
    </Pressable>
  );
};

export default Btn;

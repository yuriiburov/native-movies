import React from 'react';
import { TouchableOpacity } from 'react-native';
import ArrowBackSvg from '../assets/svg/ArrowBackSvg';

const BackButton = ({ navigation, width, height, fill }) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <ArrowBackSvg width={width} height={height} fill={fill} />
    </TouchableOpacity>
  );
};

export default BackButton;

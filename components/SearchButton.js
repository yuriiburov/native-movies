import React from 'react';
import { TouchableOpacity } from 'react-native';
import SearchSvg from '../assets/svg/SearchSvg';

const SearchButton = ({ onPress, fill, width, height }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <SearchSvg fill={fill} width={width} height={height} />
    </TouchableOpacity>
  );
};

export default SearchButton;

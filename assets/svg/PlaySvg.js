import React from 'react';
import Svg, { Path } from 'react-native-svg';
import colors from '../../themes/themes';

const PlaySvg = ({ fill, width, height }) => {
  return (
    <Svg
      width={width || '20'}
      height={height || '20'}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M133,440a35.37,35.37,0,0,1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37,7.46-27.53,19.46-34.33a35.13,35.13,0,0,1,35.77.45L399.12,225.48a36,36,0,0,1,0,61L151.23,434.88A35.5,35.5,0,0,1,133,440Z"
        fill={fill || colors.white}
      />
    </Svg>
  );
};

export default PlaySvg;

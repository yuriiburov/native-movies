import React, { memo } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import PlaySvg from '../assets/svg/PlaySvg';
import colors from '../themes/themes';

const PlayButton = ({ onPressFunction, fill, height, width }) => {
  return (
    <Pressable onPress={() => onPressFunction()} style={styles.playButton}>
      <PlaySvg fill={fill} height={height} width={width} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  playButton: {
    backgroundColor: colors.black,
    borderRadius: 50,
    padding: 15,
    width: 50,
    borderWidth: 1,
    borderColor: colors.red,
  },
});

export default memo(PlayButton);

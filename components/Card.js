import { IMAGES_URL } from '@env';
import React, { memo } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

const placeholderImage = require('../assets/images/movie-placeholder.jpeg');

const Card = ({
  navigation: { navigate },
  item: { id, poster_path, title, name },
  type,
}) => {
  const imageZIndex = poster_path ? 1 : -1;

  return (
    <TouchableOpacity
      onPress={() => navigate('Details', { id, type })}
      style={styles.card}>
      <Image
        style={[styles.image, { zIndex: imageZIndex }]}
        source={
          poster_path ? { uri: IMAGES_URL + poster_path } : placeholderImage
        }
      />
      {(title || name) && <Text style={styles.movieName}>{title || name}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 5,
    width: 120,
    height: 200,
    position: 'relative',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: { width: '100%', height: '100%', borderRadius: 20 },
  movieName: {
    paddingVertical: 3,
    paddingHorizontal: 3,
    position: 'absolute',
    textAlign: 'center',
    zIndex: 0,
  },
});

export default memo(Card);

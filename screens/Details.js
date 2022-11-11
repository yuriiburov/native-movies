import { IMAGES_URL } from '@env';
import dateFormat from 'dateformat';
import React, { memo, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import StarRating from 'react-native-star-rating-widget';
import ModalVideoPlayer from '../components/ModalVideoPlayer';
import PlayButton from '../components/PlayButton';
import s from '../globalStyles';
import { getMovie, getTv } from '../services/service';
import colors from '../themes/themes';

const { height, width } = Dimensions.get('screen');

const Details = ({ route }) => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modalShown, setModalShown] = useState(false);

  const { id, type } = route.params;

  const toggleModalShown = () => {
    setModalShown(!modalShown);
  };

  const fetchDetails = async () => {
    setLoading(true);
    try {
      if (type === 'movie') {
        const movieDetails = await getMovie(id);
        setDetails(movieDetails);
      }
      if (type === 'tv') {
        const tvDetails = await getTv(id);
        setDetails(tvDetails);
      }
    } catch (err) {
      console.error('App has a trouble when details are fetching');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.background}>
      {loading && <ActivityIndicator size="large" />}
      {!loading && details && (
        <ScrollView>
          <Image
            style={styles.mainImage}
            source={
              details.poster_path
                ? { uri: IMAGES_URL + details.poster_path }
                : require('../assets/images/movie-placeholder.jpeg')
            }
          />
          <View style={styles.playTrailer}>
            <PlayButton onPressFunction={toggleModalShown} />
          </View>
          {(details.title || details.name) && (
            <Text style={[s.text, styles.title]}>
              {details.title || details.name}
            </Text>
          )}
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.genres}>
              {details.genres.map(data => (
                <Text style={[s.text, styles.genre]} key={data.id}>
                  {data.name}
                </Text>
              ))}
            </View>
          </ScrollView>
          <View style={styles.starsContainer}>
            <StarRating
              rating={details.vote_average}
              onChange={() => {}}
              animationConfig={{ scale: 1 }}
              emptyColor="#666"
              starStyle={styles.star}
              style={styles.stars}
            />
          </View>
          <Text style={[s.text, styles.overview]}>{details.overview}</Text>
          <Text
            style={[s.text, styles.releaseDate]}>{`Release date: ${dateFormat(
            details.release_date,
            'mmmm dS, yyyy',
          )}`}</Text>
          <ModalVideoPlayer
            onClose={toggleModalShown}
            isModalVisible={modalShown}
          />
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.black,
    flex: 1,
  },
  mainImage: { width: '100%', height: height / 2 },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 20,
    marginHorizontal: 10,
    textAlign: 'center',
  },
  genres: {
    flexDirection: 'row',
    justifyContent: 'center',
    minWidth: width,
  },
  genre: { marginHorizontal: 7 },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15,
  },
  stars: { width: 162 },
  star: { width: 20 },
  overview: {
    paddingHorizontal: 15,
  },
  releaseDate: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 15,
  },
  playTrailer: { position: 'absolute', right: 25, top: height / 2 - 25 },
});

export default memo(Details);

import { IMAGES_URL } from '@env';
import Carousel from 'pinar';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import Error from '../components/Error';
import List from '../components/List';
import {
  getDocumentaryMovies,
  getFamilyMovies,
  getPopularMovies,
  getPopularTv,
  getUpcomingMovies,
} from '../services/service';
import colors from '../themes/themes';

const dimensions = Dimensions.get('screen');
const swiperHeight = dimensions.height / 1.5;

const Home = ({ navigation }) => {
  const [movieImages, setMovieImages] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularTVs, setPopularTVs] = useState([]);
  const [familyMovies, setFamilyMovies] = useState([]);
  const [documentaryMovies, setDocumentaryMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const contentData = [
    { id: 1, title: 'Popular Movies', content: popularMovies, type: 'movie' },
    { id: 2, title: 'Popular TVs', content: popularTVs, type: 'tv' },
    { id: 3, title: 'Family Movies', content: familyMovies, type: 'movie' },
    {
      id: 4,
      title: 'Documentary Movies',
      content: documentaryMovies,
      type: 'movie',
    },
  ];

  const carouselProps = {
    loop: true,
    autoplay: true,
    autoplayInterval: 4000,
    height: swiperHeight,
    showsDots: false,
    showsControls: false,
  };

  const getData = () =>
    Promise.all([
      getUpcomingMovies(),
      getPopularMovies(),
      getPopularTv(),
      getFamilyMovies(),
      getDocumentaryMovies(),
    ]);

  useEffect(() => {
    setLoading(true);
    getData()
      .then(
        ([
          upcomingMoviesResponse,
          popularMoviesResponse,
          popularTvResponse,
          familyMoviesResponse,
          documentaryMoviesResponse,
        ]) => {
          setMovieImages(
            upcomingMoviesResponse.map(
              ({ poster_path }) => IMAGES_URL + poster_path,
            ),
          );
          setPopularMovies(popularMoviesResponse);
          setPopularTVs(popularTvResponse);
          setFamilyMovies(familyMoviesResponse);
          setDocumentaryMovies(documentaryMoviesResponse);
          setError(false);
        },
      )
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.background}>
      {loading && !error && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" />
        </View>
      )}
      {!loading && !error && (
        <ScrollView>
          <View style={styles.swiper}>
            <Carousel {...carouselProps}>
              {movieImages &&
                movieImages.map((uri, i) => (
                  <Image
                    key={i}
                    style={styles.slide}
                    source={{
                      uri,
                    }}
                  />
                ))}
            </Carousel>
          </View>
          {contentData.map(
            list =>
              list.content && (
                <List key={list.id} navigation={navigation} {...list} />
              ),
          )}
        </ScrollView>
      )}
      {error && !loading && <Error />}
    </View>
  );
};

const styles = StyleSheet.create({
  background: { backgroundColor: colors.black },
  swiper: { height: swiperHeight },
  slide: { width: '100%', height: '100%' },
  loaderContainer: { flex: 1, justifyContent: 'center' },
});

export default Home;

import React, { useState } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Platform,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import Card from '../components/Card';
import Error from '../components/Error';
import SearchButton from '../components/SearchButton';
import { searchMovieTv } from '../services/service';
import colors from '../themes/themes';

const dimensions = Dimensions.get('screen');

const Search = ({ navigation }) => {
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState(null);
  const [error, setError] = useState(null);

  const numColumns = Math.round(dimensions.width / 140);
  console.log(dimensions);

  const searchData = async () => {
    setError(null);
    setLoading(true);
    Promise.all([
      searchMovieTv(searchValue, 'movie'),
      searchMovieTv(searchValue, 'tv'),
    ])
      .then(([movies, tv]) => {
        const data = [...movies, ...tv];
        setSearchResults(data);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.searchInputContainer}>
        <TextInput
          value={searchValue}
          onChangeText={setSearchValue}
          placeholder="Search Movie or TV Show"
          placeholderTextColor={colors.placeholder}
          style={styles.searchInput}
        />
        {<SearchButton onPress={searchData} />}
      </View>
      {(error || loading) && (
        <View style={styles.center}>
          {error && <Error />}
          {loading && <ActivityIndicator size="large" />}
        </View>
      )}
      {searchResults && searchResults.length && (
        <FlatList
          numColumns={numColumns}
          data={searchResults}
          renderItem={({ item }) => (
            <Card
              navigation={navigation}
              item={item}
              type={item.title ? 'movie' : 'tv'}
            />
          )}
          keyExtractor={item => item.id}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.black,
  },
  searchInput: {
    fontSize: 20,
    width: dimensions.width - 82,
    padding: 0,
    color: colors.white,
  },
  searchInputContainer: {
    flexDirection: 'row',
    marginHorizontal: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.red,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Platform.OS === 'ios' ? 70 : 80,
    marginBottom: 20,
  },
  center: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -999,
  },
});

export default Search;

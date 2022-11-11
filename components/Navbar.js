import React, { memo } from 'react';
import { Image, Platform, SafeAreaView, StyleSheet, View } from 'react-native';
import BackButton from './BackButton';
import SearchButton from './SearchButton';

const Navbar = ({ navigation, main }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.mainNavbar}>
          {!main && <BackButton navigation={navigation} />}
          <Image source={require('../assets/images/netflix.png')} />
          {main && (
            <SearchButton onPress={() => navigation.navigate('Search')} />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: Platform.OS === 'android' ? 33 : 20 },
  mainNavbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10,
  },
});

export default memo(Navbar);

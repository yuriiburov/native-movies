import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../themes/themes';

const defaultErrorTitle = 'Ooops! something went wrong.';
const defaultErrorDescription = 'Make sure you are online and restart the App';

const Error = ({
  errorTitle = defaultErrorTitle,
  errorDescription = defaultErrorDescription,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textInfo}>{errorTitle}</Text>
      <Text style={styles.textInfo}>{errorDescription}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
  },
  textInfo: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default memo(Error);

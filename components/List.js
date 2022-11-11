import React, { memo } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import s from '../globalStyles';
import Card from './Card';

const List = ({ navigation, title, content, type }) => {
  return (
    <View>
      <Text style={[styles.title, s.text]}>{title}</Text>
      <FlatList
        data={content}
        horizontal
        renderItem={({ item }) => (
          <Card navigation={navigation} item={item} type={type} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: { fontWeight: 'bold', fontSize: 18, margin: 5 },
});

export default memo(List);

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function NewTweet() {
  return (
    <View style={ styles.container }>
        <Text>New Tweet</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
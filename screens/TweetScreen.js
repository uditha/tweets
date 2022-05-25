import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default function TweetScreen() {
  return (
    <View style={ styles.container }>
        <Text>Tweet Screen</Text>
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
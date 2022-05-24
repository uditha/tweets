import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';




export default function HomeScreen({ navigation }) {
  return (
    <View style={ styles.container }>
        <Text>Home</Text>
        <Button 
            title=" New Tweet"
            onPress={() => navigation.navigate('New Tweet')}
        />

        <Button 
            title=" Profile"
            onPress={() => navigation.navigate('Profile')}
        />

        <Button 
            title=" All Tweets"
            onPress={() => navigation.navigate('Tweets')}
        />

        
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
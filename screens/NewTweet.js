import React, {useState} from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Image, TextInput} from 'react-native';

export default function NewTweet({ navigation }) {
  
  const [tweet, setTweet] = useState("")

  function sendTweet() {
    console.log("Hi")
    navigation.navigate("Tab")
  }

  return (
    <View style={ styles.container }>
        <View style={ styles.tweetBtnContainer}>
              <Text>Characters Left: {288 - tweet.length} </Text>
              <TouchableOpacity 
                  style={styles.tweetBtn}
                  onPress={ () => sendTweet()}
              >
                <Text style={styles.tweetBtnTxt}>Tweet</Text>
              </TouchableOpacity>
        </View>
        <View style={styles.tweetContainer}>
            <TouchableOpacity>
              <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
            style={styles.avatar} />
            </TouchableOpacity>

            <TextInput 
              style={styles.input}
              onChangeText={setTweet}
              value={tweet}
              placeholder="Whats happening!"
              placeholderTextColor="gray"
              multiline
              maxLength={280}
            />

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  tweetBtnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",

  },
  tweetBtn: {
    backgroundColor: "#1d9bf0",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  tweetBtnTxt: {
    color: "#fff",
    fontSize:16,
    fontWeight: "bold"
  },
  tweetContainer: {
    flexDirection: "row",
    paddingTop: 10,
  },
  avatar: {
    width: 60, 
    height: 60,
    borderRadius: 30,
    marginRight: 8,
  },
  input: {
    flex:1,
    fontSize: 20,
    padding:10,
  },
});
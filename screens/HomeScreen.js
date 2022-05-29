import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, FlatList,Image, TouchableOpacity,Platform} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import axios from 'axios';
import { formatDistanceToNowStrict } from 'date-fns';



export default function HomeScreen({ navigation }) {

  const [data, setData] = React.useState([]);

  useEffect(() => {
    getAllTweets();
  } , []);

  function getAllTweets(){
    axios.get('http://localhost/api/tweets')
    .then(res => {
      setData(res.data);
    })
    .catch(err => {
      console.log(err);
    });
  }

  function gotoProfile() {
    navigation.navigate('Profile')
  }

  function gotoSingleTweet() {
    navigation.navigate('Tweet Screen')
  }

  function gotoNewTweet() {
    navigation.navigate('New Tweet')
  }



  const renderItem = ({ item: tweet}) => (
    <View style={styles.tweetContainer}>
      <TouchableOpacity onPress={ () => gotoProfile()}>
        <Image source={{ uri: tweet.user.avatar }}
       style={styles.avatar} />
       </TouchableOpacity>
      <View style={{ flex:1 }}>
        <TouchableOpacity style={styles.flexRow} onPress={ () => gotoSingleTweet() }>
            <Text numberOfLines={1} style={ styles.tweetName}>{ tweet.user.name}</Text>
            <Text numberOfLines={1} style={ styles.tweetHandle}>{ tweet.user.username}</Text>
            <Text>&middot;</Text>
            <Text numberOfLines={1} style={ styles.tweetHandle}>{ formatDistanceToNowStrict(new Date(tweet.created_at)) }</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tweetContentContainer} onPress={ () => gotoSingleTweet() }>
        <Text style={styles.tweetContent}>{ tweet.body}</Text>
        </TouchableOpacity>

        <View style={ styles.tweetEngagements}>
          <TouchableOpacity style={[ styles.flexRow,]}>
              <EvilIcons name="comment" size={22} color="gray" />
              <Text style={ styles.grayText}>200</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[ styles.flexRow, styles.ml4]}>
              <EvilIcons name="retweet" size={22} color="gray" />
              <Text style={ styles.grayText}>123</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[ styles.flexRow, styles.ml4]}>
              <EvilIcons name="heart" size={22} color="gray" />
              <Text style={ styles.grayText}>845</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[ styles.flexRow, styles.ml4]}>
              <EvilIcons 
                name={Platform.OS === 'ios' ? "share-apple" : "share-google" }
                size={22} 
                color="gray" />
              <Text style={ styles.grayText}>231</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );

  return (
    <View style={ styles.container }>
       <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={ () => <View style={styles.tweetSeparator}></View> }
        />

      <TouchableOpacity
        style={styles.newTweetBtn}
        onPress={ () => gotoNewTweet()}
      >
        <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row'
  },
  tweetContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 12,
    
  },
  avatar: {
    width: 42, 
    height: 42,
    borderRadius: 21,
    marginRight: 8,
  },
  tweetName: {
    fontWeight: '700',
    color: '#222',
  },
  tweetHandle: {
    marginHorizontal: 8,
    color: 'gray'
  },
  tweetContentContainer: {
    marginTop: 4,
  },
  tweetContent: {
    lineHeight: 20,
  },
  tweetEngagements: {
    flexDirection:'row',
    alignItems:'center',
    marginTop: 12,
  },
  grayText: {
    color: 'gray',
  },
  ml4: {
    marginLeft: 16,
  },
  tweetSeparator:{
    borderBottomWidth: 1,
    borderColor: '#e5e7eb'
  },
  newTweetBtn: {
    width:60,
    height:60,
    borderRadius: 30,
    backgroundColor:'#1d9bf1',
    justifyContent: 'center',
    alignItems: 'center',
    position:'absolute',
    bottom: 20,
    right: 23,
  }
});
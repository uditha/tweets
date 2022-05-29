import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ActivityIndicator} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';


import axiosConfig from '../helper/axiosConfig';
import format from 'date-fns/format';


export default function TweetScreen({ route, navigation }) {

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  function gotoProfile() {
    navigation.navigate("Profile")
  }

  const tweetId = route.params.tweetId;

  useEffect(() => {
    getTweet(tweetId);
  },[])

  function getTweet(tweetId){
    axiosConfig.get(`/tweets/${tweetId}`)
    .then(res => {
      setData(res.data);
      setLoading(false);
    })
    .catch(err => {
      console.log(err);
      setLoading(false);
    });
  }


  return (
    <View style={ styles.container }>
      { isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
        <View style={styles.profileDetails}>
          <View style={styles.flexRow}>
            <TouchableOpacity onPress={ () => gotoProfile()}>
              <Image source={{uri: data.user.avatar }}
            style={styles.avatar} />
            </TouchableOpacity>
            <View style={ styles.nameContainer}>
              <Text style={ styles.name}>{ data.user.name }</Text>
              <Text style={ styles.handle}>@{ data.user.username }</Text>
            </View>
          </View>
          
          <TouchableOpacity>
          <Feather name="more-horizontal" size={24} color="black" />
          </TouchableOpacity>
        </View> 

        <View style={styles.tweetTextContainer}>
            <Text style={styles.tweetText}>{ data.body }</Text>
        </View>

        <View 
        style={[styles.flexRow, styles.info ]}>
        <Text> { format(new Date(data.created_at), 'MMMM dd, yyyy') } </Text>
        <Text style={ styles.ml4}>Twitter for iPhone</Text>
        </View>

        <View style={ styles.separator }></View>

        <View style={ styles.tweetEngagements}>
         <View style={styles.flexRow}>
           <Text style={styles.tweetEngCount}>69</Text>
           <Text style={styles.tweetEngText}>Retweets</Text>
          </View>
          <View style={styles.flexRow}>
           <Text style={styles.tweetEngCount}>4</Text>
           <Text style={styles.tweetEngText}>Quote Retweets</Text>
          </View>
          <View style={styles.flexRow}>
           <Text style={styles.tweetEngCount}>916</Text>
           <Text style={styles.tweetEngText}>Likes</Text>
          </View>
        </View>

        <View style={ styles.separator }></View>

        <View style={ styles.tweetEngagements}>
          <TouchableOpacity style={[ styles.flexRow,]}>
              <EvilIcons name="comment" size={40} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity style={[ styles.flexRow, styles.ml4]}>
              <EvilIcons name="retweet" size={40} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity style={[ styles.flexRow, styles.ml4]}>
              <EvilIcons name="heart" size={40} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity style={[ styles.flexRow, styles.ml4]}>
              <EvilIcons 
                name={Platform.OS === 'ios' ? "share-apple" : "share-google" }
                size={40} 
                color="gray" />
          </TouchableOpacity>
        </View>

        <View style={ styles.separator }></View>
        </>
      ) }
        


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  profileDetails: {
    flexDirection: "row",
    justifyContent:"space-between",
    paddingVertical:12,
    paddingHorizontal:12,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  flexRow: {
    flexDirection: 'row'
  },
  nameContainer: {
    marginLeft: 12,
    paddingVertical:12,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  handle: {
    color: 'gray',
    marginTop:4,
  },
  tweetTextContainer: {
    paddingHorizontal: 12,
    paddingVertical:12,
  },
  tweetText: {
    fontSize: 22,
    lineHeight:33,
    color: "#222",
  },
  tweetEngagements: {
    flexDirection:"row",
    paddingHorizontal: 12,
    paddingVertical: 12,
    justifyContent: "space-between",
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: '#eff3f4',
  },
  info: { 
    marginBottom: 8, 
    paddingHorizontal:12,
  },
  ml4: {
    marginLeft:10,
  },
  tweetEngCount: {
    fontWeight: "bold",
  },
  tweetEngText: {
    marginLeft: 4,
  }
});
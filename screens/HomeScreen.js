import React from 'react';
import { StyleSheet, Text, View, Button, FlatList,Image, TouchableOpacity,Platform} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';





export default function HomeScreen({ navigation }) {

  const DATA = [
    {
      id: '1',
      title: 'First Item',
    },
    {
      id: '2',
      title: 'Second Item',
    },
    {
      id: '3',
      title: 'Third Item',
    },
    {
      id: '4',
      title: 'Fourth Item',
    },
    {
      id: '5',
      title: 'Fifth Item',
    },
    {
      id: '6',
      title: 'Sixth Item',
    },
    {
      id: '7',
      title: 'Seventh Item',
    },
    {
      id: '8',
      title: 'Eighth Item',
    },
    {
      id: '9',
      title: 'ninth Item',
    },
    {
      id: '10',
      title: 'Tenth Item',
    },
  ];

  function gotoProfile() {
    navigation.navigate('Profile')
  }

  function gotoSingleTweet() {
    navigation.navigate('Tweet Screen')
  }

  function gotoNewTweet() {
    navigation.navigate('New Tweet')
  }



  const renderItem = ({ item }) => (
    <View style={styles.tweetContainer}>
      <TouchableOpacity onPress={ () => gotoProfile()}>
        <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={styles.avatar} />
       </TouchableOpacity>
      <View style={{ flex:1 }}>
        <TouchableOpacity style={styles.flexRow} onPress={ () => gotoSingleTweet() }>
            <Text numberOfLines={1} style={ styles.tweetName}>{ item.title}</Text>
            <Text numberOfLines={1} style={ styles.tweetHandle}>@udimax</Text>
            <Text>&middot;</Text>
            <Text numberOfLines={1} style={ styles.tweetHandle}>8 min</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tweetContentContainer} onPress={ () => gotoSingleTweet() }>
        <Text style={styles.tweetContent}>I’m now 9 hours in Q for petrol;a bowser just came; it’s actually fun to stand in Q b’coz all young people with true brotherhood help each other;we’re treated with tea, bread, dhal & above all,with natural hospitality that SL offers to others</Text>
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
          data={DATA}
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
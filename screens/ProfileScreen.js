import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,Linking, FlatList} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import HomeScreen from './HomeScreen';

export default function ProfileScreen() {

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

  const profileHeader = () => {
    return (
      <View style={ styles.container }>

      <Image source={{uri: 'https://cutewallpaper.org/21/twitter-banner-backgrounds/Abstract-Textures-Twitter-Cover-Twitter-Background-.jpg'}}
            style={styles.coverImage} />

      <View style={styles.avatarContainer}>
            <TouchableOpacity onPress={ () => gotoProfile()}>
              <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.profileAvatar} />
            </TouchableOpacity>

            <View>
              <TouchableOpacity style={styles.followBtn}>
                <Text style={styles.followBtnTxt} >Follow</Text>
              </TouchableOpacity>
            </View>
      </View>   


      <View style={ styles.nameContainer}>
        <Text style={ styles.name}>Uditha Tennakoon</Text>
        <Text style={ styles.handle}>@udimax</Text>
      </View>

      <View style={ styles.useInfoContainer}>
        <Text style={ styles.useInfoText}>Founder @udimaxweb &amp; @webgura
. Entrepreneur| Web developer | Blogger | Banker | Teacher | Author | Tutor |</Text>
      </View>

      <View style={styles.contactContainer}>
        <View style={styles.contactItem}>
            <EvilIcons name="location" size={30} color="gray" />
            <Text style={styles.contactItemText}>Kandy</Text>
        </View>


        <TouchableOpacity onPress={() => Linking.openURL('http://udimaxweb.com')}>
          <View style={[styles.contactItem, styles.ml4]}>
              <EvilIcons name="link" size={30} color="gray" />
              <Text style={[styles.contactItemText, {color: "#1d9bf0"}]}>udimaxweb.com</Text>
          </View>
        </TouchableOpacity>

        <View style={[styles.contactItem, styles.ml4]}>
            <EvilIcons name="calendar" size={30} color="gray" />
            <Text style={styles.contactItemText}>Joined 2008</Text>
        </View>

      </View>

      <View style={ styles.followerDetailsContainer}>
          <View style={styles.followItem}>
              <Text style={styles.followItemCount} >345</Text>
              <Text style={styles.followItemText}>Following</Text>
          </View>

          <View style={[styles.followItem, styles.ml4]}>
              <Text style={styles.followItemCount} >600</Text>
              <Text style={styles.followItemText}>Followers</Text>
          </View>
      </View>

      <View style={ styles.separator }></View>
      </View>
    )
  }



  return (
      <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={ () => <View style={styles.tweetSeparator}></View> }
          ListHeaderComponent={profileHeader}
        />

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: '#eff3f4',
  },
  coverImage: {
    width: 800,
    height:200,
  },
  avatarContainer: {
    flexDirection:"row",
    justifyContent: "space-between",
    marginTop: -40,
    paddingHorizontal: 12,
  },
  profileAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#FFF",
  },
  followBtn: {
    backgroundColor: '#0f1419',
    borderRadius:24,
    paddingHorizontal:20,
    paddingVertical:10,
    marginTop: 55,
  },
  followBtnTxt: {
    fontSize: 16,
    color: "white",
  },
  nameContainer: {
    paddingVertical:12,
    paddingHorizontal:12,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  handle: {
    color: 'gray',
    marginTop:4,
  },
  useInfoContainer: {
    paddingHorizontal:12,
  },
  useInfoText: {
    lineHeight:20,
  },
  contactContainer: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  contactItem: {
    flexDirection: 'row',
  },
  contactItemText : {
    color: "gray",
    lineHeight: 20, 
  },
  ml4: {
    marginLeft: 12,
  },
  followerDetailsContainer: {
    flexDirection: "row",
    paddingHorizontal:12,
    paddingVertical: 12
  },
  followItem: {
    flexDirection: "row"
  },
  followItemCount: {
    fontWeight: 'bold'
  },
  followItemText: {
    color: "gray",
    marginLeft: 8,
  },
  tweetContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: "white", 
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
  tweetSeparator:{
    borderBottomWidth: 1,
    borderColor: '#e5e7eb'
  },
});
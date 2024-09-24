// import React from 'react';
// import { View, Text, StyleSheet, FlatList,TouchableOpacity ,Image } from 'react-native';

// const NotificationScreen = () => {
//   const notifications = [
//     { id: 1, title: 'Notification 1', description: 'This is the first notification.' },
//     { id: 2, title: 'Notification 2', description: 'This is the second notification.' },
//     { id: 3, title: 'Notification 3', description: 'This is the third notification.' },
//     { id: 4, title: 'Notification 1', description: 'This is the fourth notification.' },
//     { id: 5, title: 'Notification 2', description: 'This is the second notification.' },
//     { id: 6, title: 'Notification 3', description: 'This is the third notification.' },
//     { id: 7, title: 'Notification 1', description: 'This is the first notification.' },
//     { id: 8, title: 'Notification 2', description: 'This is the second notification.' },
//     { id: 9, title: 'Notification 3', description: 'This is the third notification.' },
//     { id: 10, title: 'Notification 1', description: 'This is the first notification.' },
//     { id: 11, title: 'Notification 2', description: 'This is the second notification.' },
//     { id: 12, title: 'Notification 3', description: 'This is the third notification.' },
//     { id: 13, title: 'Notification 1', description: 'This is the fourth notification.' },
//     { id: 14, title: 'Notification 2', description: 'This is the second notification.' },
//     { id: 15, title: 'Notification 3', description: 'This is the third notification.' },
//     { id: 16, title: 'Notification 1', description: 'This is the first notification.' },
//     { id: 17, title: 'Notification 2', description: 'This is the second notification.' },
//     { id: 18, title: 'Notification 3', description: 'This is the third notification.' },
//   ];

//   const renderItem = ({ item }) => (
//     <View style={styles.notification}>
//       <Text style={styles.title}>{item.title}</Text>
//       <Text style={styles.description}>{item.description}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//          <View style={styles.header}>
//         {/* <Image source={require('./logomain.png')} style={styles.logo} /> */}
//         <Text style={styles.title}>Notifications</Text>
//         <TouchableOpacity onPress={() => {}}>
//         <Text style={styles.description}>Mark as Read </Text>
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={notifications}
//         renderItem={renderItem}
//         keyExtractor={item => item.id.toString()}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor:'#faebd7'
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center', 
//     justifyContent: 'space-between', 
//     width: '100%',
//     height: 50,
//     backgroundColor: '#faebd7',
//     // borderBottomWidth: 1,
//     // borderBottomColor: 'gray',
// },
//   notification: {
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//     paddingVertical: 10,
//   },
//   logo: {
//     width: 60,
//     height: 60,
//      resizeMode: 'contain',
//      marginLeft:20
    
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   description: {
//     fontSize: 16,
//     color: '#666',
//   },
// });

// export default NotificationScreen;
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import moment from 'moment';
const NotificationScreen = () => {
  const notifications = [
    { id: 1, description: 'New album "Sunset Dreams" by your favorite artist is now available.' },
    { id: 2, description: 'Your playlist "Chill Vibes" has been updated with new tracks.' },
    { id: 3, description: 'Check out the latest trending tracks in the "Top Hits" playlist.' },
    { id: 4, description: 'Don\'t miss the live concert stream of your favorite band tonight at 8 PM.' },
    { id: 5, description: 'Get 20% off on premium subscription. Limited time offer!' },
    { id: 6, description: 'Create your custom playlist and share it with friends.' },
    { id: 7, description: 'Explore new genres with personalized recommendations just for you.' },
    { id: 8, description: 'Upgrade to premium for ad-free listening and offline downloads.' },
    { id: 9, description: 'Discover hidden gems with our curated playlists.' },
    { id: 10, description: 'Stay tuned for exclusive behind-the-scenes content from your favorite artists.' },
    { id: 11, description: 'Join the community discussion board to share your music experiences.' },
    { id: 12, description: 'Listen to the latest podcast episodes on various topics.' },
    { id: 13, description: 'Enhance your listening experience with our high-quality audio settings.' },
    { id: 14, description: 'Follow your friends and see what they\'re listening to.' },
    { id: 15, description: 'Get notified about upcoming album releases from your followed artists.' },
    { id: 16, description: 'Customize your playlists with unique cover art and descriptions.' },
    { id: 17, description: 'Discover new music festivals and events happening near you.' },
    { id: 18, description: 'Unlock special rewards and discounts as a premium subscriber.' },
  ];


  const renderItem = ({ item }) => (
    <View style={styles.notification}>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.time}>{formatTime(item.time)}</Text>
    </View>
  );

  const formatTime = (time) => {
    return moment(time).fromNow(); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <Image source={require('./logomain.png')} style={styles.logo} /> */}
        <Text style={styles.title}>Notifications</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.description}>Mark as Read</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{ flexGrow: 1 }} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#faebd7'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 50,
    backgroundColor: '#faebd7',
    // borderBottomWidth: 1,
    // borderBottomColor: 'gray',
  },
  notification: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 10,
    width: '100%', 
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginLeft: 20
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#666',
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
});

export default NotificationScreen;

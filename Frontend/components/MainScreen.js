// import React from 'react';
// import { useNavigation } from '@react-navigation/native';
// import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
// import { Card, ListItem, Avatar } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const MainScreen = () => {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.container}>
//       {/* <View style={styles.header}> */}
//         {/* <Image source={require('./logo.png')} style={styles.logo} /> */}
//         {/* <Text style={styles.title}>Dashboard Screen</Text>
//       </View> */}
//       <View style={styles.grid}>
//         <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('Main')}>
//           <Icon name="home" size={30} color="gray" />
//           <Text style={styles.gridText}>Home</Text>
//         </TouchableOpacity>
       
     
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'rgba(255, 193, 7, 0.7)',
//   },
//   header: {
//     width: '100%',
//     height: 80,
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderBottomWidth: 1,
//     borderBottomColor: 'gray',
//   },
//   logo: {
//     width: 50,
//     height: 50,
//     resizeMode: 'contain',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginLeft: 10,
//   },
//   grid: {
//     width: '100%',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 20,
//     position: 'absolute',
//     bottom: 0,
//   },
//   gridItem: {
//     width: '22%',
//     height: 90,
//     backgroundColor: 'rgba(255, 255, 255, 0.7)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 10,
//     marginVertical: 10,
//   },
//   gridText: {
//     color: 'gray',
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 10,
//   },
// });


// import React from 'react';
// import { StyleSheet, Text, View, Button, Image } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const MainScreen = () => {
//   const navigation = useNavigation();

//   const songs = ['Hariye', 'PASOORI', 'O Bederde', 'Chaleya', 'Heeriye', 'JAILER', 'Kaavaala', 'Araadhya', 'What Jhumka?', 'Not Ramaiya', 'Ton Dicke For You'];

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.title}>Hello! Jack</Text>
//         <Image
//           source={require('./logomain.png')} // Change this to the actual path of your image
//           style={styles.image}
//         />
//       </View>
//       <View style={styles.buttonContainer}>
//         <Button
//           title="Play your favorite music"
//           onPress={() => alert('Playing your favorite music!')}
//         />
//       </View>
//       <View style={styles.features}>
//         <Text style={styles.feature}>Q</Text>
//         <Text style={styles.feature}>30%</Text>
//         <Text style={styles.feature}>Unlimited Downloads</Text>
//         <Text style={styles.feature}>Off</Text>
//         <Text style={[styles.feature, { fontWeight: 'bold' }]}>Ad-Free Music</Text>
//         <Text style={[styles.feature, { fontWeight: 'bold' }]}>Listen Offline</Text>
//       </View>
//       <View style={styles.pricing}>
//         <Button
//           title="Buy Now"
//           color="blue"
//           accessibilityLabel="Learn more about this purple button"
//         />
//       </View>
//       <View style={styles.recentlyPlayed}>
//         <Text style={styles.heading}>Recently Played</Text>
//         {songs.map((song, index) => (
//           <Text key={index}>{song}</Text>
//         ))}
//       </View>
//       <View style={styles.latestHits}>
//         <Text style={styles.heading}>Latest Hits</Text>
//         {songs.map((song, index) => (
//           <Text key={index}>{song}</Text>
//         ))}
//       </View>
//       <View style={styles.menuContainer}>
//         <Text style={styles.menu}>Q</Text>
//         <Text style={styles.menu}>Home</Text>
//         <Text style={styles.menu}>My Music</Text>
//         <Text style={styles.menu}>Search</Text>
//         <Text style={styles.menu}>Premium</Text>
//         <Text style={styles.menu}>Settings</Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 0,
//   },
//   image: {
//     width: 50,
//     height: 50,
//   },
//   buttonContainer: {
//     width: '100%',
//     marginBottom: 20,
//   },
//   features: {
//     width: '100%',
//     marginBottom: 20,
//   },
//   feature: {
//     marginBottom: 10,
//   },
//   pricing: {
//     width: '100%',
//     marginBottom: 20,
//   },
//   recentlyPlayed: {
//     width: '100%',
//     marginBottom: 20,
//   },
//   latestHits: {
//     width: '100%',
//     marginBottom:20,
//   },
// })
// export default MainScreen;
// import React from 'react';
// import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import TrackPlayer from 'react-native-track-player';
// const MainScreen = () => {
//   const navigation = useNavigation();

//   const songs = [
//     { name: 'Hariye', image: require('./logomain.png') },
//     { name: 'PASOORI', image: require('./logomain.png') },
//     { name: 'O Bederde', image: require('./logomain.png') },
//     // Add more songs with their respective images here
//   ];

//   const playSong = (songName) => {
//     // Implement your play song logic here
//     alert(`Playing ${songName}`);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.title}>Hello! Jack</Text>
//         <Image
//           source={require('./logomain.png')} // Change this to the actual path of your image
//           style={styles.image}
//         />
//       </View>
//       <View style={styles.songList}>
//         {songs.map((song, index) => (
//           <TouchableOpacity key={index} onPress={() => playSong(song.name)}>
//             <View style={styles.songItem}>
//               <Image source={song.image} style={styles.songImage} />
//               <Text style={styles.songName}>{song.name}</Text>
//             </View>
//           </TouchableOpacity>
//         ))}
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingHorizontal: 20,
//     paddingTop: 40, // Adjust as per your requirement
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 0,
//   },
//   image: {
//     width: 50,
//     height: 50,
//   },
//   songList: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   songItem: {
//     width: '30%', // Adjust as per your preference
//     marginBottom: 20,
//     alignItems: 'center',
//   },
//   songImage: {
//     width: '100%',
//     height: 150, // Adjust as per your preference
//     marginBottom: 10,
//   },
//   songName: {
//     textAlign: 'center',
//   },
// });

// export default MainScreen;
// import TrackPlayer from 'react-native-track-player';

// const MainScreen = async () => {
//     // Set up the player
//     await TrackPlayer.setupPlayer();

//     // Add a track to the queue
//     await TrackPlayer.add({
//         id: 'trackId',
//         url: require('./Heeriye.mp3'),
//         title: 'Track Title',
//         artist: 'Track Artist',
//         artwork: require('./heeriye.png')
//     });

//     // Start playing it
//     await TrackPlayer.play();
// };
// MainScreen();
// import React, { useEffect } from 'react';
// import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import TrackPlayer, { TrackPlayerEvents, STATE_PLAYING } from 'react-native-track-player';

// const MainScreen = () => {
//   const navigation = useNavigation();

//   useEffect(() => {
//     setupTrackPlayer();
//     return () => TrackPlayer.destroy();
//   }, []);

//   const setupTrackPlayer = async () => {
//     await TrackPlayer.setupPlayer();
//     await TrackPlayer.updateOptions({
//       stopWithApp: true,
//       capabilities: [
//         TrackPlayer.CAPABILITY_PLAY,
//         TrackPlayer.CAPABILITY_PAUSE,
//         TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
//         TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
//       ],
//     });

//     await TrackPlayer.add(songs);
//   };

//   const songs = [
//     { id: '1', url: require('./Heeriye.mp3'), title: 'Hariye', artist: 'Artist 1' },
//     { id: '2', url: require('./Heeriye.mp3'), title: 'PASOORI', artist: 'Artist 2' },
//     { id: '3', url: require('./Heeriye.mp3'), title: 'O Bederde', artist: 'Artist 3' },
//     // Add more songs with their respective details here
//   ];

//   const playSong = async (song) => {
//     try {
//       await TrackPlayer.skip(song.id);
//       await TrackPlayer.play();
//     } catch (error) {
//       console.log('Error playing song: ', error);
//     }
//   };

//   const pauseSong = async () => {
//     try {
//       await TrackPlayer.pause();
//     } catch (error) {
//       console.log('Error pausing song: ', error);
//     }
//   };

//   const skipToNext = async () => {
//     try {
//       await TrackPlayer.skipToNext();
//     } catch (error) {
//       console.log('Error skipping to next song: ', error);
//     }
//   };

//   const skipToPrevious = async () => {
//     try {
//       await TrackPlayer.skipToPrevious();
//     } catch (error) {
//       console.log('Error skipping to previous song: ', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.title}>Hello! Jack</Text>
//         <Image
//           source={require('./logomain.png')} // Change this to the actual path of your image
//           style={styles.image}
//         />
//       </View>
//       <View style={styles.songList}>
//         {songs.map((song, index) => (
//           <TouchableOpacity key={index} onPress={() => playSong(song)}>
//             <View style={styles.songItem}>
//               <Image source={song.image} style={styles.songImage} />
//               <Text style={styles.songName}>{song.name}</Text>
//             </View>
//           </TouchableOpacity>
//         ))}
//       </View>
//       <View style={styles.controls}>
//         <Button title="Pause" onPress={pauseSong} />
//         <Button title="Next" onPress={skipToNext} />
//         <Button title="Previous" onPress={skipToPrevious} />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingHorizontal: 20,
//     paddingTop: 40, // Adjust as per your requirement
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 0,
//   },
//   image: {
//     width: 50,
//     height: 50,
//   },
//   songList: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   songItem: {
//     width: '30%', // Adjust as per your preference
//     marginBottom: 20,
//     alignItems: 'center',
//   },
//   songImage: {
//     width: '100%',
//     height: 150, // Adjust as per your preference
//     marginBottom: 10,
//   },
//   songName: {
//     textAlign: 'center',
//   },
//   controls: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginTop: 20,
//   },
// });

// export default MainScreen;
// import React, { useEffect } from 'react';
// import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import TrackPlayer, { TrackPlayerEvents } from 'react-native-track-player';

// const MainScreen = () => {
//   const navigation = useNavigation();

//   useEffect(() => {
//     setupTrackPlayer();
//     return () => TrackPlayer.destroy();
//   }, []);

//   const setupTrackPlayer = async () => {
//     await TrackPlayer.setupPlayer();
//     await TrackPlayer.updateOptions({
//       stopWithApp: true,
//       capabilities: [
//         TrackPlayer.CAPABILITY_PLAY,
//         TrackPlayer.CAPABILITY_PAUSE,
//         TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
//         TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
//       ],
//     });

//     await TrackPlayer.add(songs);

//     // Register event listeners
//     TrackPlayer.addEventListener(TrackPlayerEvents.PLAY, () => {
//       console.log('Play event triggered');
//     });

//     TrackPlayer.addEventListener(TrackPlayerEvents.PAUSE, () => {
//       console.log('Pause event triggered');
//     });

//     TrackPlayer.addEventListener(TrackPlayerEvents.NEXT_TRACK, () => {
//       console.log('Next track event triggered');
//     });

//     TrackPlayer.addEventListener(TrackPlayerEvents.PREVIOUS_TRACK, () => {
//       console.log('Previous track event triggered');
//     });
//   };

//   const songs = [
//     { id: '1', url: require('./Heeriye.mp3'), title: 'Hariye', artist: 'Artist 1', image: require('./heeriye.png') },
//     { id: '2', url: require('./Heeriye.mp3'), title: 'PASOORI', artist: 'Artist 2', image: require('./heeriye.png') },
//     { id: '3', url: require('./Heeriye.mp3'), title: 'O Bederde', artist: 'Artist 3', image: require('./heeriye.png') },
//     // Add more songs with their respective details here
//   ];

//   const playSong = async (song) => {
//     try {
//       await TrackPlayer.skip(song.id);
//       await TrackPlayer.play();
//     } catch (error) {
//       console.log('Error playing song: ', error);
//     }
//   };

//   const pauseSong = async () => {
//     try {
//       await TrackPlayer.pause();
//     } catch (error) {
//       console.log('Error pausing song: ', error);
//     }
//   };

//   const skipToNext = async () => {
//     try {
//       await TrackPlayer.skipToNext();
//     } catch (error) {
//       console.log('Error skipping to next song: ', error);
//     }
//   };

//   const skipToPrevious = async () => {
//     try {
//       await TrackPlayer.skipToPrevious();
//     } catch (error) {
//       console.log('Error skipping to previous song: ', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.title}>Hello! Jack</Text>
//         <Image
//           source={require('./logomain.png')} // Change this to the actual path of your image
//           style={styles.image}
//         />
//       </View>
//       <View style={styles.songList}>
//         {songs.map((song, index) => (
//           <TouchableOpacity key={index} onPress={() => playSong(song)}>
//             <View style={styles.songItem}>
//               <Image source={song.image} style={styles.songImage} />
//               <Text style={styles.songName}>{song.name}</Text>
//             </View>
//           </TouchableOpacity>
//         ))}
//       </View>
//       <View style={styles.controls}>
//         <Button title="Pause" onPress={pauseSong} />
//         <Button title="Next" onPress={skipToNext} />
//         <Button title="Previous" onPress={skipToPrevious} />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingHorizontal: 20,
//     paddingTop: 40, // Adjust as per your requirement
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 0,
//   },
//   image: {
//     width: 50,
//     height: 50,
//   },
//   songList: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   songItem: {
//     width: '30%', // Adjust as per your preference
//     marginBottom: 20,
//     alignItems: 'center',
//   },
//   songImage: {
//     width: '100%',
//     height: 150, // Adjust as per your preference
//     marginBottom: 10,
//   },
//   songName: {
//     textAlign: 'center',
//   },
//   controls: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginTop: 20,
//   },
// });

// export default MainScreen;



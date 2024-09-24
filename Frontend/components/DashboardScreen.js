

// import React, { useEffect } from 'react';
// import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import TrackPlayer, { TrackPlayerEvents } from 'react-native-track-player';

// const DashboardScreen = () => {
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
// export default DashboardScreen;
// import React, { useState } from 'react';
// import { Dimensions, FlatList, Image, StyleSheet, View } from 'react-native';

// import TrackPlayer, {
//   Event,
//   useTrackPlayerEvents,
// } from 'react-native-track-player';
// import { playListData } from '../components/constants';
// import SongInfo from '../components/SongInfo';
// import SongSlider from '../components/SongSlider';
// import ControlCenter from '../components/ControlCenter';

// const { width } = Dimensions.get('window');

// const DashboardScreen = () => {
//   const [track, setTrack] = useState(null);

//   useTrackPlayerEvents([Event.PlaybackTrackChanged], async (event) => {
//     switch (event.type) {
//       case Event.PlaybackTrackChanged:
//         const playingTrack = await TrackPlayer.getTrack(event.nextTrack);
//         setTrack(playingTrack);
//         break;
//     }
//   });

//   const renderArtWork = ({ item }) => {
//     return (
//       <View style={styles.listArtWrapper}>
//         <View style={styles.albumContainer}>
//           {item.artwork && (
//             <Image
//               style={styles.albumArtImg}
//               source={{ uri: item.artwork }}
//             />
//           )}
//         </View>
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         horizontal
//         data={playListData}
//         renderItem={renderArtWork}
//         keyExtractor={(song) => song.id.toString()}
//       />

//       <SongInfo track={track} />
//       <SongSlider />
//       <ControlCenter />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     // backgroundColor: '#001d23',
//     backgroundColor: '#faebd7',
//   },
//   listArtWrapper: {
//     width: width,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   albumContainer: {
//     width: 300,
//     height: 300,
//   },
//   albumArtImg: {
//     height: '100%',
//     borderRadius: 4,
//   },
// });

// export default DashboardScreen;
// import React, { useState, useEffect } from 'react';
// import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native';

// import TrackPlayer from 'react-native-track-player';
// import { playListData } from '../components/constants';

// const { width } = Dimensions.get('window');

// const DashboardScreen = () => {
//   const [tracks, setTracks] = useState([]);

//   useEffect(() => {
//     fetchSongs();
//   }, []);

//   const fetchSongs = async () => {
//     const tracks = await TrackPlayer.getQueue();
//     setTracks(tracks);
//   };

//   const renderSong = ({ item }) => {
//     return (
//       <View style={styles.songContainer}>
//         {item.artwork && (
//           <Image
//             style={styles.albumArtImg}
//             source={{ uri: item.artwork }}
//           />
//         )}
//         <Text style={styles.songTitle}>{item.title}</Text>
//         <Text style={styles.songArtist}>{item.artist}</Text>
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={tracks}
//         renderItem={renderSong}
//         keyExtractor={(song) => song.id.toString()}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   songContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   albumArtImg: {
//     width: 50,
//     height: 50,
//     marginRight: 10,
//     borderRadius: 4,
//   },
//   songTitle: {
//     fontWeight: 'bold',
//   },
//   songArtist: {
//     color: '#888',
//   },
// });

// export default DashboardScreen;
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

const DashboardScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello! Kapil</Text>
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <Icon name="search" size={20} color="#666" style={styles.iconButton} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="bell" size={20} color="#666" style={styles.iconButton} />
          </TouchableOpacity>
        </View>
        </View>
        
        {/* ['#f06292', '#ba68c8', '#64b5f6'] */}
      
        <Text style={styles.greet}>Play your favorite music</Text>
        
        <LinearGradient colors={['#f06292', '#ba68c8', '#64b5f6']} style={styles.gradient}>
        <View style={styles.cont}>
          <View style={styles.leftContainer}>
            <Text style={styles.prompt}>30%</Text>
            <Text style={styles.prompt}>Off</Text>
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => navigation.navigate('Subscription')}>
              <Text style={styles.editButtonText}>Buy Now</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rightContainer}>
            <Text style={styles.promptt}>@Unlimited Downloads</Text>
            <Text style={styles.promptt}>@Ad-Free Music</Text>
            <Text style={styles.promptt}>@Listen Offline</Text>
          </View>
        </View>
      </LinearGradient>
<View>
<Text style={styles.heading}>Recently Played</Text>
      <ScrollView style={styles.songList} horizontal showsHorizontalScrollIndicator={false}>
      <TouchableOpacity onPress={() => navigation.navigate('Music')}>
        <View style={styles.song}>
          <Image source={require('./heeriye.png')} style={styles.image}/>
          <Text style={styles.songName}>Heeriye</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Music')}>
        <View style={styles.song}>
        <Image source={require('./Champagne.jpg')} style={styles.image} />
          <Text style={styles.songName}>Maan Meri Jaan</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Music')}>
        <View style={styles.song}>
        <Image source={require('./shershaah.jpg')} style={styles.image} />
          <Text style={styles.songName}>Raataan Lambiyan</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Music')}>
        <View style={styles.song}>
        <Image source={require('./pasoori.jpg')} style={styles.image} />
          <Text style={styles.songName}>PASOORI</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Music')}>
        <View style={styles.song}>
        <Image source={require('./dil.jpg')} style={styles.image} />
          <Text style={styles.songName}>Pal Pal Dil Ke Paas</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Music')}>
        <View style={styles.song}>
        <Image source={require('./rang.jpg')} style={styles.image} />
          <Text style={styles.songName}>Besharam Rang</Text>
        </View>
        </TouchableOpacity>
      </ScrollView>
      </View>
      <View>
      <Text style={styles.heading}>Latest Hits</Text>
      <ScrollView style={styles.songList} horizontal showsHorizontalScrollIndicator={false}>
      <TouchableOpacity onPress={() => navigation.navigate('Music')}>
      <View style={styles.song}>
        <Image source={require('./dil.jpg')} style={styles.image} />
          <Text style={styles.songName}>Pal Pal Dil Ke Paas</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Music')}>
        <View style={styles.song}>
          <Image source={require('./heeriye.png')} style={styles.image} />
          <Text style={styles.songName}>Heeriye</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Music')}>
        <View style={styles.song}>
        <Image source={require('./Champagne.jpg')} style={styles.image} />
          <Text style={styles.songName}>Maan Meri Jaan</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Music')}>
        <View style={styles.song}>
        <Image source={require('./shershaah.jpg')} style={styles.image} />
          <Text style={styles.songName}>Raataan Lambiyan</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Music')}>
        <View style={styles.song}>
        <Image source={require('./pasoori.jpg')} style={styles.image} />
          <Text style={styles.songName}>PASOORI</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Music')}>
        <View style={styles.song}>
        <Image source={require('./rang.jpg')} style={styles.image} />
          <Text style={styles.songName}>Besharam Rang</Text>
        </View>
        </TouchableOpacity> 
      </ScrollView>
      </View>
      <View>
      <Text style={styles.heading}>Top Picks For You</Text>
      <ScrollView style={styles.songList} horizontal showsHorizontalScrollIndicator={false}>
      <TouchableOpacity onPress={() => navigation.navigate('Music')}>
      <View style={styles.song}>
        <Image source={require('./rang.jpg')} style={styles.image} />
          <Text style={styles.songName}>Besharam Rang</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Music')}>
      <View style={styles.song}>
        <Image source={require('./shershaah.jpg')} style={styles.image} />
          <Text style={styles.songName}>Raataan Lambiyan</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Music')}>
        <View style={styles.song}>
        <Image source={require('./Champagne.jpg')} style={styles.image} />
          <Text style={styles.songName}>Maan Meri Jaan</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Music')}>
        <View style={styles.song}>
        <Image source={require('./pasoori.jpg')} style={styles.image} />
          <Text style={styles.songName}>PASOORI</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Music')}>
        <View style={styles.song}>
        <Image source={require('./dil.jpg')} style={styles.image} />
          <Text style={styles.songName}>Pal Pal Dil Ke Paas</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Music')}>
        <View style={styles.song}>
          <Image source={require('./heeriye.png')} style={styles.image} />
          <Text style={styles.songName}>Heeriye</Text>
        </View>
        </TouchableOpacity>
      </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faebd7',
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#666',
    //  marginBottom: 10,
    marginLeft: 2,
    marginTop:10
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    // marginRight:10,
    marginBottom: 10,
    // marginLeft:10
  },greet: {
    fontSize: 16,
    fontWeight: 'bold',
    // marginRight:10,
    marginBottom: 10,
    // marginLeft:10
  },
  
  prompt: {
    fontSize: 24,
    color: '#fff',
    // marginRight:10,
    marginBottom: 20,
    // marginLeft:10
  },
  promptt: {
    fontSize: 20,
    color: '#fff',
    // marginRight:10,
    marginBottom: 20,
    //  marginLeft:10
  },
  cont: {
   
    padding: 20,
    height: 200,
    borderRadius: 10,
    flexDirection: 'row',
    marginBottom:20,

  },
  songList: {
    marginTop: 20,
  },
  song: {
    marginRight: 10,
  },
 
  leftContainer: {
   
    alignItems: 'flex-start',
    
  },
  rightContainer: {
    alignItems: 'flex-start',
    marginLeft: 60,
    textAlign:'center'
  },
  
  editButton: {
    backgroundColor: '#ff6347',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent:'space-between'
  },
  iconButton: {
    
    
    // marginRight:10,
    // marginBottom: 20,
    marginLeft:20
    // Style your icon button as needed
  }, gradient: {
    borderRadius: 10,
    marginBottom: 20,
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
  }, gradient: {
    borderRadius: 10,
    marginBottom: 20,
  },
  songName: {
    marginTop: 5,
    textAlign: 'center',
  },
});

export default DashboardScreen;


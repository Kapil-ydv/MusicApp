// import React, { useState } from 'react';
// import { Dimensions, FlatList, Image, StyleSheet, View } from 'react-native';

// import TrackPlayer, {
//   Event,
//   useTrackPlayerEvents,
// } from 'react-native-track-player';
// import { playListData} from '../components/constants';
// import SongInfo from '../components/SongInfo';
// import SongSlider from '../components/SongSlider';
// import ControlCenter from '../components/ControlCenter';

// const { width } = Dimensions.get('window');

// const MusicScreen = () => {
//   const [track, setTrack] = useState( );

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
//               source={{ uri: item.artwork}}
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
// export default MusicScreen;
// import React, { useState, useEffect } from 'react';
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

// const MusicScreen = () => {
//   const [track, setTrack] = useState(null);

//   useEffect(() => {
    
//     const getCurrentTrack = async () => {
//       const currentTrackId = await TrackPlayer.getCurrentTrack();
//       if (currentTrackId) {
//         const currentTrack = await TrackPlayer.getTrack(currentTrackId);
//         setTrack(currentTrack);
//       }
//     };

//     getCurrentTrack();
//   }, []);

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

// export default MusicScreen;
// import React, { useState, useEffect } from 'react';
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

// const MusicScreen = () => {
//   const [track, setTrack] = useState(null);

//   useEffect(() => {
//     const getCurrentTrack = async () => {
//       const currentTrackId = await TrackPlayer.getCurrentTrack();
//       if (currentTrackId) {
//         const currentTrack = await TrackPlayer.getTrack(currentTrackId);
//         setTrack(currentTrack);
//       }
//     };

//     getCurrentTrack();
//   }, []);

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

// export default MusicScreen;
import React, { useState, useEffect } from 'react';
import { Dimensions, FlatList, Image, StyleSheet, View } from 'react-native';

import TrackPlayer, {
  Event,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import { playListData } from '../components/constants';
import SongInfo from '../components/SongInfo';
import SongSlider from '../components/SongSlider';
import ControlCenter from '../components/ControlCenter';

const { width } = Dimensions.get('window');
const MusicScreen = () => {
  const [track, setTrack] = useState(null);
  const [artwork, setArtwork] = useState(null);

  useEffect(() => {
    const getCurrentTrack = async () => {
      const currentTrackId = await TrackPlayer.getCurrentTrack();
      if (currentTrackId) {
        const currentTrack = await TrackPlayer.getTrack(currentTrackId);
        setTrack(currentTrack);

        
        setArtwork(currentTrack.artwork);
      }
    };

    getCurrentTrack();
  }, []);

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async (event) => {
    switch (event.type) {
      case Event.PlaybackTrackChanged:
        const playingTrack = await TrackPlayer.getTrack(event.nextTrack);
        setTrack(playingTrack);

        
        setArtwork(playingTrack.artwork);
        break;
    }
  });

  const renderArtWork = ({ item }) => {
    return (
      <View style={styles.listArtWrapper}>
        <View style={styles.albumContainer}>
          {artwork && (
            <Image
              style={styles.albumArtImg}
              source={{ uri: artwork }}
            />
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={playListData}
        renderItem={renderArtWork}
        keyExtractor={(song) => song.id.toString()}
      />
      <SongInfo track={track} />
      <SongSlider />
      <ControlCenter />
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#faebd7',
    },
    listArtWrapper: {
      width: width,
      justifyContent: 'center',
      alignItems: 'center',
    },
    albumContainer: {
      width: 300,
      height: 300,
    },
    albumArtImg: {
      height: '100%',
      borderRadius: 4,
    },
  });
export default MusicScreen;



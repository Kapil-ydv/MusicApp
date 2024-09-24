// import React from 'react'
// import { View, StyleSheet, Pressable } from 'react-native'
// import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player'


// import Icon from 'react-native-vector-icons/MaterialIcons'

// import { playbackService } from '../../musicPlayerServices'

// const ControlCenter = () => {

//     const playBackState = usePlaybackState()
//     // next button
//     const skipToNext = async () => {
//         await TrackPlayer.skipToNext()
//     }
//     // Previous button
//     const skipToPrevious = async () => {
//         await TrackPlayer.skipToPrevious()
//     }

//     const togglePlayback = async (playback: State) => {
//         const  currentTrack = await TrackPlayer.getCurrentTrack()

//         if (currentTrack !== null) {
//             if (playback === State.Paused || playback === State.Ready) {
//                 await TrackPlayer.play()
//             } else {
//                 await TrackPlayer.pause()
//             }
//         }
//     }

//   return (
//     <View style={styles.container}>
//         <Pressable onPress={skipToPrevious}>
//             <Icon style={styles.icon} name="skip-previous" size={40} />
//         </Pressable>
//         <Pressable onPress={() => togglePlayback(playBackState)}>
//             <Icon 
//             style={styles.icon} 
//             name={playBackState === State.Playing ? "pause" : "play-arrow"} 
//             size={75} />
//         </Pressable>
//         <Pressable onPress={skipToNext}>
//             <Icon style={styles.icon} name="skip-next" size={40} />
//         </Pressable>

//     </View>
//   )
// }

// const styles = StyleSheet.create({
//     container: {
//       marginBottom: 56,
  
//       flex: 1,
//       flexDirection: 'row',
//       alignItems: 'center',
//     },
//     icon: {
//       color: '#FFFFFF',
//     },
//     playButton: {
//       marginHorizontal: 24,
//     },
//   });

// export default ControlCenter;
// import React from 'react'
// import { View, StyleSheet, Pressable } from 'react-native'

// import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player'

// import Icon from 'react-native-vector-icons/MaterialIcons'

// import { playbackService } from './components/musicPlayerServices'

// const ControlCenter = () => {
//   const playBackState = usePlaybackState()

//   // next button
//   const skipToNext = async () => {
//     await TrackPlayer.skipToNext()
//   }

//   // Previous button
//   const skipToPrevious = async () => {
//     await TrackPlayer.skipToPrevious()
//   }

//   const togglePlayback = async () => {


    
//       if (playBackState === State.Paused || playBackState === State.Stopped) {
//         await TrackPlayer.play()
//       } else {
//         await TrackPlayer.pause()
//       }
    
//   };

//   return (
//     <View style={styles.container}>
//       <Pressable onPress={skipToPrevious}>
//         <Icon style={styles.icon} name="skip-previous" size={40} />
//       </Pressable>
//       <Pressable onPress={() => togglePlayback(playBackState)}>
//         <Icon
//           style={styles.icon}
//           name={playBackState === State.Playing ? "pause" : "play-arrow"}
//           size={75}
//         />
//       </Pressable>
//       <Pressable onPress={skipToNext}>
//         <Icon style={styles.icon} name="skip-next" size={40} />
//       </Pressable>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     marginBottom: 56,

//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   icon: {
//     color: '#FFFFFF',
//   },
//   playButton: {
//     marginHorizontal: 24,
//   },
// })

// export default ControlCenter;
// import React from 'react';
// import { View, StyleSheet, Pressable } from 'react-native';
// import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import { playbackService } from './musicPlayerServices';

// const ControlCenter = () => {
//   const playBackState = usePlaybackState();

//   // next button
//   const skipToNext = async () => {
//     await TrackPlayer.skipToNext();
//   };

//   // Previous button
//   const skipToPrevious = async () => {
//     await TrackPlayer.skipToPrevious();
//   };

//   // const togglePlayback = async () => {
//   //   if (playBackState === State.Paused || playBackState ===State.Stopped ) {
//   //     await TrackPlayer.play();
//   //   } else {
//   //     await TrackPlayer.pause();
//   //   }
//   // };

  
//     async function togglePlayback() {
//       if(await TrackPlayer.getState() == State.Playing) {
//         await TrackPlayer.pause();
//       }
//       else {
//         await TrackPlayer.play();
//       }
//     }

//   return (
//     <View style={styles.container}>
//       <Pressable onPress={skipToPrevious}>
//         <Icon style={styles.icon} name="skip-previous" size={40} />
//       </Pressable>
//       <Pressable onPress={togglePlayback}>
//         <Icon
//           style={styles.icon}
//           name={playBackState === State.Playing ? 'pause' : 'play-arrow'}
//           size={75}  
//         />
//         </Pressable>
      
//       <Pressable onPress={skipToNext}>
//         <Icon style={styles.icon} name="skip-next" size={40} />
//       </Pressable>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginBottom: 56,
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   icon: {
//     // color: '#FFFFFF',
//     color: '#001d23'
//   },
// });

// export default ControlCenter;
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { playbackService } from './musicPlayerServices';

const ControlCenter = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const subscription = TrackPlayer.addEventListener('playback-state', ({ state }) => {
      setIsPlaying(state === State.Playing);
    });

    return () => subscription.remove();
  }, []);

  
  const skipToNext = async () => {
    await TrackPlayer.skipToNext();
  };

  
  const skipToPrevious = async () => {
    await TrackPlayer.skipToPrevious();
  };

  
  const togglePlayback = async () => {
    if (isPlaying) {
      await TrackPlayer.pause();
    } else {
      await TrackPlayer.play();
    }
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={skipToPrevious}>
        <Icon style={styles.icon} name="skip-previous" size={40} />
      </Pressable>
      <Pressable onPress={togglePlayback}>
        {isPlaying ? (
          <Icon style={styles.icon} name="pause" size={75} />
        ) : (
          <Icon style={styles.icon} name="play-arrow" size={75} />
        )}
      </Pressable>
      <Pressable onPress={skipToNext}>
        <Icon style={styles.icon} name="skip-next" size={40} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 56,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: '#001d23'
  },
});

export default ControlCenter;



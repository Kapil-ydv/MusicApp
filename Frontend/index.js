/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import TrackPlayer from 'react-native-track-player';
import {name as appName} from './app.json';
import { playbackService,setupPlayer,addTrack } from './components/musicPlayerServices';

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => playbackService);
// TrackPlayer.registerPlaybackService(() => setupPlayer);
// TrackPlayer.registerPlaybackService(() => addTrack);


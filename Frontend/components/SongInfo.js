import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const SongInfo = ({ track }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>
          {track ? track.title : ''}
        </Text>
        <Text style={styles.artist}>
          {track ? `${track.artist} . ${track.album}` :''}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center',
  },
  name: {
    marginBottom: 8,
    textAlign: 'center',
    // color: '#fff',
    color: '#001d23',
    fontSize: 24,
    fontWeight: '800',
  },
  artist: {
    // color: '#d9d9d9',
    color: '#001d23',
    textAlign: 'center',
  },
});

export default SongInfo;

import React from 'react';
import { View, StyleSheet, Text, Switch, TouchableOpacity } from 'react-native';

const DataScreen = () => {
  const [dataSaver, setDataSaver] = React.useState(false);
  const [highQualityImages, setHighQualityImages] = React.useState(false);
  const [highQualityVideo, setHighQualityVideo] = React.useState(false);
  const [videoAutoplay, setVideoAutoplay] = React.useState(false);

  return (
    <View style={styles.container}>
        <Text style={styles.titlemain}>Data usage</Text>
        <View style={styles.main}>
        <View style={styles.section}>
      <Text style={styles.title}>Data saver</Text>
      <Switch
        value={dataSaver}
        onValueChange={setDataSaver}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={dataSaver ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
      />
      </View>
      <Text style={styles.sectionT}>When enabled track autoplay and lower quality  </Text>
        <Text style={styles.sectionT}> images load.This automatically reduces your data </Text>
        <Text style={styles.sectionT}> usage for all Heat Hit accounts on this device </Text>
        </View>
        <View style={styles.main}>
        <View style={styles.section}>
      <Text style={styles.title}>High-quality audio</Text>
      <Switch
        value={highQualityImages}
        onValueChange={setHighQualityImages}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={highQualityImages ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
      />
      </View>
       <Text style={styles.sectionT}>Select when high quality audio is load  </Text>
       </View>
       <View style={styles.main}>
       <View style={styles.section}>
      <Text style={styles.title}>High-quality downloads</Text>
      <Switch
        value={highQualityVideo}
        onValueChange={setHighQualityVideo}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={highQualityVideo ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
      />
       </View>
      <Text style={styles.sectionT}>Select when high quality available should download </Text>
      </View>
      <View style={styles.main}>
      <View style={styles.section}>
      <Text style={styles.title}>Audio autoplay</Text>
      <Switch
        value={videoAutoplay}
        onValueChange={setVideoAutoplay}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={videoAutoplay ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
      />
       </View>
      <Text style={styles.sectionT}>Select when when wants autoplay next track </Text>
      </View>
      <View style={styles.main}>
        <View style={styles.section}>
      <Text style={styles.title}>Wifi Data Usage</Text>
      </View>
      <Text style={styles.sectionT}>4GB used APR 7 -MAY 7 </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor:'#faebd7'
    },
    titlemain: {
        fontSize: 32,
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        fontWeight: 'bold',
        // marginBottom: 40,
        color:'black'
      },
      main: {
    
        marginBottom: 30,
      },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        // marginBottom: 40,
        // color:'black'
      },
      section: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginBottom: 20,
      },
      sectionT: {
        fontSize: 15,
        fontWeight: 'bold',
      },
})

export default DataScreen;
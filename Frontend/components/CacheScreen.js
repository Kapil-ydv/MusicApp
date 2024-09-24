import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const CacheScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={require('./logomain.png')} style={styles.logo} />
        <Text style={styles.title}>Heat Hit</Text>
      </View>
       <View style={styles.cont}>
        <Text style={styles.label}>Total Storage:</Text>
        <Text style={styles.value}>26.47 MB</Text>
        </View>
        <View style={styles.cont}>
        <Text style={styles.label}>App Data:</Text>
        <Text style={styles.value}>26.36 MB</Text>
        </View>
        <View style={styles.cont}>
      <Text style={styles.label}>Cache:</Text>
      <Text style={styles.value}>112 KB</Text>
      </View>
      <View style={styles.cont}>
      <Text style={styles.label}>C Storage:</Text>
      <Text style={styles.value}>36.00 KB</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonn} onPress={() => console.log('Clear Data pressed')}>
          <Text style={styles.button}>CLEAR DATA</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.buttonn} onPress={() => console.log('Clear Cache pressed')}>
          <Text style={styles.button}>CLEAR CACHE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    
    backgroundColor: '#faebd7'
  },
  headerContainer: {
    // flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 70,
  },
  buttonn: {
    backgroundColor: 'brown',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
},
  logo: {
    width: 190,
    height: 190,
    marginRight: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
 cont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    
    marginBottom: 50,
},
  label: {
    fontSize: 16,
    color: '#333',
  },
  value: {
    fontSize: 16,
    color: '#666',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  button: {
    fontSize: 16,
    color: '#337AB7',
    paddingHorizontal: 10,
    color: '#fff',
  },
});

export default CacheScreen;

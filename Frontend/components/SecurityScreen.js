import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Switch,
  TextInput,
  Button,
} from 'react-native';

const SecurityScreen = () => {
  const [rememberData, setRememberData] = useState(false);
  const [autocomplete, setAutocomplete] = useState(false);
  const [doNotTrack, setDoNotTrack] = useState(false);
  const [authorization, setAuthorization] = useState(false);
  const [personalized, setPersonalized] = useState(false);
  const [rememberpassword, setRememberpassword] = useState(false);
  const [performance, setPerformance] = useState(false);
//   const handleResetPress = () => {
    
//     console.log('Performance ID reset');
//   };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Privacy & security</Text>

      
      <View style={styles.main}>
        <View style={styles.section}>
        <Text style={styles.sectionTitle}>Remember passwords</Text>
        <Switch
          value={rememberpassword}
          onValueChange={setRememberpassword}
          style={styles.switch}
        />
      </View>
      <Text style={styles.sectionT}>Save username and password so that you can</Text>
        <Text style={styles.sectionT}> use them at the time of login to autofill them automatically </Text>
</View>
<View style={styles.main}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Remember form data</Text>
        <Switch value={rememberData} onValueChange={setRememberData} />
      </View>
      <Text style={styles.sectionT}>Remember the data you type in forms and  </Text>
        <Text style={styles.sectionT}> autofill it automatically. Saved items will be  </Text>
        <Text style={styles.sectionT}> encrypted and stored only on this device .  </Text>
        </View>
        <View style={styles.main}>
        <View style={styles.section}>
        <Text style={styles.sectionTitle}>Autocomplete searches and URLs</Text>
        <Switch value={autocomplete} onValueChange={setAutocomplete} />
      </View>
      <Text style={styles.sectionT}>Autocompletes searches based on browsing history</Text>
        <Text style={styles.sectionT}> search engine suggestions and popular websites </Text>
        </View>
        <View style={styles.main}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Do Not Track</Text>
        <Switch value={doNotTrack} onValueChange={setDoNotTrack} />
      </View>
      <Text style={styles.sectionT}> Only in Incognito mode </Text>
      </View>
      <View style={styles.main}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Authorization</Text>
        <Switch value={authorization} onValueChange={setAuthorization} />
      </View>
      <Text style={styles.sectionT}> Toggle the switch on and off for authorization </Text>
      </View>
      <View style={styles.main}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Personalised service </Text>
        <Switch value={personalized} onValueChange={setPersonalized} />
      </View>
      <Text style={styles.sectionT}> Personalised content  services </Text>
      </View>
      
      <View style={styles.main}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Reset Performance ID </Text>
        <Switch value={performance} onValueChange={setPerformance} />
      </View>
      <Text style={styles.sectionT}> Current Performance ID: </Text>
      <Text style={styles.sectionT}>  01f0bd58f3b98b7a080a93d930af2c06 </Text>
      </View>
      
      {/* <View style={styles.section}> */}
      {/* <Text style={styles.sectionTitle}>Reset Performance ID </Text>
        <Button title="Reset ID" onPress={handleResetPress} />
      </View>
      <View style={styles.currentId}>
        <Text style={styles.currentIdText}>Current Performance ID:</Text>
        <Text style={styles.currentIdValue}>
          01f0bd58f3b98b7a080a93d930af2c06
        </Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:'#faebd7'
  },
  main: {
    
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    color:'black'
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'black'
  },
  sectionT: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  switch: {
    marginLeft: 10,
  },
  currentId: {
    marginTop: 20,
  },
  currentIdText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  currentIdValue: {
    fontSize: 16,
    marginTop: 5,
  },
});
export default SecurityScreen;
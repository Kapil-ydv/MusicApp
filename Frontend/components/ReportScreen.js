import React, { useState } from 'react';
import { View, TextInput, TextArea, Button,StyleSheet, Alert ,TouchableOpacity} from 'react-native';
import { Text } from 'react-native-paper';

const ReportScreen = () => {
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const isValidEmail = (email) => {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
  };

  const handleSubmit = () => {
    if (!isValidEmail(email)) {
        Alert.alert('Invalid Email', 'Please enter a valid email address.');
        return;
      }
    
    Alert.alert(
      'Thank you for your feedback!',
      'Your report has been documented. Please note that we do not respond to diagnostic reports.',
      [{ text: 'OK' }]
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#faebd7' }}>
        <Text style={styles.sectionTitle} >Report an Issue</Text>
        <View style={styles.inputContain}>
      <TextInput
        placeholder="Description of the issue"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={10}
      />
      </View>
       <View style={styles.inputContainer}>
      <TextInput
        placeholder=" enter your email address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      </View>
      {/* <Button title="Send Report" onPress={handleSubmit} /> */}
      
      <TouchableOpacity style={styles.editButton} onPress={handleSubmit}>
        <Text style={styles.editButtonText}>Send Report</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
    inputContainer: {
        borderColor: 'gray',
        borderWidth: 3,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 30,
        width: '100%',
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      sectionTitle: { 
        fontSize: 30, 
        fontWeight: 'bold', 
        marginBottom: 10, 
        
    },
      inputContain: {
        marginTop:50,
         borderColor: 'gray',
        borderWidth: 3,
        borderRadius: 5,
        paddingHorizontal: 10,
         marginBottom: 3,
        width: '100%',
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      editButton: {
        backgroundColor: 'brown',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginTop: 10,
        alignSelf: 'center',
      },
      editButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      },
    });

export default ReportScreen;
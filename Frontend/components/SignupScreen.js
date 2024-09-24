
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import bcrypt from 'bcrypt';

const SignupScreen = () => {
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const isValidEmail = (email) => {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
  };

  
  const isValidMobileNumber = (phone) => {
    const pattern = /^\+[0-9]{1,3}[0-9]{7,15}$/; 
    return pattern.test(phone);
  };

  const handleSignUp = async () => {
    if (!isValidEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    if (!isValidMobileNumber(phone)) {
      Alert.alert('Invalid Phone Number', 'Please enter a valid phone number.');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    

    const apidata = {
      eventID: "1006",
      addInfo: {
        name: name,
        email: email,
        phone: phone,
        password: password
      }
    };

    try {
      const  url = 'http://192.168.33.104:5218/registration'; 
      const result = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(apidata),
      });
      const data = await result.json();

      if (data.rData.rCode === 0) {
        
        setName('');
        setEmail('');
        setPhone('');
        setPassword('');
        setConfirmPassword('');

        Alert.alert('User Registered Successfully');
        navigation.navigate('Otp');
      } else if (data.rData.rCode === 2) {
        alert('Duplicate data found. Please try again with different credentials.');
      } else {
        alert('An error occurred during registration. Please try again later.');
      }
    } catch (error) {
      console.log(error);
      alert('Error in API calling. Please check your internet connection and try again.');
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://th.bing.com/th?q=iOS+14+Background&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247' }}
      style={[styles.backgroundImage, { alignItems: 'center', justifyContent: 'center' }]}
    >
      <Card style={styles.card}>
        <Card.Title title="Signup Screen" titleStyle={styles.title} />
        <Card.Content>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Full Name" value={name} onChangeText={text => setName(text)} />
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={text => setEmail(text)}/>
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="MobileNo" value={phone} onChangeText={text => setPhone(text)}/>
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Password" secureTextEntry={!passwordVisible}  value={password} onChangeText={text => setPassword(text)}/>
            <TouchableOpacity style={styles.eyeIconContainer} onPress={() => setPasswordVisible(!passwordVisible)}>
              <Icon name={passwordVisible ? 'eye-slash' : 'eye'} size={20} color="gray" />
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry={!confirmPasswordVisible}  value={confirmPassword} onChangeText={text => setConfirmPassword(text)}/>
            <TouchableOpacity style={styles.eyeIconContainer} onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
              <Icon name={confirmPasswordVisible ? 'eye-slash' : 'eye'} size={20} color="gray" />
            </TouchableOpacity>
          </View>
          <Card.Content>
            <TouchableOpacity style={styles.buttonRow} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.buttonRow}>Already have an account? Login</Text>
            </TouchableOpacity>
          </Card.Content>
        </Card.Content>
        <Card.Actions>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.centeredButton} onPress={handleSignUp}>
              <Text style={styles.buttonText}>SignUp</Text>
            </TouchableOpacity>
          </View>
        </Card.Actions>
      </Card>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover'
  },
  card: {
    width: '80%',
    borderRadius: 10,
    padding: 20,
    justifyContent:'center',
    textAlign:'center',
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    marginHorizontal: 10,
    // borderBottomColor: 'white',
    // borderBottomWidth: 1,
    // paddingBottom: 5,
  },
  inputContainer: {
    borderColor: 'gray',
    borderWidth: 3,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: '100%',
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
    width: '100%',
    marginBottom:10,
  },
  btnContainer:{
    width:'100%',
    // height:100,
    alignItems:'center',
    justifyContent:'center',
    marginTop:20,
    paddingRight:20
  },
  buttonRow: {
    color:'#000000',
    fontWeight:'900',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    marginBottom: 10,
    borderRadius: 5,
    
     textDecorationLine:'underline',
    
    width: '100%',
  },
  centeredButton: {
    alignItems: 'center',
    justifyContent: 'center',
    
    backgroundColor:'brown',
    borderRadius: 5,
    width: '30%',
    height: 40,
   
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    
  },
  eyeIconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

 export default SignupScreen;

   
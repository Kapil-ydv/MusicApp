
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground ,TouchableOpacity,Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RNMail from 'react-native-mail';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Card, ListItem, Avatar } from 'react-native-paper';
const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const [phone, setPhone] = useState('');
  const handleOtp = async () => {
    try {
      if (!phone.trim()) {
        
        Alert.alert('Please enter your mobile number');
        return;
      }
  
      await AsyncStorage.setItem('mobileNumber', phone);
      const url = 'http://192.168.33.104:5218/login'; 
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          eventID: '1002',
          addInfo: {
            UserId: phone,
          }
        }),
      });
      const data = await response.json();
  
      if (data.rData.rCode === 2) {
        
        Alert.alert('OTP sent successfully');
        navigation.navigate('Otp2');
      } else {
        
        alert(data.rData.rMessage);
      }
    } catch (error) {
     
      console.error('Error in sending OTP:', error);
    }
  };
  

  return (
    <ImageBackground
      source={{ uri: 'https://th.bing.com/th?q=iOS+14+Background&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247' }}
      style={[styles.backgroundImage, { alignItems: 'center', justifyContent: 'center' }]}
    >
      <Card style={styles.card}>
        <Card.Title title="Forgot Password Screen" titleStyle={styles.title} />
        <Card.Content>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="MobileNo." value={phone} onChangeText={text => setPhone(text)}/>
        </View>
        <Card.Content>
        <TouchableOpacity style={styles.buttonRow} onPress={() => navigation.navigate('Login')} >
          <Text style={styles.buttonRow}>Back to Login?</Text>
        </TouchableOpacity>
        </Card.Content>
        </Card.Content>
        <Card.Actions>
        <View style={styles.btnContainer}>
       <TouchableOpacity style={styles.centeredButton} onPress={handleOtp} >
          <Text style={styles.buttonText}>verify User</Text>
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
    width: '90%',
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
    paddingRight:20,
  },

  buttonRow: {
    color:'#000000',
    fontWeight:'900',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    marginBottom: 10,
    borderRadius: 5,
    textDecorationLine:"underline",
    width: '100%',
  },
  centeredButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'brown',
    borderRadius: 5,
    width: '50%',
    height: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ForgotPasswordScreen;
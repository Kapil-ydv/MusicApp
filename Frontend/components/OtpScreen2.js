import React,{useState} from 'react';
import { View, Alert, Text, TextInput, Button, StyleSheet, ImageBackground ,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Card, ListItem, Avatar } from 'react-native-paper';

const OTPScreen2 = () => {
  const navigation = useNavigation();
  const [otp, setOTP] = useState('');

  const verifyOTP = async () => {
    try {
      
      if (!otp.trim()) {
        Alert.alert('Please enter the OTP');
        return;
      }
  
      const url = 'http://192.168.33.104:5218/otpVerify';
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          eventID: "1001",
          addInfo: {
            otp: otp,
          }
        }),
      });
  
      const data = await response.json();
  
      if (data.rData.rCode === 0) {
        Alert.alert('Error', 'Failed to verify OTP');
      } else if (data.rData.rCode === 1) {
        Alert.alert('Error', 'Invalid OTP');
      } else {
        Alert.alert('Success', 'OTP verification successful');
        
        navigation.navigate('UpdatePassword');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      Alert.alert('Error', 'Failed to verify OTP');
    }
  };
  
  
  return (
    <ImageBackground
      source={{ uri: 'https://th.bing.com/th?q=iOS+14+Background&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247' }}
      style={[styles.backgroundImage, { alignItems: 'center', justifyContent: 'center' }]}
    >
      <Card style={styles.card}>
        <Card.Title title="OTP Verification" titleStyle={styles.title} />
        <Card.Content>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter 6-digit OTP"
              maxLength={6}
              keyboardType={'numeric'} value={otp} onChangeText={text => setOTP(text)}
            />
          </View>
          <Card.Content>
          <TouchableOpacity style={styles.buttonRow} onPress={() => navigation.navigate('Otp')} >
          <Text style={styles.buttonRow}>Resend OTP?</Text>
        </TouchableOpacity>
            
            
          </Card.Content>
        </Card.Content>
        <Card.Actions>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.centeredButton} onPress={verifyOTP} >
              <Text style={styles.buttonText}>Verify OTP</Text>
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

export default OTPScreen2;
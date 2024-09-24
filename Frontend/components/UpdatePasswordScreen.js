import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import {Card, ListItem, Avatar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
const UpdatePasswordScreen = () => {
  const navigation = useNavigation();
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [newpassword, setPassword] = useState('');
  const [newpasswordVisible, setPasswordVisible] = useState(false);
  const [phone, setPhone] = useState();
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLogin = async () => {
    try {
    
      if (!newpassword.trim() || !confirmPassword.trim()) {
        Alert.alert(
          'Please fill in both New Password and Confirm Password fields',
        );
        return;
      }

     
      if (newpassword !== confirmPassword) {
        Alert.alert('Passwords do not match');
        return;
      }
      const mobileNumber = await AsyncStorage.getItem('mobileNumber');
      console.log(mobileNumber,newpassword,confirmPassword, 'mobileNumber');
      const url = 'http://192.168.33.104:5218/login';
      const response = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          eventID: '1003',
          addInfo: {
            UserId:mobileNumber,
            newPassword: newpassword,
            confirmNewPassword: confirmPassword,
          },
        }),
      });

      if (response.ok) {
     
      const data = await response.json();
      console.log(data,'response')
      navigation.navigate('Login');
      }

      

      // if (data && data.rData && data.rData.rCode === 0) {
      //   Alert.alert('Error', 'Failed to update password');
      // } else {
      //   Alert.alert('Success', 'Password updated successfully');
      //   navigation.navigate('Login');
      // }
    } catch (error) {
      
      console.error('Error in updating:', error);
      Alert.alert('Error', 'Failed to update password');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        source={{
          uri: 'https://th.bing.com/th?q=iOS+14+Background&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247',
        }}
        style={[
          styles.backgroundImage,
          {alignItems: 'center', justifyContent: 'center'},
        ]}>
        <Card style={styles.card}>
          <Card.Title title="Update password" titleStyle={styles.title} />
          <Card.Content>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="New Password"
                secureTextEntry={!newpasswordVisible}
                value={newpassword}
                onChangeText={text => setPassword(text)}
              />
              <TouchableOpacity
                style={styles.eyeIconContainer}
                onPress={() => setPasswordVisible(!newpasswordVisible)}>
                <Icon
                  name={newpasswordVisible ? 'eye-slash' : 'eye'}
                  size={20}
                  color="gray"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder=" Confirm Password"
                secureTextEntry={!confirmPasswordVisible}
                value={confirmPassword}
                onChangeText={text => setConfirmPassword(text)}
              />
              <TouchableOpacity
                style={styles.eyeIconContainer}
                onPress={() =>
                  setConfirmPasswordVisible(!confirmPasswordVisible)
                }>
                <Icon
                  name={confirmPasswordVisible ? 'eye-slash' : 'eye'}
                  size={20}
                  color="gray"
                />
              </TouchableOpacity>
            </View>
          </Card.Content>
          <Card.Actions>
            <View style={styles.btnContainer}>
              <TouchableOpacity
                style={styles.centeredButton}
                onPress={handleLogin}>
                <Text style={styles.buttonText}>Update </Text>
              </TouchableOpacity>
            </View>
          </Card.Actions>
        </Card>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  card: {
    width: '80%',
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
    textAlign: 'center',
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
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
    width: '100%',
  },
  btnContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    paddingRight: 20,
  },
  centeredButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'brown',
    borderRadius: 5,
    width: '30%',
    height: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonRow: {
    color: '#000000',
    fontWeight: '900',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    marginBottom: 10,
    borderRadius: 5,
    textDecorationLine: 'underline',
    width: '100%',
  },
  eyeIconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default UpdatePasswordScreen;

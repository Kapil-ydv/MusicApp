
// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
// import { Card, ListItem, Avatar } from 'react-native-paper';
// import { useNavigation } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const LoginScreen = () => {
//   const navigation = useNavigation();
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   return (
//     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//       <ImageBackground
//         source={{ uri: 'https://th.bing.com/th?q=iOS+14+Background&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247' }}
//         style={[styles.backgroundImage, { alignItems: 'center', justifyContent: 'center' }]}
//       >
//         <Card style={styles.card}>
//           <Card.Title title="Login Screen" titleStyle={styles.title} />
//           <Card.Content>
//             <View style={styles.inputContainer}>
//               <TextInput style={styles.input} placeholder="Email" />
//             </View>
//             <View style={styles.inputContainer}>
//               <TextInput style={styles.input} placeholder="Password" secureTextEntry={!passwordVisible} />
//               <TouchableOpacity style={styles.eyeIconContainer} onPress={() => setPasswordVisible(!passwordVisible)}>
//                 <Icon name={passwordVisible ? 'eye-slash' : 'eye'} size={20} color="gray" />
//               </TouchableOpacity>
//             </View>
//             <Card.Content>
//                <TouchableOpacity style={styles.buttonRow} onPress={() => navigation.navigate('ForgotPassword')} >
//           <Text style={styles.buttonRow}>ForgotPassword?</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.buttonRow} onPress={() => navigation.navigate('Signup')} >
//           <Text style={styles.buttonRow}>Do not have an account? Signup</Text>
//         </TouchableOpacity>

//             </Card.Content>
//           </Card.Content>
//           <Card.Actions>
//           <View style={styles.btnContainer}>
//             <TouchableOpacity style={styles.centeredButton} onPress={() => navigation.navigate('Dashboard')}>
//               <Text style={styles.buttonText}>Login</Text>
//             </TouchableOpacity>
//             </View>
//           </Card.Actions>
//         </Card>
//       </ImageBackground>
//     </TouchableWithoutFeedback>
//   );
// };

// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     resizeMode: 'cover'
//   },
//   card: {
//     width: '80%',
//     borderRadius: 10,
//     padding: 20,
//     justifyContent:'center',
//     textAlign:'center',
//     marginBottom: 20,
//     backgroundColor: 'rgba(255, 255, 255, 0.7)',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//     marginHorizontal: 10,
//     // borderBottomColor: 'white',
//     // borderBottomWidth: 1,
//     // paddingBottom: 5,
//   },
//   inputContainer: {
//     borderColor: 'gray',
//     borderWidth: 3,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 10,
//     width: '100%',
//     position: 'relative',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   input: {
//     height: 40,
//     paddingHorizontal: 10,
//     width: '100%',
//   },
//   btnContainer:{
//     width:'100%',
//     // height:100,
//     alignItems:'center',
//     justifyContent:'center',
//     marginTop:20,
//     paddingRight:20,
//   },

//   buttonRow: {
//     color:'#000000',
//     fontWeight:'900',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'stretch',
//     marginBottom: 10,
//     borderRadius: 5,
//     textDecorationLine:"underline",
//     width: '100%',
//   },
//   centeredButton: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor:'brown',
//     borderRadius: 5,
//     width: '30%',
//     height: 40,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   eyeIconContainer: {
//     position: 'absolute',
//     top: 10,
//     right: 10,
//   },
// });
// export default LoginScreen;
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { Card, ListItem, Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  

  const handleLogin = async () => {
     await AsyncStorage.setItem('email',email);
    try {
      const url = 'http://192.168.33.104:5218/login'; 
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          eventID: '1001',
          addInfo: {
            UserId: email,
            password: password
          }
        }),
      });

      const data = await response.json();

      if (data.rData.rCode === 0) {
        
        Alert.alert('login successfully');
        navigation.navigate('Main');
      } else {
        
        alert(data.rData.rMessage);
      }
    } catch (error) {
      
      console.error('Error logging in:', error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        source={{ uri: 'https://th.bing.com/th?q=iOS+14+Background&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247' }}
        style={[styles.backgroundImage, { alignItems: 'center', justifyContent: 'center' }]}
      >
        <Card style={styles.card}>
          <Card.Title title="Login Screen" titleStyle={styles.title} />
          <Card.Content>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={text => setEmail(text)}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={!passwordVisible}
                value={password}
                onChangeText={text => setPassword(text)}/>
               <TouchableOpacity style={styles.eyeIconContainer} onPress={() => setPasswordVisible(!passwordVisible)}>
                              <Icon name={passwordVisible ? 'eye-slash' : 'eye'} size={20} color="gray" />
                             </TouchableOpacity>
            </View>
            <Card.Content>
               <TouchableOpacity style={styles.buttonRow} onPress={() => navigation.navigate('ForgotPassword')} >
           <Text style={styles.buttonRow}>ForgotPassword?</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.buttonRow} onPress={() => navigation.navigate('Signup')} >
           <Text style={styles.buttonRow}>Do not have an account? Signup</Text>
         </TouchableOpacity>

            </Card.Content>
          
          </Card.Content>
          <Card.Actions>
            <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.centeredButton} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
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
    resizeMode: 'cover'
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
      eyeIconContainer: {
             position: 'absolute',
            top: 10,
             right: 10,
           },

});

export default LoginScreen;


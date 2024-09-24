


// export default ProfileScreen;import React, { useState } from 'react';
// import { useNavigation } from '@react-navigation/native';
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   TextInput,
//   Image
// } from 'react-native';
// import { Avatar } from 'react-native-paper';
// import { Calendar } from 'react-native-calendars';

// const ProfileScreen = () => {
//   const navigation = useNavigation();
//   const [name, setName] = useState('Kapil Yadav');
//   const [email, setEmail] = useState('nahariak264@gmail.com');
//   const [password, setPassword] = useState('12345');
//   const [date, setBirth] = useState('');
//   const [country, setCountry] = useState('India');

//   const handleNameChange = (text) => {
//     setName(text);
//   };

//   const handleEmailChange = (text) => {
//     setEmail(text);
//   };

//   const handlePasswordChange = (text) => {
//     setPassword(text);
//   };
  
//   const handleDateSelect = (date) => {
//     setBirth(date.dateString);
//   };

//   const handleCountryChange = (text) => {
//     setCountry(text);
//   };

//   return (
//     <View style={styles.maincontainer}>
//       <View style={styles.container}>
//         <Text style={styles.title}>Profile</Text>
//        <Image source={require('./kp.png')} style={styles.avatar} />
//       </View>

//       <View style={styles.detailsContainer}>
//         <Text style={styles.label}>Name</Text>
//         <TextInput
//           style={styles.textInput}
//           value={name}
//           onChangeText={handleNameChange}
//         />
//       </View>

//       <View style={styles.detailsContainer}>
//         <Text style={styles.label}>Email</Text>
//         <TextInput
//           style={styles.textInput}
//           value={email}
//           onChangeText={handleEmailChange}
//         />
//       </View>

//       <View style={styles.detailsContainer}>
//         <Text style={styles.label}>Password</Text>
//         <TextInput
//           style={styles.textInput}
//           value={password}
//           onChangeText={handlePasswordChange}
//         />
//       </View>

//       <View style={styles.detailsContainer}>
//         <Text style={styles.label}>Date of Birth</Text>
//         <Calendar
//           style={styles.calendar}
//           value={date}
//           onDayPress={handleDateSelect}
//         />
//       </View>

//       <View style={styles.detailsContainer}>
//         <Text style={styles.label}>Country/Region</Text>
//         <TextInput
//           style={styles.textInput}
//           value={country}
//           onChangeText={handleCountryChange}
//         />
//       </View>

     
//       <TouchableOpacity
//         style={styles.editButton}
//         onPress={() => navigation.navigate('EditProfile')}>
//         <Text style={styles.editButtonText}>Edit Details</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   maincontainer: {
//     flex: 1,
//     backgroundColor: '#faebd7',
//     padding: 20,
//   },
//   container: {
//     alignItems: 'center',
//   },
//   title: {
//     fontWeight: 'bold',
//     fontSize: 24,
//     marginTop: 20,
//     color: 'black',
//   },
//   detailsContainer: {
//     marginTop: 10,
//   },
//   avatar: {
//     marginTop: 20,
//     width: 100,
//     height: 100,
//     borderRadius: 100,
//   },
//   label: {
//     fontWeight: 'bold',
//     fontSize: 18,
//     color: 'black',
//     marginBottom:10,
//   },
//   editButton: {
//     backgroundColor: 'brown',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 10,
//     marginTop: 10,
//     alignSelf: 'center',
//   },
//   editButtonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   textInput: {
//     height: 40,
//     width: '100%',
//     borderColor: 'gray',
//     borderWidth: 3,
//     paddingHorizontal: 10,
//     marginBottom: 10,
//     borderRadius: 20,
//   },
//   calendar: {
//     width: '100%', // Adjust the width as needed
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 10,
//     marginBottom: 5,
    
    
//   },
// });

// export default ProfileScreen;
// import { useNavigation } from '@react-navigation/native';
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   TextInput,
//   Image
// } from 'react-native';
// import { Avatar } from 'react-native-paper';
// import { Calendar } from 'react-native-calendars';

// const ProfileScreen = () => {
//   const navigation = useNavigation();
//   const [name, setName] = useState('Kapil Yadav');
//   const [email, setEmail] = useState('nahariak264@gmail.com');
//   const [password, setPassword] = useState('12345');
//   const [date, setDate] = useState('');
//   const [country, setCountry] = useState('India');

//   const handleNameChange = (text) => {
//     setName(text);
//   };

//   const handleEmailChange = (text) => {
//     setEmail(text);
//   };

//   const handlePasswordChange = (text) => {
//     setPassword(text);
//   };
  
//   const handleDateSelect = (date) => {
//     setDate(date.dateString);
//   };

//   const handleCountryChange = (text) => {
//     setCountry(text);
//   };

//   return (
//     <View style={styles.maincontainer}>
//       <View style={styles.container}>
//         <Text style={styles.title}>Profile</Text>
//        <Image source={require('./kp.png')} style={styles.avatar} />
//       </View>

//       <View style={styles.detailsContainer}>
//         <Text style={styles.label}>Name</Text>
//         <TextInput
//           style={styles.textInput}
//           value={name}
//           onChangeText={handleNameChange}
//         />
//       </View>

//       <View style={styles.detailsContainer}>
//         <Text style={styles.label}>Email</Text>
//         <TextInput
//           style={styles.textInput}
//           value={email}
//           onChangeText={handleEmailChange}
//         />
//       </View>

//       <View style={styles.detailsContainer}>
//         <Text style={styles.label}>Password</Text>
//         <TextInput
//           style={styles.textInput}
//           value={password}
//           onChangeText={handlePasswordChange}
//         />
//       </View>

//       <View style={styles.detailsContainer}>
//         <Text style={styles.label}>Date of Birth</Text>
//         <Calendar
//           style={styles.calendar}
//           onDayPress={handleDateSelect}
//         />
//       </View>

//       <View style={styles.detailsContainer}>
//         <Text style={styles.label}>Country/Region</Text>
//         <TextInput
//           style={styles.textInput}
//           value={country}
//           onChangeText={handleCountryChange}
//         />
//       </View>

//       <TouchableOpacity
//         style={styles.editButton}
//         onPress={() => navigation.navigate('EditProfile')}>
//         <Text style={styles.editButtonText}>Edit Details</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   maincontainer: {
//     flex: 1,
//     backgroundColor: '#faebd7',
//     padding: 20,
//   },
//   container: {
//     alignItems: 'center',
//   },
//   title: {
//     fontWeight: 'bold',
//     fontSize: 24,
//     marginTop: 20,
//     color: 'black',
//   },
//   detailsContainer: {
//     marginTop: 10,
//   },
//   avatar: {
//     marginTop: 20,
//     width: 100,
//     height: 100,
//     borderRadius: 100,
//   },
//   label: {
//     fontWeight: 'bold',
//     fontSize: 18,
//     color: 'black',
//     marginBottom:10,
//   },
//   editButton: {
//     backgroundColor: 'brown',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 10,
//     marginTop: 10,
//     alignSelf: 'center',
//   },
//   editButtonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   textInput: {
//     height: 40,
//     width: '100%',
//     borderColor: 'gray',
//     borderWidth: 3,
//     paddingHorizontal: 10,
//     marginBottom: 10,
//     borderRadius: 20,
//   },
//   calendar: {
//     width: '100%', 
//     height: 300, // Adjust the height as needed
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 10,
//     marginBottom: 5,
//   },
  
// });

// export default ProfileScreen;
// import { useNavigation } from '@react-navigation/native';
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   TextInput,
//   Image,
//   Platform,
// } from 'react-native';
// import { Avatar } from 'react-native-paper';
// import DateTimePicker from '@react-native-community/datetimepicker';

// const ProfileScreen = () => {
//   const navigation = useNavigation();
//   const [name, setName] = useState('Kapil Yadav');
//   const [email, setEmail] = useState('nahariak264@gmail.com');
//   const [password, setPassword] = useState('12345');
//   const [date, setDate] = useState(new Date());
//   const [showCalendar, setShowCalendar] = useState(false);
//   const [country, setCountry] = useState('India');

//   const handleNameChange = (text) => {
//     setName(text);
//   };

//   const handleEmailChange = (text) => {
//     setEmail(text);
//   };

//   const handlePasswordChange = (text) => {
//     setPassword(text);
//   };

//   const handleDateChange = (event, selectedDate) => {
//     const currentDate = selectedDate || date;
//     setShowCalendar(Platform.OS === 'ios');
//     setDate(currentDate);
//   };

//   const handleCountryChange = (text) => {
//     setCountry(text);
//   };

//   const showDatePicker = () => {
//     setShowCalendar(true);
//   };

//   const hideDatePicker = () => {
//     setShowCalendar(false);
//   };

//   return (
//     <View style={styles.maincontainer}>
//       <View style={styles.container}>
//         <Text style={styles.title}>Profile</Text>
//         <Image source={require('./kp.png')} style={styles.avatar} />
//       </View>

//       <View style={styles.detailsContainer}>
//         <Text style={styles.label}>Name</Text>
//         <TextInput
//           style={styles.textInput}
//           value={name}
//           onChangeText={handleNameChange}
//         />
//       </View>

//       <View style={styles.detailsContainer}>
//         <Text style={styles.label}>Email</Text>
//         <TextInput
//           style={styles.textInput}
//           value={email}
//           onChangeText={handleEmailChange}
//         />
//       </View>

//       <View style={styles.detailsContainer}>
//         <Text style={styles.label}>Password</Text>
//         <TextInput
//           style={styles.textInput}
//           value={password}
//           onChangeText={handlePasswordChange}
//         />
//       </View>

//       <View style={styles.detailsContainer}>
//         <Text style={styles.label}>Date of Birth</Text>
//         <TouchableOpacity onPress={showDatePicker} style={styles.datePickerButton}>
//           <Text style={styles.dateInput}>{date.toDateString()}</Text>
//         </TouchableOpacity>
//         {showCalendar && (
//           <DateTimePicker
//             value={date}
//             mode="date"
//             is24Hour={true}
//             display="default"
//             onChange={handleDateChange}
//           />
//         )}
//       </View>

//       <View style={styles.detailsContainer}>
//         <Text style={styles.label}>Country/Region</Text>
//         <TextInput
//           style={styles.textInput}
//           value={country}
//           onChangeText={handleCountryChange}
//         />
//       </View>

//       <TouchableOpacity
//         style={styles.editButton}
//         onPress={() => navigation.navigate('EditProfile')}>
//         <Text style={styles.editButtonText}>Edit Details</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   maincontainer: {
//     flex: 1,
//     backgroundColor: '#faebd7',
//     padding: 20,
//   },
//   container: {
//     alignItems: 'center',
//   },
//   title: {
//     fontWeight: 'bold',
//     fontSize: 24,
//     marginTop: 20,
//     color: 'black',
//   },
//   detailsContainer: {
//     marginTop: 10,
//   },
//   avatar: {
//     marginTop: 20,
//     width: 100,
//     height: 100,
//     borderRadius: 100,
//   },
//   label: {
//     fontWeight: 'bold',
//     fontSize: 18,
//     color: 'black',
//     marginBottom: 10,
//   },
//   editButton: {
//     backgroundColor: 'brown',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 10,
//     marginTop: 10,
//     alignSelf: 'center',
//   },
//   editButtonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   textInput: {
//     height: 40,
//     width: '100%',
//     borderColor: 'gray',
//     borderWidth: 3,
//     paddingHorizontal: 10,
//     marginBottom: 10,
//     borderRadius: 20,
//   },
//   datePickerButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   dateInput: {
//     flex: 1,
//     height: 40,
//     width: '100%',
//     borderColor: 'gray',
//     borderWidth: 3,
//     paddingHorizontal: 10,
//     borderRadius: 20,
//     marginRight: 10,
//   },
// });

// export default ProfileScreen;
// import { useNavigation } from '@react-navigation/native';
// import React, { useState } from 'react';
// import { launchImageLibrary } from 'react-native-image-picker';
// import { encode as base64Encode } from 'base-64';

// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   TextInput,
//   Image,
//   Platform,
// } from 'react-native';
// import { Avatar } from 'react-native-paper';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const ProfileScreen = () => {
//   const navigation = useNavigation();
//   const [name, setName] = useState('Kapil Yadav');
//   const [email, setEmail] = useState('nahariak264@gmail.com');
//   const [phone, setPhone] = useState('+917048978585');
//   const [date, setDate] = useState(new Date());
//   const [showCalendar, setShowCalendar] = useState(false);
//   const [country, setCountry] = useState('India');
//   const [profileImage, setProfileImage] = useState(null); 

//   const handleEditProfile = async () => {
//     const Url = 'http://192.168.33.104:5218/registration'; 
//     const requestHeaders = {
//       'Content-Type': 'application/json',
//     };
  
//     const requestBody = {
//       addInfo: {
//         name: name,
//         phone: phone,
//         email: email,
//         image: profileImage, 
//         dob: date.toDateString(),
//         country: country,
//       },
//       eventID: '1008', 
//     };
  
//     try {
//       const response = await fetch(Url, {
//         method: 'POST',
//         headers: requestHeaders,
//         body: JSON.stringify(requestBody),
//       });
  
//       const responseData = await response.json();
  
//       if (responseData.rCode === 0) {
//         alert('Profile updated successfully!');
//       } else {
//         alert(`Error: ${responseData.rMessage}`);
//         console.log(responseData)
//       }
//     } catch (error) {
//       console.error(error);
//       alert('Error updating profile. Please try again later.');
//     }
//   };
  
//   const handleNameChange = (text) => {
//     setName(text);
//   };

//   const handleEmailChange = (text) => {
//     setEmail(text);
//   };

//   const handleMobilenoChange = (text) => {
//     setPhone(text);
//   };

//   const handleDateChange = (event, selectedDate) => {
//     const currentDate = selectedDate || date;
//     setShowCalendar(Platform.OS === 'ios');
//     setDate(currentDate);
//   };

//   const handleCountryChange = (text) => {
//     setCountry(text);
//   };

//   const showDatePicker = () => {
//     setShowCalendar(true);
//   };

//   const hideDatePicker = () => {
//     setShowCalendar(false);
//   };
//   const handleEditProfileImage = () => {
//     const options = {
//       mediaType: 'photo',
//       includeBase64: true,
//       maxHeight: 200,
//       maxWidth: 200,
//     };
  
//     launchImageLibrary(options, (response) => {
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else {
//         const base64Image = response.assets[0].base64; 
//         setProfileImage(base64Image); 
//       }
//     });
//   };
  

//   return (
    
//     <View style={styles.maincontainer}>
//     <View style={styles.container}>
//       <Text style={styles.title}>Profile</Text>
//       <TouchableOpacity onPress={handleEditProfileImage}>
//         {profileImage ? (
//           <Image source={{ uri: `data:image/jpeg;base64,${profileImage}` }} style={styles.avatar} />
//         ) : (
//           <Image source={require('./kp.png')} style={styles.avatar} />
//         )}
//         <Icon name="edit" size={24} color="black" style={styles.editIcon} />
//       </TouchableOpacity>
//     </View>

//       <View style={styles.detailsContainer}>
//         <Text style={styles.label}>Name</Text>
//         <TextInput
//           style={styles.textInput}
//           value={name}
//           onChangeText={handleNameChange}
//         />
//       </View>

//       <View style={styles.detailsContainer}>
//         <Text style={styles.label}>Email</Text>
//         <TextInput
//           style={styles.textInput}
//           value={email}
//           onChangeText={handleEmailChange}
//         />
//       </View>

//       <View style={styles.detailsContainer}>
//         <Text style={styles.label}>Mobile Number</Text>
//         <TextInput
//           style={styles.textInput}
//           value={phone}
//           onChangeText={handleMobilenoChange}
//         />
//       </View>

//      <View style={styles.detailsContainer}>
//         <Text style={styles.label}>Date of Birth</Text>
//         <View style={styles.datePickerContainer}>
//           <TextInput
//             style={styles.dateInput}
//             value={date.toDateString()}
//             editable={false}
//           />
//           <TouchableOpacity onPress={showDatePicker} style={styles.iconButton}>
//             <Icon name="calendar" size={24} color="black" />
//           </TouchableOpacity>
//          </View>


//         {showCalendar && (
//           <DateTimePicker
//             value={date}
//             mode="date"
//             is24Hour={true}
//             display="default"
//             onChange={handleDateChange}
//           />
//         )}
//       </View> 
   
//       <View style={styles.details}>
//         <Text style={styles.label}>Country/Region</Text>
//         <TextInput
//           style={styles.textInput}
//           value={country}
//           onChangeText={handleCountryChange}
//         />
//       </View>

//       <TouchableOpacity
//   style={styles.editButton}
//   onPress={handleEditProfile}
// >
//   <Text style={styles.editButtonText}>Update Details</Text>
// </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   maincontainer: {
//     flex: 1,
//     backgroundColor: '#faebd7',
//     padding: 20,
//   },
//   container: {
//     alignItems: 'center',
//   },
//   title: {
//     fontWeight: 'bold',
//     fontSize: 24,
//     marginTop: 20,
//     color: 'black',
//   },
//   detailsContainer: {
//     marginTop: 2,
//     marginBottom: 1,
    

//   },
//   details: {
//     marginTop: 60,

//   },
//   avatar: {
//     marginTop: 20,
//     width: 100,
//     height: 100,
//     borderRadius: 100,
//   },
//   label: {
//     fontWeight: 'bold',
//     fontSize: 18,
//     color: 'black',
//     marginBottom: 20,
//     width:'100%'
//   },
//   editButton: {
//     backgroundColor: 'brown',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 10,
//     marginTop: 10,
//     alignSelf: 'center',
//   },
//   editButtonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   textInput: {
//     height: 40,
//     width: '100%',
//     borderColor: 'gray',
//     borderWidth: 3,
//     paddingHorizontal: 10,
//     marginBottom: 10,
//     borderRadius: 20,
//   },
//   datePickerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     width:'100%',
//     justifyContent:'space-between',
//     position:'absolute',
//      marginTop: 40,
//     marginBottom: 40,

//   },
//   dateInput: {
//     // flex: 1,
//     width: '100%',
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 3,
//     paddingHorizontal: 10,
//     borderRadius: 20,
//     marginRight: 10,
//     color:'gray'
//   },
//   iconButton: {
//     padding: 10,
//     position:'relative',
//     right:80,
  
    
//   },
//   editIcon: {
//     position: 'absolute',
//     bottom: 5,
//     right: 5,
//     backgroundColor: 'white',
//     borderRadius: 15,
//     padding: 5,
//   },
  
// });

// export default ProfileScreen;

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  Platform,
  Alert,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CalendarPicker from "react-native-calendar-picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [country, setCountry] = useState('India');
  const [profileImage, setProfileImage] = useState("");



  const [selectedStartDate, setSelectedStartDate] = useState(null);




  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    // console.warn("A date has been picked: ", date);
    hideDatePicker();
    const simpleDate = moment(date).format('MMMM Do YYYY');
    setDate(simpleDate)
  };


  const onDateChange = (date) => {
    setSelectedStartDate(date);
  };

  const startDate = selectedStartDate ? selectedStartDate.toString() : "";
  useEffect(() => {
    
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    const mail = await AsyncStorage.getItem('email');
    try {
      const response = await fetch('http://192.168.33.104:5218/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({  eventID: "1007",
        addInfo: {
          email:mail
        }}), 
      });
      
      const responseData = await response.json();
      console.log(responseData ,'update profile')
      if (responseData.rData.rCode == 0) {
        setName(responseData.rData.name );
        setEmail(responseData.rData.email);
        setPhone(responseData.rData.phone);
        setCountry(responseData.rData.country);
    
        
          setProfileImage(responseData.rData.image);
        
     
    
          setDate(responseData.rData.dob);
        
      } else {
        Alert.alert('Error', responseData.rMessage || 'Failed to fetch user details');
      }
    } catch (error) {
    
      console.error(error);
      Alert.alert('Error', 'Failed to fetch user details. Please try again later.');
    }
  };

  const handleEditProfile = async () => {
    const newDate = date || new Date();
    const Url = 'http://192.168.33.104:5218/registration';
    const requestHeaders = {
      'Content-Type': 'application/json',
    };

    try {
      const response = await fetch(Url, {
        method: 'POST',
        headers: requestHeaders,
        body: JSON.stringify({
          addInfo: {
            name:name,
            phone:phone,
            email:email,
            image: profileImage,
            dob: newDate,
            country:country,
          },
          eventID: '1008', 
        }),
      });

      const responseData = await response.json();

      if (responseData.rData.rCode == 0) {
        Alert.alert('Success', 'Profile updated successfully!');
        await AsyncStorage.setItem('email',email);
        getUserDetails()
      } else {
        Alert.alert('Error', responseData.rMessage || 'Failed to update profile');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to update profile. Please try again later.');
    }
  };

  const handleEditProfileImage = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: true,
      maxHeight: 200,
      maxWidth: 200,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const base64Image = response.assets[0].base64;
        setProfileImage(base64Image);
      }
    });
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowCalendar(Platform.OS === 'ios');
    setDate(currentDate);
  };

  

  return (
    <View style={styles.maincontainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Profile</Text>
        <TouchableOpacity onPress={handleEditProfileImage}>
          
            <Image
              source={{ uri: `data:image/jpeg;base64,${profileImage}` }}
              style={styles.avatar}
            />
         
          <Icon name="edit" size={24} color="black" style={styles.editIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.textInput}
          value={name}
          onChangeText={setName}
        />
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.textInput}
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Mobile Number</Text>
        <TextInput
          style={styles.textInput}
          value={phone}
          onChangeText={setPhone}
        />
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Date of Birth</Text>
        <TouchableOpacity onPress={showDatePicker}>
         <TextInput
            style={styles.dateInput}
            value={date ? date.toString() : ""}
            editable={false}
          /> 
          
        </TouchableOpacity>
        <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

        
      </View>

      <View style={styles.details}>
        <Text style={styles.label}>Country/Region</Text>
        <TextInput
          style={styles.textInput}
          value={country}
          onChangeText={setCountry}
        />
      </View>

      <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
        <Text style={styles.editButtonText}>Update Details</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#faebd7',
    padding: 20,
  },
  container: {
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 20,
    color: 'black',
  },
  detailsContainer: {
    marginTop: 2,
    marginBottom: 1,
  },
  details: {
    marginTop: 30,
  },
  avatar: {
    marginTop: 20,
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
    marginBottom: 20,
    width: '100%',
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
  textInput: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 3,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 20,
  },
  datePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    position: 'absolute',
    marginTop: 40,
    marginBottom: 40,
  },
  dateInput: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 3,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginRight: 10,
    color: 'gray',
  },
  iconButton: {
    padding: 10,
    position: 'relative',
    right: 80,
  },
  editIcon: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 5,
  },
});

export default ProfileScreen;






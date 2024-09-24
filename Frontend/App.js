// // import { View,StatusBar, Modal,ActivityIndicator,Text,SectionList, TouchableOpacity,Button,StyleSheet,ScrollView, TextInput,FlatList, TouchableHighlight} from 'react-native'
// // import React,{useState,useEffect} from 'react';
// // import {WebView} from 'react-native-webview';
// // import {NavigationContainer} from '@react-navigation/native';
// // import {createNativeStackNavigator} from '@react-navigation/native-stack'
// // import Companydata from './components/Companydata'
// // import style from './style';
// // import Exstyles from './style';


// // const App = () => {
// //  useEffect(()=>
// //  console.warn("hello") ,[])
// //  const[count,setCount]=useState(0);
// //   const[name,setName]=useState("");
// //   const[email,setEmail]=useState("");
// //   const[password,setPassword]=useState("");
// //   const[display,setDisplay]=useState(false);
// //   const resetForm=()=>{
// //     setDisplay(false);
// //     setEmail("");
// //     setName("");
// //     setPassword("")};
// //     const users=[
// //       { name:"peter",
// //       id:1,
// //       data:['php','node','.net']
// //     }, 
// //     { name:"kap",
// //     id:3,
// //     data:['python','node','.net']
// //   }, 
// //   { name:"kholi",
// //   id:4,
// //   data:['ruby','node','.net']
// // },
// // { name:"rohit",
// // id:5,
// // data:['c#','node','.net']
// // }
// // ]
// //    return (
// //     <View>
// //       <Text style ={{fontSize:10}}> simple form  in react native{count}</Text>
// //       <Button title='update counter' onPress={()=>setCount(count+1)}/>
      
// //       <SectionList
// //       sections={users}
// //       renderItem={({item})=>
// //       <Text style={{marginLeft:10,fontSize:20}}>{item}</Text>}
// //       renderSectionHeader={({section:{name}})=><Text style={{color:"red"}}>{name}</Text>}
      
      
// //       />
// //       {/* <ScrollView>
// //       {
// //         users.map((item)=><Text style={styles.textInput}>{item.name}</Text>)
// //       }
// //       </ScrollView> */}
// //       <TextInput
// //       style={styles.textInput}
// //       placeholder='enter your name'
      
// //       onChangeText={(text)=>setName(text)}
// //       value={name}
// //       />
// //        <TextInput
// //       style={styles.textInput}
// //       placeholder='enter your password'
// //       secureTextEntry={true}
// //       onChangeText={(text)=>setPassword(text)}
// //       value={password}
// //       />
// //        <TextInput
// //       style={styles.textInput}
// //       placeholder='enter your email'
// //       onChangeText={(text)=>setEmail(text)}
// //       value={email}
// //       />
// //       <View style={{marginBottom:10}}><Button title='get details ' color={"green"} onPress={()=>setDisplay(true)} />
// //       </View>
// //       <Button title='clear details ' onPress={resetForm}/>
// //       <View>
// //         {
// //           display?
// //           <View>
// //             <Text style={{fontSize:20}}>{name}</Text>
// //             <Text style={{fontSize:20}}>{password}</Text>
// //             <Text style={{fontSize:20}}>{email}</Text>
// //             </View>
// //             :null

// //         }
        
// //       </View>
// //       <View style={{flex:1,flexDirection:'row',flexWrap:'wrap'}}>
// //       {users.map((item)=><Text style={styles.textInput}>{item.name}</Text>)}
// //         </View>
     
// //     </View>
// //   );
// // };
// // const styles =StyleSheet.create({
// //   textInput:{
// //     fontSize:20,
// //     backgroundColor:"orange",
// //     color:"#fff",
// //     height:50,
// //     marginBottom:10,
// //     textAlignVertical:"center",
// //     textAlign:'center',
// //     borderColor:'skyblue',
// //     borderWidth:3,
// //     borderRadius:20
// //   },
// //   item:{
// //     fontSize:20,
// //     backgroundColor:"red",
// //     color:"#fff",
    
// //     textAlignVertical:"center",
// //     textAlign:'center',
    

// //   }
// // })
// // const App = () => {
// //   return(
// //     <View style={styles.main}>
// //       {/* <View style={{backgroundColor:'green',flex:1}}>
// //         <Text style={{fontSize:30}}>Responsive UI with flex</Text>
// //       </View>
// //       <Button title='Button' />
// //       <Button title='Button' /> */}
// //       <View style={styles.box1}>
// //         <View style={styles.innerbox1}></View>
// //         <View style={styles.innerbox2}></View>
// //         <View style={styles.innerbox3}></View>
// //       </View>
// //       <View style={styles.box2}></View>
// //       <View style={styles.box3}></View>

// //     </View>
// //   )


// // }
// // const  styles=StyleSheet.create({
// //   main:{
// //     flex:1,
    
// //   },
// //   box1:{backgroundColor:'red',flex:2,flexDirection:'row'},
// //   box2:{backgroundColor:'green',flex:1},
// //   box3:{backgroundColor:'blue',flex:1},
// //   innerbox1:{backgroundColor:'blue',flex:1,margin:5},
// //   innerbox2:{backgroundColor:'skyblue',flex:1,margin:5},
// //   innerbox3:{backgroundColor:'orange',flex:1,margin:5}
// // })
// // const App=() =>{
// //   return(
// //     <View style={styles.main}>
// //       <TouchableHighlight>
// //         <Text style={[styles.button, styles.primary]}>Primary </Text>
// //       </TouchableHighlight>
// //       <TouchableHighlight>
// //         <Text style={[styles.button, styles.success]}>Success</Text>
// //       </TouchableHighlight>
// //       <TouchableHighlight>
// //         <Text style={[styles.button, styles.warning]}>Warning</Text>
// //       </TouchableHighlight>
// //       <TouchableHighlight>
// //         <Text style={[styles.button, styles.error]}>Error</Text>
// //       </TouchableHighlight>
// //       <TouchableHighlight>
// //         <Text style={[styles.button, styles.button]}>Button</Text>
// //       </TouchableHighlight>
  
// //     </View>

// //   )
// // }
// // const styles=StyleSheet.create({
// //   main:{
// //     flex:1
// //   },
// //   button:{
// //     backgroundColor:"#bbb",
// //     fontSize:24,
// //     margin:10,
// //     padding:10,
// //     color:'#fff',
// //     textAlign:'center',
// //     borderRadius:10,
// //     shadowColor:'black',
// //     shadowOpacity:1,
// //     elevation:10
// //    },
// //    primary:{backgroundColor:'blue'},
// //    success:{backgroundColor:'green'},
// //    error:{backgroundColor:'red'},
// //    warning:{backgroundColor:'lime'},
// //   })
// // const App=() =>{
// //   const [selectedRadio,setSelectedRadio]=useState(1)
// //     return(
// //       <View style={styles.main}>
// //         <TouchableOpacity>
// //           <View style={styles.wrapper}>
// //           <View style={styles.radio}>
// //           {selectedRadio==1?  <View style={styles.radiobg}></View>:null}

// //           </View>
// //           <Text  style={styles.radiotext}>Radio 1</Text>
// //           </View></TouchableOpacity>
// //           <TouchableOpacity>
// //           <View style={styles.wrapper}>
// //           <View style={styles.radio}>
// //           {selectedRadio==2?  <View style={styles.radiobg}></View>:null}
// //           </View>
// //           <Text  style={styles.radiotext}>Radio 2</Text>
// //           </View></TouchableOpacity>
// //           </View>)}
// // const styles=StyleSheet.create({
// //   main:{
// //     flex:1,
// //     alignItems:'center',
// //     justifyContent:'center'
// //   },
// //   radiotext:{
// //     fontSize:20,color:'black'
// //   },
// //   radio:{
// //     width:40,
// //     height:40,
// //     borderColor:'black',
// //     borderRadius:20,
// //     borderWidth:3,
// //     margin:10
// //   },
// //   wrapper:{
// //     flexDirection:'row',alignItems:'center'
// //   },radiobg:{
// //     backgroundColor:'black',
// //     height:28,
// //     width:28,
// //     margin:3,
// //     borderRadius:20
// //   }
// // })
// // const App=()=>{
// //   const [show,setShow]=useState(false);
// //   const displayloader=()=>{
// //     setShow(true);
// //     setTimeout(()=>{
// //       setShow(false)
// //     },3000);
// //   }
// //   return (
// //     <View style={styles.main}>
// //       <ActivityIndicator size={100}  color="red" animating={show}/>
// //       <Button title='activity indicater'  onPress={displayloader}/>
// //     </View>
// //   )

  
// // }
// // const styles=StyleSheet.create({
// //     main:{
// //       flex:1,
// //       alignItems:'center',
// //       justifyContent:'center'
// //     },
// //   })
// // const App=()=>{
// //   const [showModal,setshowModal]=useState(false)
// //   return(
    
// //     <View style={styles.main}>
// //       <StatusBar  
// //       backgroundColor="orange"
// //       barStyle="default"
// //       hidden ={false}/>
// //       <Modal
// //       transparent={true}
// //       visible={showModal}
// //       animationType="slide">
        
// //         <View style={styles.centerView}>
// //           <View style={styles.modalView}>
// //             <Text style={styles.modalText}>Hello Kp</Text>
// //             <Button title='close Modal'  onPress={()=>setshowModal(false)} />

// //           </View>

// //         </View>

// //       </Modal>
// //       <View style={styles.buttonView}>
// //       <Button title='open modal' onPress={()=>setshowModal(true)}  />
// //       </View>

// //     </View>
// //   )}
// //   const styles=StyleSheet.create({
// //         main:{
// //           flex:1,
         
// //         },
// //         buttonView:{
// //           flex:1,
// //           justifyContent:"flex-end"
// //         },
// //         centerView:{
// //           flex:1,
// //           justifyContent:"center",
// //           alignItems:"center"


// //         },
// //         modalText:{
// //           fontSize:20,
// //           marginBottom:20

// //         },
// //         modalView:{
// //           backgroundColor:'white',
// //           padding:35,
// //           borderRadius:20,
// //           shadowColor:'#000',
// //           elevation:5


// //         }


// //       })

// // import * as React from 'react';
// // import { Button, View } from 'react-native';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createStackNavigator } from '@react-navigation/stack';

// // function HomeScreen({ navigation }) {
// //   return (
// //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// //       <Button
// //         title="Go to Profile"
// //         onPress={() => navigation.navigate('Profile')}
// //       />
// //     </View>
// //   );
// // }

// // function ProfileScreen({ navigation }) {
// //   return (
// //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// //       <Button
// //         title="Go to Notifications"
// //         onPress={() => navigation.navigate('Notifications')}
// //       />
// //       <Button title="Go back" onPress={() => navigation.goBack()} />
// //     </View>
// //   );
// // }

// // function NotificationsScreen({ navigation }) {
// //   return (
// //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// //       <Button
// //         title="Go to Settings"
// //         onPress={() => navigation.navigate('Settings')}
// //       />
// //       <Button title="Go back" onPress={() => navigation.goBack()} />
// //     </View>
// //   );
// // }

// // function SettingsScreen({ navigation }) {
// //   return (
// //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// //       <Button title="Go back" onPress={() => navigation.goBack()} />
// //     </View>
// //   );
// // }

// // const Stack = createStackNavigator();

// // function MyStack() {
// //   return (
// //     <Stack.Navigator>
// //       <Stack.Screen name="Home" component={HomeScreen} />
// //       <Stack.Screen name="Notifications" component={NotificationsScreen} />
// //       <Stack.Screen name="Profile" component={ProfileScreen} />
// //       <Stack.Screen name="Settings" component={SettingsScreen} />
// //     </Stack.Navigator>
// //   );
// // }

// // export default function App() {
// //   return (
// //     <NavigationContainer>
// //       <MyStack />
// //     </NavigationContainer>
// //   );
// // }
// // import * as React from 'react';
// // import { Button,Text, View } from 'react-native';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createStackNavigator } from '@react-navigation/stack';
// // import { Home } from './components/HomeScreen';
// // import { Login } from './components/LoginScreen';

// // const Stack = createStackNavigator();
// // const App=() =>{
// //  const headerAction=()=> {
// //   console.warn("Btn pressed");
// //  }
// //   return (
// //     <NavigationContainer>
// //       <Stack.Navigator
// //        screenOptions={{
        
// //         headerStyle:{
// //           backgroundColor:'brown'
// //         },
// //         headerTintColor:'skyblue',
// //         headerTitleStyle:{
// //           fontSize:30
// //         }
// //       }

// //       }>
// //         <Stack.Screen name='Login' component={Login} 
// //         options={{
// //           headerTitle:()=><Button onPress={headerAction} title="Left" />,
// //           headerRight:()=><Header />,
// //           title:"User Login",
// //           headerStyle:{
// //             backgroundColor:'orange'
// //           },
// //           headerTintColor:'red',
// //           headerTitleStyle:{
// //             fontSize:30
// //           }
// //         }
  
// //         }/>
// //         <Stack.Screen name='Home' component={Home}  />
        
// //       </Stack.Navigator>
// //     </NavigationContainer>
// //   )
// // };
// // const Header=()=>{
// //   return <Button title='Header btn' />

// // }


// // export default App;
import React from 'react';
import { View } from 'react-native';
import AppNavigator from './AppNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from './components/SignupScreen';
import LoginScreen from './components/LoginScreen';
import ForgotPasswordScreen from './components/ForgotPasswordScreen';
import HomeScreen from './components/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
    <AppNavigator />
  </NavigationContainer>
  )
};

export default App;


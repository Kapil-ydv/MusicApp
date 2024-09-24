// import React from 'react';
// import {createStackNavigator} from '@react-navigation/stack';
// import SignupScreen from './components/SignupScreen';
// import LoginScreen from './components/LoginScreen';
// import ForgotPasswordScreen from './components/ForgotPasswordScreen';
// import HomeScreen from './components/HomeScreen';
// import DashboardScreen  from './components/DashboardScreen';
// import OTPScreen from './components/OtpScreen';
// import SettingsScreen from './components/SettingsScreen';
// import MainScreen from './components/MainScreen';
// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();
// const AppNavigator = () => {
//   return (
//     <Stack.Navigator  screenOptions={{headerShown:false}}>
//       <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
//       <Stack.Screen name="Signup" component={SignupScreen} />
//       <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
//       <Stack.Screen name="Dashboard" component={DashboardScreen} />
//       <Stack.Screen name="Otp" component={OTPScreen} />
//       <Stack.Screen name="Settings" component={SettingsScreen} />
//       <Stack.Screen name="Main" component={MainScreen} />
//     </Stack.Navigator>
//   );
// };

// export default AppNavigator;
// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import SignupScreen from './components/SignupScreen';
// import LoginScreen from './components/LoginScreen';
// import ForgotPasswordScreen from './components/ForgotPasswordScreen';
// import DashboardScreen from './components/DashboardScreen';
// import OTPScreen from './components/OtpScreen';
// import SettingsScreen from './components/SettingsScreen';
// import MainScreen from './components/MainScreen';
// import HomeScreen from './components/HomeScreen';
// import SearchScreen from './components/SearchScreen';
// import ProfileScreen from './components/ProfileScreen';
// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// const AuthStack = () => (
//   <Stack.Navigator screenOptions={{ headerShown: false }}>
//     <Stack.Screen name="Home" component={HomeScreen} />
//     <Stack.Screen name="Login" component={LoginScreen} />
//     <Stack.Screen name="Signup" component={SignupScreen} />
//     <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
//     <Stack.Screen name="Otp" component={OTPScreen} />
//   </Stack.Navigator>
// );

// const MainStack = () => (
//   <Tab.Navigator>
//     <Tab.Screen name="Home" component={DashboardScreen} />
//     <Tab.Screen name="Search" component={SearchScreen} />
//     <Tab.Screen name="Profile" component={ProfileScreen} />
//     <Tab.Screen name="Settings" component={SettingsScreen} />
//     {/* <Tab.Screen name="Main" component={MainScreen} /> */}
    
//   </Tab.Navigator>
// );

// const AppNavigator = () => {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="Auth" component={AuthStack} />
//       <Stack.Screen name="Main" component={MainStack} />
//     </Stack.Navigator>
//   );
// };

// export default AppNavigator;
// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { TouchableOpacity, Text, View } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome'; // Import Icon component
// import SignupScreen from './components/SignupScreen';
// import LoginScreen from './components/LoginScreen';
// import ForgotPasswordScreen from './components/ForgotPasswordScreen';
// import DashboardScreen from './components/DashboardScreen';
// import OTPScreen from './components/OtpScreen';
// import SettingsScreen from './components/SettingsScreen';
// import MainScreen from './components/MainScreen';
// import HomeScreen from './components/HomeScreen';
// import SearchScreen from './components/SearchScreen';
// import ProfileScreen from './components/ProfileScreen';

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// const AuthStack = () => (
//   <Stack.Navigator screenOptions={{ headerShown: false }}>
//     <Stack.Screen name="Home" component={HomeScreen} />
//     <Stack.Screen name="Login" component={LoginScreen} />
//     <Stack.Screen name="Signup" component={SignupScreen} />
//     <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
//     <Stack.Screen name="Otp" component={OTPScreen} />
//   </Stack.Navigator>
// );

// const MainStack = () => (
//   <Tab.Navigator screenOptions={{headerShown:false}}>
//     <Tab.Screen 
//       name="Home" 
//       component={DashboardScreen} 
//       options={{
//         tabBarIcon: ({ color, size }) => (
//           <Icon name="home" size={size} color={color} />
//         ),
//       }}
//     />
//     <Tab.Screen 
//       name="Search" 
//       component={SearchScreen} 
//       options={{
//         tabBarIcon: ({ color, size }) => (
//           <Icon name="search" size={size} color={color} />
//         ),
//       }}
//     />
//     <Tab.Screen 
//       name="Profile" 
//       component={ProfileScreen} 
//       options={{
//         tabBarIcon: ({ color, size }) => (
//           <Icon name="user" size={size} color={color} />
//         ),
//       }}
//     />
//     <Tab.Screen 
//       name="Settings" 
//       component={SettingsScreen} 
//       options={{
//         tabBarIcon: ({ color, size }) => (
//           <Icon name="cog" size={size} color={color} />
//         ),
//       }}
//     />
//   </Tab.Navigator>
// );

// const AppNavigator = () => {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="Auth" component={AuthStack} />
//       <Stack.Screen name="Main" component={MainStack} />
//     </Stack.Navigator>
//   );
// };

// export default AppNavigator;
// import React, { useState, useEffect } from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { TouchableOpacity, Text, View, ActivityIndicator, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import SignupScreen from './components/SignupScreen';
// import LoginScreen from './components/LoginScreen';
// import ForgotPasswordScreen from './components/ForgotPasswordScreen';
// import DashboardScreen from './components/DashboardScreen';
// import OTPScreen from './components/OtpScreen';
// import SettingsScreen from './components/SettingsScreen';
// import MainScreen from './components/MainScreen';
// import HomeScreen from './components/HomeScreen';
// import SearchScreen from './components/SearchScreen';
// import ProfileScreen from './components/ProfileScreen';
// import { setupPlayer, addTrack } from "../musicPlayerServices";
// import MusicPlayer from "./screens/MusicPlayer";

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// function App(): JSX.Element {
//   const [isPlayerReady, setIsPlayerReady] = useState(false);

//   async function setup() {
//     let isSetup = await setupPlayer();

//     if (isSetup) {
//       await addTrack();
//     }

//     setIsPlayerReady(isSetup);
//   }

//   useEffect(() => {
//     setup();
//   }, []);

//   if (!isPlayerReady) {
//     return (
//       <SafeAreaView style={styles.loadingContainer}>
//         <ActivityIndicator />
//       </SafeAreaView>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="light-content" />
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="Auth" component={AuthStack} />
//         <Stack.Screen name="Main" component={MainStack} />
//       </Stack.Navigator>
//       <MusicPlayer />
//     </View>
//   );
// }

// const AuthStack = () => (
//   <Stack.Navigator screenOptions={{ headerShown: false }}>
//     <Stack.Screen name="Home" component={HomeScreen} />
//     <Stack.Screen name="Login" component={LoginScreen} />
//     <Stack.Screen name="Signup" component={SignupScreen} />
//     <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
//     <Stack.Screen name="Otp" component={OTPScreen} />
//   </Stack.Navigator>
// );

// const MainStack = () => (
//   <Tab.Navigator screenOptions={{ headerShown: false }}>
//     <Tab.Screen
//       name="Home"
//       component={DashboardScreen}
//       options={{
//         tabBarIcon: ({ color, size }) => (
//           <Icon name="home" size={size} color={color} />
//         ),
//       }}
//     />
//     <Tab.Screen
//       name="Search"
//       component={SearchScreen}
//       options={{
//         tabBarIcon: ({ color, size }) => (
//           <Icon name="search" size={size} color={color} />
//         ),
//       }}
//     />
//     <Tab.Screen
//       name="Profile"
//       component={ProfileScreen}
//       options={{
//         tabBarIcon: ({ color, size }) => (
//           <Icon name="user" size={size} color={color} />
//         ),
//       }}
//     />
//     <Tab.Screen
//       name="Settings"
//       component={SettingsScreen}
//       options={{
//         tabBarIcon: ({ color, size }) => (
//           <Icon name="cog" size={size} color={color} />
//         ),
//       }}
//     />
//   </Tab.Navigator>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default App;

import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, Text, View, ActivityIndicator, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SignupScreen from './components/SignupScreen';
import LoginScreen from './components/LoginScreen';
import ForgotPasswordScreen from './components/ForgotPasswordScreen';
import DashboardScreen from './components/DashboardScreen';
import OTPScreen from './components/OtpScreen';
import SettingsScreen from './components/SettingsScreen';
import MainScreen from './components/MainScreen';
import HomeScreen from './components/HomeScreen';
import SearchScreen from './components/SearchScreen';
import ProfileScreen from './components/ProfileScreen';
import { setupPlayer, addTrack } from "./components/musicPlayerServices";
import MusicScreen from './components/MusicScreen';
import SubscriptionScreen from './components/SubscriptionScreen';
import MyPlanScreen from './components/MyPlanScreen';
import UpdatePasswordScreen from './components/UpdatePasswordScreen';
import OTPScreen2 from './components/OtpScreen2';
import CacheScreen from './components/CacheScreen';
import NotificationScreen from './components/NotificationScreen';
import SecurityScreen from './components/SecurityScreen';
import DataScreen from './components/DataScreen';
import SupportScreen from './components/SupportScreen';
import TermsScreen from './components/TermsScreen';
import ReportScreen from './components/ReportScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  useEffect(() => {
    const setup = async () => {
      let isSetup = await setupPlayer();

      if (isSetup) {
        await addTrack();
      }

      setIsPlayerReady(isSetup);
    };

    setup();
  }, []);

  if (!isPlayerReady) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen name="Main" component={MainStack} />
        <Stack.Screen name="Music" component={MusicScreen} />
        <Stack.Screen name="Subscription" component={SubscriptionScreen} />
        <Stack.Screen name="MyPlan" component={MyPlanScreen} />
        <Stack.Screen name="Cache" component={CacheScreen} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
        <Stack.Screen name="Security" component={SecurityScreen} />
        <Stack.Screen name="Data" component={DataScreen} />
        <Stack.Screen name="Support" component={SupportScreen} />
        <Stack.Screen name="Terms" component={TermsScreen} />
        <Stack.Screen name="Report" component={ReportScreen} />
      </Stack.Navigator>
      {/* <DashboardScreen /> */}
    </View>
  );
}

const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Signup" component={SignupScreen} />
    <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    <Stack.Screen name="Otp" component={OTPScreen} />
    <Stack.Screen name="Otp2" component={OTPScreen2} />
    <Stack.Screen name="UpdatePassword" component={UpdatePasswordScreen} />
  </Stack.Navigator>
);

const MainStack = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen
      name="Home"
      component={DashboardScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="home" size={size} color={color} />
        ),
      }}
    />
    
    <Tab.Screen
      name="Search"
      component={SearchScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="search" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="user" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="cog" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;

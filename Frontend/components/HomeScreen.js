// import { Button,Text, View } from 'react-native';
//  export const Home=(props)=> {
//     console.warn(props.route.params);
//     const {name,age}=props.route.params;
//     return(
//       <View style={{flex:1, justifyContent:'center' ,alignItems:'center'}}>
//         <Text style={{fontSize:30}}>Home Screen</Text>
//         <Text style={{fontSize:30}}>Name :{name}</Text>
//         <Text style={{fontSize:30}}>Age:{age}</Text>
//       </View>
//     )
//   }
// import React from 'react';
// import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { orange100 } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

// const HomeScreen = () => {
//   const navigation = useNavigation();

//   return (
//     <ImageBackground
//       source={{ uri: 'https://th.bing.com/th?q=iOS+14+Background&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247' }}
//       style={styles.backgroundImage}
//     >
//       <View style={styles.container}>
//         <Text style={styles.title}>Welcome to Our World</Text>
//         <Text style={styles.title}>To Continue...</Text>
//         <TouchableOpacity style={{height:40 , width:150, backgroundColor:'orange', display:'flex', justifyContent:"center", alignItems:"center", borderRadius:8 ,marginBottom: 10,}}  onPress={() => navigation.navigate('Signup')} >
//           <Text style={{color:"white", }}>Sign Up</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={{height:40 , width:150, backgroundColor:'orange', display:'flex', justifyContent:"center", alignItems:"center", borderRadius:8 }}  onPress={() => navigation.navigate('Login')} >
//           <Text style={{color:"white", }}>Sign In</Text>
//         </TouchableOpacity>
//       </View> 
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     resizeMode: 'cover'
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     backgroundColor: 'rgba(255, 255, 255, 0.7)',
//   },
//   title: {
//     fontSize: 34,
//     fontWeight: 'bold',
//     marginBottom: 10,
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
//   },
//   input: {
//     height: 40,
//     paddingHorizontal: 10,
//     width: '100%',
//   },
//   buttonRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'stretch',
//     marginBottom: 10,
//     borderRadius: 5,
//     textDecorationLine:"underline",
//     width: '100%',
    
//   },
//   centeredButton: {
//     alignItems: 'stretch',
//     backgroundColor:'orange',

//     borderColor: 'gray',
//      borderWidth: 1,
//     borderRadius: 5,
//     // paddingHorizontal: 1,
//     marginBottom: 10,
//     width: '100%'
//   },
// });


// export default HomeScreen;
// import React from 'react';
// import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const HomeScreen = () => {
//   const navigation = useNavigation();

//   return (
//     <ImageBackground
//       source={{ uri: 'https://th.bing.com/th?q=iOS+14+Background&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247' }}
//       style={styles.backgroundImage}
//     >
//       <View style={styles.container}>
//       <Image source={require('./logomain.png')} style={styles.logo} />
//         <Text style={styles.title}>Welcome to Our World</Text>
        
//         <Text style={styles.title}>To Continue...</Text>
//         <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signup')} >
//           <Text style={styles.buttonText}>Sign Up</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')} >
//           <Text style={styles.buttonText}>Sign In</Text>
//         </TouchableOpacity>
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     resizeMode: 'cover'
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     backgroundColor: 'rgba(255, 255, 255, 0.7)',
//   },
//   title: {
//     fontSize: 34,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     textAlign: 'center',
//     marginHorizontal: 10,
//   },
//   logo: {
//     width: 500,
//     height: 400,
//     marginBottom: 20,
//   },
//   button: {
//     height: 40,
//     width: 150,
//     backgroundColor: 'orange',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 8,
//     marginBottom: 10,
//   },
//   buttonText: {
//     color: 'white',
//   },
// });

// export default HomeScreen;
// import React from 'react';
// import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { Card } from 'react-native-paper';

// const HomeScreen = () => {
//   const navigation = useNavigation();

//   return (
//     <ImageBackground
//       source={{ uri: 'https://th.bing.com/th?q=iOS+14+Background&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247' }}
//       style={styles.backgroundImage}
//     >
//       <View style={styles.container}>
//         <Image source={require('./logomain.png')} style={styles.logo} />
//         <Text style={styles.title}>Welcome to Our World</Text>
//         <Text style={styles.title}>To Continue...</Text>
//         <Card style={styles.card}>
//           <Card.Content>
//             <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signup')}>
//               <Text style={styles.buttonText}>Sign Up</Text>
//             </TouchableOpacity>
//           </Card.Content>
//         </Card>
//         <Card style={styles.card}>
//           <Card.Content>
//             <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
//               <Text style={styles.buttonText}>Sign In</Text>
//             </TouchableOpacity>
//           </Card.Content>
//         </Card>
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     resizeMode: 'cover'
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     backgroundColor: 'rgba(255, 255, 255, 0.7)',
//   },
//   title: {
//     fontSize: 34,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     textAlign: 'center',
//     marginHorizontal: 10,
//   },
//   logo: {
//     width: 200,
//     height: 200,
//     marginBottom: 20,
//   },
//   card: {
//     marginBottom: 10,
//     width: 200,
//     borderRadius: 10,
//     backgroundColor: 'orange',
//   },
//   button: {
//     height: 40,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 8,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//   },
// });

// export default HomeScreen;
// import React from 'react';
// import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { Card } from 'react-native-paper';

// const HomeScreen = () => {
//   const navigation = useNavigation();

//   return (
//     <ImageBackground
//       source={{ uri: 'https://th.bing.com/th?q=iOS+14+Background&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247' }}
//       style={styles.backgroundImage}
     
//     >
//       <View style={styles.container}>
//         <Image source={require('./logomain.png')} style={styles.logo} />
//         <Text style={styles.title}>Welcome to Our World</Text>
//         <Text style={styles.title}>To Continue...</Text>
//         <Card style={styles.card}>
//           <Card.Content>
//             <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signup')}>
//               <Text style={styles.buttonText}>Sign Up</Text>
//             </TouchableOpacity>
//           </Card.Content>
//         </Card>
//         <Card style={styles.card}>
//           <Card.Content>
//             <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
//               <Text style={styles.buttonText}>Sign In</Text>
//             </TouchableOpacity>
//           </Card.Content>
//         </Card>
//       </View>
//      </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     resizeMode: 'cover',
//     // Adjust opacity to make the background image more visible
//     opacity: 1,
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     backgroundColor: 'rgba(255, 255, 255, 0.7)',
    
//   },
//   title: {
//     fontSize: 34,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     textAlign: 'center',
//     marginHorizontal: 10,
//   },
//   logo: {
//     width: 200,
//     height: 200,
//     marginBottom: 20,
//   },
//   card: {
//     marginBottom: 10,
//     width: 200,
//     borderRadius: 10,
//     backgroundColor: 'orange',
//   },
//   button: {
//     height: 40,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 8,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//   },
// });

// export default HomeScreen;
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={{ uri: 'https://th.bing.com/th?q=iOS+14+Background&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247' }}
      style={styles.backgroundImage}
    >
      <Card style={styles.container}>
        <View style={styles.cardContent}>
        <Text style={styles.title}>Welcome to Our World</Text>
          <Image source={require('./logomain.png')} style={styles.logo} />
          
          <Text style={styles.title}>To Continue...</Text>
        </View>

        <View style={styles.cardContainer}>
          <Card style={styles.card}>
            <Card.Content>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>
            </Card.Content>
          </Card>

          <Card style={styles.card}>
            <Card.Content>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.buttonText}>Sign In</Text>
              </TouchableOpacity>
            </Card.Content>
          </Card>
        </View>
      </Card>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    // borderRadius: 10,
    margin: 20,
    overflow: 'hidden',
  },
  cardContent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    marginHorizontal: 10,
  },
  logo: {
    width: 400,
    height: 400,
    marginBottom: 20,
    borderColor:"orange",
    borderRadius:6,
  },
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 150,
    borderRadius: 10,
    // backgroundColor: 'rgb(196,98,16)',
    backgroundColor:'brown',
    marginBottom: 20, 
  },
  button: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default HomeScreen;







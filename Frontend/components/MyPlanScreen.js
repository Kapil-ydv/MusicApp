// import React from 'react';
// import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Vibration } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// const MyPlanScreen = () => {
//     const navigation = useNavigation();
//   return (
//     <View style={styles.container}>
//       {/* <ScrollView contentContainerStyle={styles.scrollContainer}> */}
//         <View style={styles.headerContainer}>
//           <Image source={require('./logomain.png')} style={styles.logo} />
//           <Text style={styles.title}>Heat Hit</Text>
//         </View>
//         <View style={styles.content}>
//           <Text style={styles.description}>India's largest premium streaming platform with more than 100,000 hours of songs in 17 languages, and coverage of every major event.</Text>
//           <View style={styles.infoContainer}>
//             <Text style={styles.infoLabel}>Month:</Text>
//             <Text style={styles.infoValue}>March</Text>
//           </View>
//           <View style={styles.infoContainer}>
//             <Text style={styles.infoLabel}>Amount:</Text>
//             <Text style={styles.infoValue}>₹699</Text>
//           </View>
//           <View style={styles.infoContainer}>
//             <Text style={styles.infoLabel}>Begins:</Text>
//             <Text style={styles.infoValue}>06 April, 2024</Text>
//           </View>
//           <View style={styles.infoContainer}>
//             <Text style={styles.infoLabel}>Ends:</Text>
//             <Text style={styles.infoValue}>06 April, 2025</Text>
//           </View>
//           <View style={styles.infoContainer}>
//             <Text style={styles.infoLabel}>Type:</Text>
//             <Text style={styles.infoValue}>Gold</Text>
//           </View>
//           <View style={styles.buttonContainer}>
//             <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Subscription')} >
//               <Text style={styles.buttonText}>Renew</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.button}onPress={() => navigation.navigate('Home')}>
//               <Text style={styles.buttonText}>Cancel</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       {/* </ScrollView> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: '#faebd7',
//     backgroundColor:'#f5fffa',
//   },
//   scrollContainer: {
//     flexGrow: 1,
//     width: '100%', // Ensure full width
//     padding: 20,
//   },
  
//   headerContainer: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   logo: {
//     width: 300,
//     height: 300,
//     // marginBottom: 10,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   content: {
    
//     flex: 1,
//     width: '100%',
//     backgroundColor: '#faebd7',
//     // backgroundColor:'#f5fffa',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderTopLeftRadius:70,
//     borderTopRightRadius:70,
//     // borderBottomLeftRadius: 70,
//     // borderBottomRightRadius: 70,
//     // borderBottomLeftRadius: 900, 
//     // borderBottomRightRadius: 900, 
//     overflow: 'hidden',
//   },
//   description: {
//     fontSize: 16,
//     marginBottom: 30,
//     textAlign: 'center',
//   },
//   infoContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '70%',
//     alignSelf: 'center',
//     marginBottom: 20,
//   },
//   infoLabel: {
//     marginBottom: 20,
//     fontSize: 20,
//     // color:'black',
//     fontWeight: 'bold',
//     width: '30%',
//   },
//   infoValue: {
//     fontSize: 20,
//     marginLeft: 90,
//     width: '70%',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     marginTop: 20,
//     justifyContent: 'space-between',
//     width: '70%',
//     alignSelf: 'center',
//   },
//   button: {
//     backgroundColor: 'brown',
//     borderRadius: 5,
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//   },
//   buttonText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
// });

// export default MyPlanScreen;
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const MyPlanScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { selectedPlan, duration, amount } = route.params;

    
    const startDate = new Date();
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + (duration === '1 day' ? 1 : duration === '1 month' ? 30 : 365));

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Image source={require('./logomain.png')} style={styles.logo} />
                <Text style={styles.title}>Heat Hit</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.description}>India's largest premium streaming platform with more than 100,000 hours of songs in 17 languages, and coverage of every major event.</Text>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoLabel}>Month:</Text>
                    <Text style={styles.infoValue}>{startDate.toLocaleString('default', { month: 'long' })}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoLabel}>Amount:</Text>
                    <Text style={styles.infoValue}>₹{amount}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoLabel}>Begins:</Text>
                    <Text style={styles.infoValue}>{startDate.toDateString()}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoLabel}>Ends:</Text>
                    <Text style={styles.infoValue}>{endDate.toDateString()}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoLabel}>Type:</Text>
                    <Text style={styles.infoValue}>{selectedPlan}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Subscription')}>
                        <Text style={styles.buttonText}>Renew</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5fffa',
    },
    headerContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 300,
        height: 300,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    content: {
        flex: 1,
        width: '100%',
        backgroundColor: '#faebd7',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 70,
        borderTopRightRadius: 70,
        overflow: 'hidden',
    },
    description: {
        fontSize: 16,
        marginBottom: 30,
        textAlign: 'center',
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '70%',
        alignSelf: 'center',
        marginBottom: 20,
    },
    infoLabel: {
        marginBottom: 20,
        fontSize: 20,
        fontWeight: 'bold',
        width: '30%',
    },
    infoValue: {
        fontSize: 20,
        marginLeft: 90,
        width: '70%',
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between',
        width: '70%',
        alignSelf: 'center',
    },
    button: {
        backgroundColor: 'brown',
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
});

export default MyPlanScreen;


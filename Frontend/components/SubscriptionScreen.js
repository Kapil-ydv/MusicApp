

// import React, { useState } from 'react';
// import { useNavigation } from '@react-navigation/native';
// import { View, Image, Text, Button, TouchableOpacity, StyleSheet, TouchableHighlight,Alert } from 'react-native';

// const SubscriptionScreen = () => {
//     const navigation = useNavigation();
//     const [selectedPlan, setSelectedPlan] = useState(null);

//     const handlePlanSelect = (plan) => {
//         setSelectedPlan(plan);
//     };

//     const handleContinue = () => {
//       if (selectedPlan) {
//           navigation.navigate('api');
//       } else {
//           Alert.alert('Please select a plan', 'You must select a plan before continuing.');
//       }
//   };

//     return (
//         <View style={styles.screen}>
//             <View style={styles.upperHalf}>
//                 <Image
//                     style={styles.logo}
//                     source={require('./logomain.png')} 
//                     resizeMode="contain"
//                 />
//                 <Text style={styles.mainHeading}>Go Premium</Text>
//                 <Text style={styles.subHeading}>Listen to Any Sessions</Text>
//                 <Text style={styles.main}>Pay only when you use app</Text>
//                 <Text style={styles.main}>You can cancel this subscription</Text>
//             </View>
//             <View style={styles.lowerHalf}>
//                 <View style={styles.planTitleContainer}>
//                     <Text style={styles.planTitle}>Select a plan</Text>
//                 </View>
//                 <View style={styles.planContainer}>
//                     <TouchableHighlight
//                         style={styles.planButton}
//                         underlayColor="#f5fffa"
//                         onPress={() => handlePlanSelect('Basic')}
//                     >
//                         <View style={styles.plan}>
//                             <View style={styles.planLeft}>
//                                 <Text style={styles.planName}>Basic</Text>
//                             </View>
//                             <View style={styles.planRight}>
//                                 <Text style={styles.planPrice}>$0.4</Text>
//                                 <Text style={styles.planDescription}>Limited version</Text>
//                             </View>
//                         </View>
//                     </TouchableHighlight>
//                 </View>
//                 <View style={styles.planContainer}>
//            <TouchableHighlight
//             style={styles.planButton}
//             underlayColor="#f5fffa"
//             onPress={() =>  handlePlanSelect('Plus')}
//           >
//             <View style={styles.plan}>
//               <View style={styles.planLeft}>
//                 <Text style={styles.planName}>Plus</Text>
//               </View>
//               <View style={styles.planRight}>
//               <Text style={styles.planPrice}>$1.99</Text>
//                 <Text style={styles.planDescription}>Monthly subscription</Text>
                
//               </View>
//             </View>
//           </TouchableHighlight>
//         </View>
//         <View style={styles.planContainer}>
//           <TouchableHighlight
//             style={styles.planButton}
//             underlayColor="#f5fffa"
//             onPress={() => handlePlanSelect('Gold')}
//           >
//             <View style={styles.plan}>
//               <View style={styles.planLeft}>
//                 <Text style={styles.planName}>Gold</Text>
//               </View>
//               <View style={styles.planRight}>
//               <Text style={styles.planPrice}>$6.99</Text>
//                 <Text style={styles.planDescription}>Lifetime access</Text>
                
//               </View>
//             </View>
//           </TouchableHighlight>
//          </View>
                
//             </View>
            
//             <TouchableOpacity
//                 style={styles.editButton}
//                 onPress={handleContinue}
//             >
//                 <Text style={styles.editButtonText}>Continue</Text>
//             </TouchableOpacity>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     screen: {
//       flex: 1,
//       backgroundColor: '#faebd7',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     card: {
//       backgroundColor: '#FFFFFF',
//       borderRadius: 10,
//       padding: 1,
//       height: '90%',
//       width: '90%',
//       // maxWidth: 400, 
//       alignItems: 'center',
//     },
//     logoContainer: {
//       marginBottom: 1,
//       alignItems: 'center',
//     },
//     logo: {
//       width: 150, 
//       height: 150, 
//     },
//     upperHalf: {
//       flex: 1,
//       width: '100%',
//       backgroundColor:'#f5fffa',
//       justifyContent: 'center',
//       alignItems: 'center',
//       borderBottomLeftRadius: 900, 
//       borderBottomRightRadius: 900, 
//       overflow: 'hidden', 
//     },
//     lowerHalf: {
//       flex: 1,
//       justifyContent: 'center',
//     },
//     mainHeading: {
//       fontSize: 18,
//       fontWeight: 'bold',
//       marginBottom: 10,
//     },
//     main: {
//       fontSize: 12,
//       fontWeight: 'bold',
//       marginBottom: 10,
//     },
//     subHeading: {
//       fontSize: 24,
//       fontWeight: 'bold',
//       marginBottom: 20,
//       color:'black'
//     },
//     planTitleContainer: {
//       marginBottom: 10,
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     planTitle: {
//       justifyContent: 'center',
//       fontSize: 24,
//       alignItems: 'center',
//       fontWeight: 'bold',
  
//     },
//     planContainer: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       width: '90%',
//       marginBottom: 20,
      
//     },
//     planButton: {
//       flex: 1,
//       borderRadius: 10,
//       borderWidth: 1,
//       backgroundColor:'white',
//       borderColor: 'skyblue',
//       // borderColor: '#FFD700', // Gold color
//       marginHorizontal: 5,
//     },
//     plan: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       paddingVertical: 10,
//       marginBottom:10
//     },
//     planLeft: {
//       flex: 1,
//       marginLeft:10
//     },
//     planRight: {
//       flex: 1,
//       marginRight:10,
//       alignItems: 'flex-end',
//     },
//     planName: {
//       fontSize: 24,
//       marginBottom: 5,
//       color:'black'
//     },
//     planDescription: {
//       fontSize: 14,
//       color: '#888',
//       marginBottom: 5,
//     },
//     planPrice: {
//       fontSize: 20,
//       fontWeight: 'bold',
//       color: 'skyblue',
//       marginBottom: 10,
//     },
   
//     editButton: {
//       backgroundColor: 'brown',
//        paddingVertical: 10,
//        paddingHorizontal: 20,
//       borderRadius: 10,
//       width: '30%',
//       marginBottom:60,
//       alignSelf: 'center',
//     },
//     editButtonText: {
//       color: 'white',
//       fontSize: 18,
//       alignSelf: 'center',
//       fontWeight: 'bold',
//     },
//   });

// export default SubscriptionScreen;
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, Button, TouchableOpacity, StyleSheet, TouchableHighlight, Alert } from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';

const SubscriptionScreen = () => {
    const navigation = useNavigation();
    const [selectedPlan, setSelectedPlan] = useState(null);

    const handlePlanSelect = (plan) => {
        setSelectedPlan(plan);
    };

    const handleContinue = () => {
        if (selectedPlan) {
           
            const options = {
                description: 'Subscription Purchase',
                image: 'https://th.bing.com/th?q=iOS+14+Background&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247',
                currency: 'INR',
                key: 'rzp_test_2l1U2EWy7WzRyk',
                amount: selectedPlan === 'Basic' ? 1900: selectedPlan === 'Plus' ? 19900 : 69900,
                name: 'Heat Hit',
                prefill: {
                    email: 'we@gmail.com',
                    contact: '9999999999',
                    name: 'Kapil',
                },
                theme: { color: '#F37254' },
            };
            
            RazorpayCheckout.open(options).then((data) => {
              
                console.log(`Payment successful: ${data}`);
                
                navigation.navigate('MyPlan', { 
                  selectedPlan: selectedPlan,
                  duration: selectedPlan === 'Basic' ? '1 day' : selectedPlan === 'Plus' ? '1 month' : '1 year',
                  amount: selectedPlan === 'Basic' ? 19 : selectedPlan === 'Plus' ? 199 : 699
              });
              
            }).catch((error) => {
                
                console.log(`Payment error: ${error}`);
            });
        } else {
            Alert.alert('Please select a plan', 'You must select a plan before continuing.');
        }
    };

  
    return (
      <View style={styles.screen}>
          <View style={styles.upperHalf}>
              <Image
                  style={styles.logo}
                  source={require('./logomain.png')} 
                  resizeMode="contain"
              />
              <Text style={styles.mainHeading}>Go Premium</Text>
              <Text style={styles.subHeading}>Listen to Any Sessions</Text>
              <Text style={styles.main}>Pay only when you use app</Text>
              <Text style={styles.main}>You can cancel this subscription</Text>
          </View>
          <View style={styles.lowerHalf}>
              <View style={styles.planTitleContainer}>
                  <Text style={styles.planTitle}>Select a plan</Text>
              </View>
              <View style={styles.planContainer}>
                  <TouchableHighlight
                      style={styles.planButton}
                      underlayColor="#f5fffa"
                      onPress={() => handlePlanSelect('Basic')}
                  >
                      <View style={styles.plan}>
                          <View style={styles.planLeft}>
                              <Text style={styles.planName}>Basic</Text>
                          </View>
                          <View style={styles.planRight}>
                              <Text style={styles.planPrice}>₹19</Text>
                              <Text style={styles.planDescription}>Limited version</Text>
                          </View>
                      </View>
                  </TouchableHighlight>
              </View>
              <View style={styles.planContainer}>
         <TouchableHighlight
          style={styles.planButton}
          underlayColor="#f5fffa"
          onPress={() =>  handlePlanSelect('Plus')}
        >
          <View style={styles.plan}>
            <View style={styles.planLeft}>
              <Text style={styles.planName}>Plus</Text>
            </View>
            <View style={styles.planRight}>
            <Text style={styles.planPrice}>₹199</Text>
              <Text style={styles.planDescription}>Monthly subscription</Text>
              
            </View>
          </View>
        </TouchableHighlight>
      </View>
      <View style={styles.planContainer}>
        <TouchableHighlight
          style={styles.planButton}
          underlayColor="#f5fffa"
          onPress={() => handlePlanSelect('Gold')}
        >
          <View style={styles.plan}>
            <View style={styles.planLeft}>
              <Text style={styles.planName}>Gold</Text>
            </View>
            <View style={styles.planRight}>
            <Text style={styles.planPrice}>₹699</Text>
              <Text style={styles.planDescription}>Lifetime access</Text>
              
            </View>
          </View>
        </TouchableHighlight>
       </View>
              
          </View>
          
          <TouchableOpacity
              style={styles.editButton}
              onPress={handleContinue}
          >
              <Text style={styles.editButtonText}>Continue</Text>
          </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#faebd7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 1,
    height: '90%',
    width: '90%',
    // maxWidth: 400, 
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 1,
    alignItems: 'center',
  },
  logo: {
    width: 150, 
    height: 150, 
  },
  upperHalf: {
    flex: 1,
    width: '100%',
    backgroundColor:'#f5fffa',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 900, 
    borderBottomRightRadius: 900, 
    overflow: 'hidden', 
  },
  lowerHalf: {
    flex: 1,
    justifyContent: 'center',
  },
  mainHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  main: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'black'
  },
  planTitleContainer: {
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  planTitle: {
    justifyContent: 'center',
    fontSize: 24,
    alignItems: 'center',
    fontWeight: 'bold',

  },
  planContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 20,
    
  },
  planButton: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor:'white',
    borderColor: 'skyblue',
    // borderColor: '#FFD700', // Gold color
    marginHorizontal: 5,
  },
  plan: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom:10
  },
  planLeft: {
    flex: 1,
    marginLeft:10
  },
  planRight: {
    flex: 1,
    marginRight:10,
    alignItems: 'flex-end',
  },
  planName: {
    fontSize: 24,
    marginBottom: 5,
    color:'black'
  },
  planDescription: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  planPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'skyblue',
    marginBottom: 10,
  },
 
  editButton: {
    backgroundColor: 'brown',
     paddingVertical: 10,
     paddingHorizontal: 20,
    borderRadius: 10,
    width: '30%',
    marginBottom:60,
    alignSelf: 'center',
  },
  editButtonText: {
    color: 'white',
    fontSize: 18,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});



export default SubscriptionScreen;





  
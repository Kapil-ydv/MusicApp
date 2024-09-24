import React from 'react';
import { View, Text, Image } from 'react-native';

const SupportScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#faebd7' }}>
      
      <Image source={require('./customer.jpg')} style={{ width: '100%', height: 400 ,borderBottomLeftRadius:100,borderBottomRightRadius:100}} />
      {/* <Text style={{ fontSize: 24, fontWeight: 'bold',marginBottom:20 }}>Customer support</Text> */}
      <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold',marginBottom:20 }}>Customer support</Text>
        <Text style={{ fontSize: 18 ,fontWeight: 'bold',}}>24/7</Text>

        <Text style={{ fontSize: 14, marginTop: 10,fontWeight: 'bold', }}>Contact us:</Text>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 10 }}>+917048978585</Text>
        <Text style={{ fontSize: 14, marginTop: 10 ,fontWeight: 'bold',}}>Email us:</Text>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 10 }}>heathit@gmail.com</Text>
      </View>
    </View>
  );
}

export default SupportScreen;






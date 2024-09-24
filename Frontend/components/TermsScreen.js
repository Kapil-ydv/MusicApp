import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

const TermsScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#faebd7' }}>
    <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10,color:'black' }}>Terms and Policy</Text>
        <Text style={{ fontWeight: 'bold' }}>Last updated on April 2024</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 30,color:'black'  }}>Summary</Text>
        <Text style={{ fontWeight: 'bold' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper porta dignissim purus, vel et dictum pellentesque eget ultrices. Quis lectus vel amet vitae aliquam viverra.
        </Text>
          <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 30 ,color:'black' }}>Terms</Text>
          <Text style={{ fontWeight: 'bold' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper porta dignissim purus, vel et dictum pellentesque eget ultrices. Quis lectus vel amet vitae aliquam viverra.
          </Text>
          <Text style={{ fontWeight: 'bold' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper porta dignissim purus, vel et dictum pellentesque eget ultrices. Quis lectus vel amet vitae aliquam viverra.
          </Text>
          <Text style={{ fontWeight: 'bold' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper porta dignissim purus, vel et dictum pellentesque eget ultrices. Quis lectus vel amet vitae aliquam viverra.
          </Text>
          <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 30 ,color:'black' }}>Privacy policy</Text>
          <Text style={{ fontWeight: 'bold' }}>
          Privacy policy outlining how user data is collected, used, and protected within the music app. This should include information on data collection methods, types of data collected, purposes of data collection, and user rights regarding their data.
          </Text>
          <Text style={{ fontWeight: 'bold' }}>
          Privacy policy outlining how user data is collected, used, and protected within the music app. This should include information on data collection methods, types of data collected, purposes of data collection, and user rights regarding their data.
          </Text>
          <Text style={{ fontWeight: 'bold' }}>
          Privacy policy outlining how user data is collected, used, and protected within the music app. This should include information on data collection methods, types of data collected, purposes of data collection, and user rights regarding their data.
          </Text>
          <Text style={{ fontWeight: 'bold' }}>
          Privacy policy outlining how user data is collected, used, and protected within the music app. This should include information on data collection methods, types of data collected, purposes of data collection, and user rights regarding their data.
          </Text>
          <Text style={{ fontWeight: 'bold' }}>
          Privacy policy outlining how user data is collected, used, and protected within the music app. This should include information on data collection methods, types of data collected, purposes of data collection, and user rights regarding their data.
          </Text>
          <Text style={{ fontWeight: 'bold' }}>
          Privacy policy outlining how user data is collected, used, and protected within the music app. This should include information on data collection methods, types of data collected, purposes of data collection, and user rights regarding their data.
          </Text>
          <Text style={{ fontWeight: 'bold' }}>
          Privacy policy outlining how user data is collected, used, and protected within the music app. This should include information on data collection methods, types of data collected, purposes of data collection, and user rights regarding their data.
          </Text>
          <Text style={{ fontWeight: 'bold' }}>
          Privacy policy outlining how user data is collected, used, and protected within the music app. This should include information on data collection methods, types of data collected, purposes of data collection, and user rights regarding their data.
          </Text>
          <Text style={{ fontWeight: 'bold' }}>
          Privacy policy outlining how user data is collected, used, and protected within the music app. This should include information on data collection methods, types of data collected, purposes of data collection, and user rights regarding their data.
          </Text>
          </View>
      </ScrollView>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingBottom: 10, marginBottom:50 }}>
        <TouchableOpacity onPress={() => console.log('Decline pressed')} style={{ backgroundColor: 'brown', padding: 12, borderRadius: 5 }}>
          <Text style={{ color: 'white' }}>Decline</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Accept pressed')} style={{ backgroundColor: 'green', padding: 12, borderRadius: 5 }}>
          <Text style={{ color: 'white' }}>Accept</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TermsScreen;



// import React from 'react';
// import { useNavigation } from '@react-navigation/native';
// import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
// import { Card, ListItem, Avatar } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const SearchScreen = () => {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.container}>
      
//       <View style={styles.grid}>
//         <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('Main')}>
//           <Icon name="home" size={30} color="gray" />
//           <Text style={styles.gridText}>Search</Text>
//         </TouchableOpacity>
       
     
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'rgba(255, 193, 7, 0.7)',
//   },
//   header: {
//     width: '100%',
//     height: 80,
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderBottomWidth: 1,
//     borderBottomColor: 'gray',
//   },
//   logo: {
//     width: 50,
//     height: 50,
//     resizeMode: 'contain',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginLeft: 10,
//   },
//   grid: {
//     width: '100%',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 20,
//     position: 'absolute',
//     bottom: 0,
//   },
//   gridItem: {
//     width: '22%',
//     height: 90,
//     backgroundColor: 'rgba(255, 255, 255, 0.7)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 10,
//     marginVertical: 10,
//   },
//   gridText: {
//     color: 'gray',
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 10,
//   },
// });
// export default SearchScreen;
// import React, { useState } from 'react';
// import { useNavigation } from '@react-navigation/native';
// import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, TextInput } from 'react-native';
// import { Card, ListItem, Avatar } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const SearchScreen = () => {
//   const navigation = useNavigation();
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredTracks, setFilteredTracks] = useState([]);

//   const allTracks = [
//     { id: '1', title: 'I Like You', artist: 'Ducko Mcfie' },
//     { id: '2', title: 'STAPROY', artist: 'VEGAS' },
//     { id: '3', title: 'I\'m Good (Blue)', artist: 'gar' },
//     { id: '4', title: 'Super Freaky Girl', artist: 'Nicki Minaj' },
//     { id: '5', title: 'As It Was', artist: 'Harry Styles' },
//     { id: '6', title: 'gangsta rap', artist: 'Dr. Dre' },
//     { id: '7', title: 'I Like You', artist: 'Ducko Mcfie' },
//     { id: '8', title: 'STAPROY', artist: 'VEGAS' },
//     { id: '9', title: 'I\'m Good (Blue)', artist: 'gar' },
//     { id: '10', title: 'Super Freaky Girl', artist: 'Nicki Minaj' },
//     { id: '11', title: 'As It Was', artist: 'Harry Styles' },
//     { id: '12', title: 'gangsta rap', artist: 'Dr. Dre' },
    
//   ];

//   const renderTrackItem = ({ item }) => (
//     <TouchableOpacity style={styles.trackItem} onPress={() => navigation.navigate('Main')}>
//       <Text style={styles.gridText}>{item.title}</Text>
//       <Text style={{ color: 'gray', fontSize: 14 }}>{item.artist}</Text>
//     </TouchableOpacity>
//   );

//   const handleSearch = (text) => {
//     setSearchQuery(text);
//     const filteredItems = allTracks.filter(item => item.title.toLowerCase().includes(text.toLowerCase()));
//     setFilteredTracks(filteredItems);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Image source={require('./logomain.png')} style={styles.logo} />
//         <Text style={styles.title}>My Music Library</Text>
//       </View>

//       <View style={styles.searchBar}>
//         <TextInput
//           style={styles.input}
//           placeholder="Search songs..."
//           value={searchQuery}
//           onChangeText={handleSearch}
//         />
//       </View>

//       <View style={styles.trackList}>
//         <Text style={styles.sectionTitle}>All Tracks</Text>
//         <FlatList
//           data={searchQuery ? filteredTracks : allTracks}
//           renderItem={renderTrackItem}
//           keyExtractor={item => item.id}
//           showsVerticalScrollIndicator={false}
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     backgroundColor: '#faebd7',
//   },
//   header: {
//     width: '100%',
//     height: 80,
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderBottomWidth: 1,
//     borderBottomColor: 'gray',
//   },
//   logo: {
//     width: 50,
//     height: 50,
//     resizeMode: 'contain',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginLeft: 10,
//   },
//   searchBar: {
//     width: '90%',
//     marginTop: 10,
//     marginBottom: 10,
//     padding: 10,
//     height: 55,
//     backgroundColor: 'white',
//     borderRadius: 70,
    
//   },
//   input: {
//     fontSize: 14,
//   },
//   trackList: {
//     flex: 1,
//     width: '100%',
//     padding: 15,
//   },
//   trackItem: {
//     marginBottom: 10,
//     padding: 10,
//     backgroundColor: '#faebd7',
//     borderRadius: 10,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   gridText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default SearchScreen;
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, TextInput } from 'react-native';
import { Card, ListItem, Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTracks, setFilteredTracks] = useState([]);

 
  const allTracks = [
    { id: '1', title: 'Heeriye', artist: 'Arijit Singh', image: require('./heeriye.png') },
    { id: '2', title: 'Maan Meri Jaan', artist: 'King', image: require('./Champagne.jpg') },
    { id: '3', title: 'Raataan Lambiyan', artist: 'Tanishk Bagchi' ,image: require('./shershaah.jpg')},
    { id: '4', title: 'Besharam Rang', artist: 'Shilpa Rao' ,image: require('./rang.jpg') },
    { id: '5', title: 'Pal Pal Dil Ke Paas', artist: 'Arijit Singh',image: require('./dil.jpg') },
    { id: '6', title: 'Pasoori', artist: 'Asees Kaur' ,image: require('./pasoori.jpg')},
    { id: '7', title: 'I Like You', artist: 'Ducko Mcfie',image: require('./heeriye.png') },
    { id: '8', title: 'STAPROY', artist: 'VEGAS',image: require('./Champagne.jpg') },
    { id: '9', title: 'I\'m Good (Blue)', artist: 'gar' ,image: require('./shershaah.jpg')},
    { id: '10', title: 'Super Freaky Girl', artist: 'Nicki Minaj',image: require('./heeriye.png') },
    { id: '11', title: 'As It Was', artist: 'Harry Styles' ,image: require('./Champagne.jpg')},
    { id: '12', title: 'gangsta rap', artist: 'Dr. Dre' ,image: require('./shershaah.jpg')},
   
  ];

  const renderTrackItem = ({ item }) => (
    <TouchableOpacity style={styles.trackItem} onPress={() => navigation.navigate('Music')}>
      <View style={styles.trackDetails}>
        <Image source={item.image} style={styles.trackImage} />
        <View style={styles.trackInfo}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.artist}>{item.artist}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const handleSearch = (text) => {
    setSearchQuery(text);
    const filteredItems = allTracks.filter(item => item.title.toLowerCase().includes(text.toLowerCase()));
    setFilteredTracks(filteredItems);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./logomain.png')} style={styles.logo} />
        <Text style={styles.title}>My Music Library</Text>
      </View>

      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Search songs..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
        <TouchableOpacity onPress={() => {}}>
          <Icon name="search" size={14} color="black" style={styles.searchIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.trackList}>
        <Text style={styles.sectionTitle}>All Tracks</Text>
        <FlatList
          data={searchQuery ? filteredTracks : allTracks}
          renderItem={renderTrackItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#faebd7',
  },
  
    header: {
      flexDirection: 'row',
      alignItems: 'center', 
      // justifyContent: 'center', 
      width: '100%',
      height: 50,
      backgroundColor: '#faebd7',
      // borderBottomWidth: 1,
      // borderBottomColor: 'gray',
  },
  logo: {
    width: 60,
    height: 60,
     resizeMode: 'contain',
     marginLeft:20
    
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
     marginLeft: 30,
  },
  searchBar: {
    width: '90%',
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    height: 55,
    backgroundColor: 'white',
    borderRadius: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    fontSize: 14,
  },
  trackList: {
    flex: 1,
    width: '100%',
    padding: 15,
  },
 
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  gridText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchIcon: {
    padding: 10,
  },
  trackItem: {
    marginBottom: 7,
    padding: 10,
    backgroundColor: '#faebd7',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  trackDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  trackImage: {
    width: 50,
    height: 50,
    // borderRadius: 25,
    marginRight: 10,
  },
  trackInfo: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  artist: {
    color: 'gray',
    fontSize: 14,
  },
});

export default SearchScreen;


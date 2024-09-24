
import React from 'react'; 
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SettingsScreen = () => { 
    const navigation = useNavigation();
    
    return ( 
        <View style={styles.container}> 
            <Text style={styles.mainHeading}>Settings</Text> 

           
            <View style={styles.section}> 
                <Text style={styles.sectionTitle}>Account</Text> 
                <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Profile')}>
                    <Icon name="user" size={20} color="black" style={styles.icon} />
                    <Text style={styles.itemText}>Edit profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Security')}>
                    <Icon name="lock" size={20} color="black" style={styles.icon} />
                    <Text style={styles.itemText}>Security</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Notification')}>
                    <Icon name="bell" size={20} color="black" style={styles.icon} />
                    <Text style={styles.itemText}>Notifications</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Security')}>
                    <Icon name="eye" size={20} color="black" style={styles.icon} />
                    <Text style={styles.itemText}>Privacy</Text>
                </TouchableOpacity>
            </View>

           
            <View style={styles.section}> 
                <Text style={styles.sectionTitle}>Support & About</Text>
                <TouchableOpacity style={styles.item} onPress={() =>  navigation.navigate('Subscription')}>
                    <Icon name="credit-card" size={20} color="black" style={styles.icon} />
                    <Text style={styles.itemText}>Buy Subscription</Text> 
                </TouchableOpacity> 
                <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Support')}>
                    <Icon name="question-circle" size={20} color="black" style={styles.icon} />
                    <Text style={styles.itemText}>Help & Support</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Terms')}> 
                    <Icon name="file-text-o" size={20} color="black" style={styles.icon} />
                    <Text style={styles.itemText}>Terms and Policies</Text> 
                </TouchableOpacity> 
            </View> 

            
            <View style={styles.section}> 
                <Text style={styles.sectionTitle}>Cache & cellular</Text> 
                <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Cache')}>
                    <Icon name="trash" size={20} color="black" style={styles.icon} />
                    <Text style={styles.itemText}>Free up space</Text> 
                </TouchableOpacity> 
                <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Data')}> 
                    <Icon name="signal" size={20} color="black" style={styles.icon} />
                    <Text style={styles.itemText}>Data Saver</Text> 
                </TouchableOpacity> 
            </View> 

        
            <View style={styles.section}> 
                <Text style={styles.sectionTitle}>Actions</Text>
                <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Report')}> 
                    <Icon name="exclamation-circle" size={20} color="black" style={styles.icon} />
                    <Text style={styles.itemText}>Report a problem</Text>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Login')}> 
                    <Icon name="plus-square" size={20} color="black" style={styles.icon} />
                    <Text style={styles.itemText}>Add account</Text> 
                </TouchableOpacity> 
                <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Login')}> 
                    <Icon name="sign-out" size={20} color="black" style={styles.icon} />
                    <Text style={styles.itemText}>Log out</Text>
                </TouchableOpacity> 
            </View> 
        </View> 
    ); 
};

const styles = StyleSheet.create({ 
    container: { 
        flex: 1, 
        padding: 5, 
        // backgroundColor: '#faebd7', 

    },
    mainHeading: { 
        fontSize: 24, 
        fontWeight: 'bold', 
        marginBottom: 10, 
    },
    section: { 
        marginTop: 15, 
        

    },
    sectionTitle: { 
        fontSize: 18, 
        fontWeight: 'bold', 
        marginBottom: 10, 
        
    },
    item: { 
         backgroundColor: '#faebd7', 
         padding: 10, 
        borderRadius: 5, 
        marginBottom: 10, 
        flexDirection: 'row', 
        alignItems: 'center', 
    },
    itemText: { 
        fontSize: 16, 
    },
    icon: {
        marginRight: 10,
    },
});

export default SettingsScreen;


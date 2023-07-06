import { useRef, useState } from 'react';
import { Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TabButton from '../components/TabButton';
import Content from '../components/Content';
import profile from '../images/profile.png';
// Tab ICons...
import home from '../images/home.png';
import search from '../images/search.png';
import notifications from '../images/bell.png';
import settings from '../images/settings.png';
import logout from '../images/logout.png';

function Menu() {
  const [currentTab, setCurrentTab] = useState("Home");
  const [showMenu, setShowMenu] = useState(false);

  // Animated Properties...

  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  return (
    
    <SafeAreaView style={styles.container}>
      <View style={{ justifyContent: 'flex-start', padding: 20 }}>
        <Image source={profile} style={styles.imageProfile}></Image>
        <Text style={styles.textName}>Gio23</Text>
        <TouchableOpacity>
          <Text style={styles.textViewProfile}>View Profile</Text>
        </TouchableOpacity>
        <View style={{ flexGrow: 1, marginTop: 50 }}>
          {TabButton(currentTab, setCurrentTab, "Home", home)}
          {TabButton(currentTab, setCurrentTab, "PetShops", search)}
          {TabButton(currentTab, setCurrentTab, "Settings", settings)}
        </View>
        <View>
          {TabButton(currentTab, setCurrentTab, "LogOut", logout)}
        </View>

      </View>
      {Content(showMenu, setShowMenu, scaleValue, offsetValue, closeButtonOffset, currentTab)}
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5359D8',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  imageProfile: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginTop: 50,
  },

  textName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20
  },

  textViewProfile: {
    marginTop: 6,
    color: 'white'
  },
});

export default Menu;
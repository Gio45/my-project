import { Animated, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Login from './Login';
import {Route} from 'react-router-dom' 

function TabButton (currentTab, setCurrentTab, title, image) {
  return (
      <TouchableOpacity onPress={() => {
        if (title === "LogOut") {
          <Route path="/login" Component={<Login/>}></Route>
        } else {
          setCurrentTab(title)
        }
      }}>
        <View style={[styles.containerTab, { backgroundColor: currentTab === title ? 'white' : 'transparent' }]}>
          <Image source={image} style={[styles.imageTab, {tintColor: currentTab == title ? "#5359D1" : "white"}]}></Image>
          <Text style={[styles.titleTab,{color: currentTab == title ? "#5359D1" : "white"}]}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    containerTab: {
      flexDirection: "row",
      alignItems: 'center',
      paddingVertical: 8,
      paddingLeft: 13,
      paddingRight: 35,
      borderRadius: 8,
      marginTop: 15,
    },

    imageTab: {
      width: 25, 
      height: 25,
    },

    titleTab: {
      fontSize: 15,
      fontWeight: 'bold',
      paddingLeft: 15,
    },
});

export default TabButton;
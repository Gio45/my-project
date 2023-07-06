import react from "react";
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
 
const {width, height} = Dimensions.get('window')

export default function ButtonGradient(){
    return(
        <TouchableOpacity style={styles.container}>
            <LinearGradient
                // Button Linear Gradient
                colors={['#fff', '#5359D8', '#fff']}
                start={{x:0, y:0}}
                end={{x:1, y:1}}
                style={styles.button}>
                <Text style={styles.textButton}>SIGN IN</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: 200,
        marginTop: 50,
    },
    textButton: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold',
    },
    button: {
        width: '80%',
        height: 50,
        padding:10,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },                   

});
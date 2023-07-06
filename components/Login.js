import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import Svg, {Defs,LinearGradient,Stop,Pattern,G,Path,Rect,} from 'react-native-svg';
import ButtonGradient from '../Button';

function Login() {

function SvgTop() {
    return (
    <Svg 
    width='100%'
    height={324}
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
      <Defs>
        <LinearGradient
          id="a"
          x1={0}
          x2={0}
          y1={0}
          y2="100%"
          gradientTransform="rotate(240)"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0} stopColor="#fff" />
          <Stop offset={1} stopColor="#5359D8" />
        </LinearGradient>
        <Pattern
          id="b"
          width={540}
          height={450}
          x={0}
          y={0}
          patternUnits="userSpaceOnUse"
          viewBox="0 0 1080 900"
        >
          <G fillOpacity={0.1}>
            <Path fill="#444" d="M90 150 0 300h180z" />
            <Path d="M90 150 180 0H0z" />
            <Path fill="#AAA" d="M270 150 360 0H180z" />
            <Path fill="#DDD" d="m450 150-90 150h180z" />
            <Path fill="#999" d="M450 150 540 0H360z" />
            <Path d="m630 150-90 150h180z" />
            <Path fill="#DDD" d="M630 150 720 0H540z" />
            <Path fill="#444" d="m810 150-90 150h180z" />
            <Path fill="#FFF" d="M810 150 900 0H720z" />
            <Path fill="#DDD" d="m990 150-90 150h180z" />
            <Path fill="#444" d="m990 150 90-150H900z" />
            <Path fill="#DDD" d="M90 450 0 600h180z" />
            <Path d="m90 450 90-150H0z" />
            <Path fill="#666" d="m270 450-90 150h180z" />
            <Path fill="#AAA" d="m270 450 90-150H180z" />
            <Path fill="#DDD" d="m450 450-90 150h180z" />
            <Path fill="#999" d="m450 450 90-150H360zM630 450l-90 150h180z" />
            <Path fill="#FFF" d="m630 450 90-150H540z" />
            <Path d="m810 450-90 150h180z" />
            <Path fill="#DDD" d="m810 450 90-150H720z" />
            <Path fill="#AAA" d="m990 450-90 150h180z" />
            <Path fill="#444" d="m990 450 90-150H900z" />
            <Path fill="#222" d="M90 750 0 900h180z" />
            <Path d="m270 750-90 150h180z" />
            <Path fill="#DDD" d="m270 750 90-150H180z" />
            <Path d="m450 750 90-150H360zM630 750l-90 150h180z" />
            <Path fill="#444" d="m630 750 90-150H540z" />
            <Path fill="#AAA" d="m810 750-90 150h180z" />
            <Path fill="#666" d="m810 750 90-150H720z" />
            <Path fill="#999" d="m990 750-90 150h180zM180 0 90 150h180z" />
            <Path fill="#444" d="m360 0-90 150h180z" />
            <Path fill="#FFF" d="m540 0-90 150h180z" />
            <Path d="m900 0-90 150h180z" />
            <Path fill="#222" d="m0 300-90 150H90z" />
            <Path fill="#FFF" d="m0 300 90-150H-90zM180 300 90 450h180z" />
            <Path fill="#666" d="m180 300 90-150H90z" />
            <Path fill="#222" d="m360 300-90 150h180z" />
            <Path fill="#FFF" d="m360 300 90-150H270z" />
            <Path fill="#444" d="m540 300-90 150h180z" />
            <Path fill="#222" d="m540 300 90-150H450z" />
            <Path fill="#AAA" d="m720 300-90 150h180z" />
            <Path fill="#666" d="m720 300 90-150H630z" />
            <Path fill="#FFF" d="m900 300-90 150h180z" />
            <Path fill="#999" d="m900 300 90-150H810z" />
            <Path d="m0 600-90 150H90z" />
            <Path fill="#666" d="m0 600 90-150H-90z" />
            <Path fill="#AAA" d="M180 600 90 750h180z" />
            <Path fill="#444" d="m180 600 90-150H90zM360 600l-90 150h180z" />
            <Path fill="#999" d="m360 600 90-150H270z" />
            <Path fill="#666" d="m540 600 90-150H450z" />
            <Path fill="#222" d="m720 600-90 150h180z" />
            <Path fill="#FFF" d="m900 600-90 150h180z" />
            <Path fill="#222" d="m900 600 90-150H810z" />
            <Path fill="#DDD" d="m0 900 90-150H-90z" />
            <Path fill="#444" d="m180 900 90-150H90z" />
            <Path fill="#FFF" d="m360 900 90-150H270z" />
            <Path fill="#AAA" d="m540 900 90-150H450z" />
            <Path fill="#FFF" d="m720 900 90-150H630z" />
            <Path fill="#222" d="m900 900 90-150H810zM1080 300l-90 150h180z" />
            <Path fill="#FFF" d="m1080 300 90-150H990z" />
            <Path d="m1080 600-90 150h180z" />
            <Path fill="#666" d="m1080 600 90-150H990z" />
            <Path fill="#DDD" d="m1080 900 90-150H990z" />
          </G>
        </Pattern>
      </Defs>
      <Rect width="100%" height="100%" fill="url(#a)" />
      <Rect width="100%" height="100%" fill="url(#b)" />  
    </Svg>
    )
  }

  return (
    <View style={styles.container}>
      <SvgTop style={styles.containerSVG}/>
      <Text style={styles.titulos}>PetCITY</Text>
      <Text style={styles.subTitles}>Sign in in your account</Text>
      <TextInput style={styles.textInput}
        placeholder='example@email.com'
      />
      <TextInput style={styles.textInput}
        placeholder='password'
      />
      <Text style={styles.forgotPassword}>Forgot your password?</Text>
      <ButtonGradient/>
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Don't have an account</Text>
      </TouchableOpacity>
      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f1f1f1',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    containerSVG: {
      justifyContent: 'flex-start',
      alignItems: 'center',
    },  
    titulos: {
      fontSize: 80,
      color: '#000',
      fontWeight: 'bold',
    },
    subTitles: {
      fontSize: 20,
      color: 'gray',
    },
    textInput: {
      padding: 10,
      paddingStart: 30,
      width: '80%',
      borderRadius: 30,
      marginTop: 20,
      backgroundColor: '#FFFFFF',
    },
    forgotPassword: {
      fontSize: 14,
      color: 'gray',
      marginTop: 20,
    }
  
  });

  export default Login;
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { Alert, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableHighlight, View,Dimensions } from 'react-native';
import { back } from 'react-native/Libraries/Animated/src/Easing';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default function App() {
  const [value, onChangeText] = React.useState('Enter....')
 const imageUri = {uri: 'https://codehs.com/uploads/25114fadc49e1a4116d3821be81724eb'}
 const search = {uri: 'https://codehs.com/uploads/55c6938d3d45ecfb8a32916545f27306'}
  return (
   <View style ={styles.container}>
     <Image source={imageUri} style={styles.imageContain}/>
   
    <View style ={styles.container2}>
    <TextInput style ={styles.inputField}
     onChangeText = {(text) => onChangeText(text)}
     value = {value}
     />
    <TouchableHighlight onPress ={() =>{
      if(value == 'Enter....' || value == ""){
        alert("You Didn't Search for anything!")
      }else{
        alert(`You Searched for ${value}`)
      }
    }}>
    <Image source={search} style={styles.image2}/>
    </TouchableHighlight>
    </View>
     
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  inputField:{
    borderColor:'gray',
    backgroundColor:'lightgray',
    borderWidth:1,
    width:deviceWidth/2,
    height:deviceHeight/34,
    color:'gray',
    borderRadius:50,
    textAlign:'center'
  },
  imageContain:{
    height:67,
    width:200
  },
  imagebackground:{
    backgroundColor:'blue'
  },
  container2:{
    flexDirection:'row'
  },
  image2:{
    backgroundColor:'blue',
    height:25,
    width:25,
    borderRadius:25
  }

});

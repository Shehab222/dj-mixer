import React, { Component } from 'react';
import { Button, View, Text,TouchableOpacity} from 'react-native';
import {Audio} from "expo-av"


class AnyColorButton extends Component {
  
  

  displayAlert=()=>{
alert("this is an alert");
  }
  playSound = async () => {
     await Audio.Sound.createAsync(
      {uri:'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3'},
      {shouldPlay:true}
     )
  }
  
  render(){
    return(
      
      <Button color={this.props.color} title={this.props.title} onPress={this.displayAlert} />
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <View>

      <TouchableOpacity style={{
      
       backgroundColor:'purple',
       height:100,
       width:100,
       alignItems: 'center',
       marginLeft:0,
       justifyContent: 'center',
       borderWidth: 4,
       borderRadius: 50,

       
       
       }}>
        <AnyColorButton title="SOUND 1" color="purple"/>
      </TouchableOpacity>  

         <TouchableOpacity style={{
           backgroundColor:'pink',
       marginTop:50,
       height:100,
       width:100,
       alignItems: 'center',
       marginLeft:216,
       justifyContent: 'center',
       borderWidth: 4,
       borderRadius: 50


         }}>
        <AnyColorButton title="SOUND 2"color="pink"/>
       
        </TouchableOpacity>



          <TouchableOpacity style={{
            marginTop: 50,
            backgroundColor:'teal',
       height:100,
       width:100,
       alignItems: 'center',
       marginLeft:0,
       justifyContent: 'center',
       borderWidth: 4,
       borderRadius: 50
    // }}onPress={()=> {
    // // var uri=
    // // 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3'
            

    //         this.playsound(playSound);
                   }} onPress={this.playSound}>
         <AnyColorButton  title="SOUND 3"color="teal"/>
         
         </TouchableOpacity>



           <TouchableOpacity style={{
             marginTop: 50,
             backgroundColor:'blue',
       height:100,
       width:100,
       alignItems: 'center',
       marginLeft:216,
       justifyContent: 'center',
       borderWidth: 4,
       borderRadius: 50
             }}>
          <AnyColorButton title ="SOUND 4 "color="blue"/>
          </TouchableOpacity>
      </View>
     
    );
  }
}
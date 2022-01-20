import * as React from 'react';
import { useState } from "react";
import { Text, View, StyleSheet, TouchableHighlight, Dimensions } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  
  var interval;
 
  const goForward = () => {
    interval = setInterval(function(){
      if (this.box.style){
        this.box.style.top = (Number(this.box.style.top.replace("px", "")) - 1) + "px"
      } else {
        this.box.measureLayout(this.bx, (x, y, width, height) => this.box.setNativeProps({top: y-1}))
      }
    },50)
  }
  
  const goRight = () => {
    interval = setInterval(function(){
      if (this.box.style){
        this.box.style.left = (Number(this.box.style.left.replace("px", "")) + 1) + "px"
      } else {
        this.box.measureLayout(this.bx, (x, y, width, height) => this.box.setNativeProps({left: x+1}))
      }
    },50)
  }
  
  const goBack = () => {
    interval = setInterval(function(){
      if (this.box.style){
        this.box.style.top = (Number(this.box.style.top.replace("px", "")) + 1) + "px"
      } else {
        this.box.measureLayout(this.bx, (x, y, width, height) => this.box.setNativeProps({top: y+1}))
      }
    },50)
  }
  
  const goLeft = () => {
    interval = setInterval(function(){
      if (this.box.style){
        this.box.style.left = (Number(this.box.style.left.replace("px", "")) - 1) + "px"
      } else {
        this.box.measureLayout(this.bx, (x, y, width, height) => this.box.setNativeProps({left: x-1}))
      }
    },50)
  }
  
  const stop = () => {
    clearInterval(interval)
  }

  const buttonA = () => {}
  const buttonB = () => {}
  const buttonC = () => {}
  const buttonD = () => {}

  return (
    <View>
      <View ref={c => this.bx = c} style={{ top:0, height: windowHeight-100, width: windowWidth, backgroundColor: "#c6fffe" }}>
        <View style={{ height: 70, width: 70, backgroundColor: "#ff006c", top:400, left: 132 }}
        ref={c => this.box = c}></View>
      </View>
      <View style={{ width: windowWidth, height:100, backgroundColor: "#62c6dd" }}>
        <View style={{ height: 30, width: 15, top: 15, left: 50 }}>
          <TouchableHighlight onPressIn={goForward} onPressOut={stop}>
            <View style={{ height: 30, width: 15, backgroundColor: "black", opacity: 0.3 }}>
            </View>
          </TouchableHighlight>
        </View>
        <View style={{ height: 15, width: 30, top: 15, left: 70 }}>
          <TouchableHighlight onPressIn={goRight} onPressOut={stop}>
            <View style={{ height: 15, width: 30, backgroundColor: "black", opacity: 0.3 }}>
            </View>
          </TouchableHighlight>
        </View>
        <View style={{ height: 15, width: 30, top: 0, left: 15 }}>
          <TouchableHighlight onPressIn={goLeft} onPressOut={stop}>
            <View style={{ height: 15, width: 30, backgroundColor: "black", opacity: 0.3 }}>
            </View>
          </TouchableHighlight>
        </View>
        <View style={{ height: 30, width: 15, top: 0, left: 50 }}>
          <TouchableHighlight onPressIn={goBack} onPressOut={stop}>
            <View style={{ height: 30, width: 15, backgroundColor: "black", opacity: 0.3 }}>
            </View>
          </TouchableHighlight>
        </View>
        <View style={{ height: 25, width: 25, borderRadius: 50, top: -75, left: 250 }}>
          <TouchableHighlight onPress={buttonA}>
            <View style={{ height: 25, width: 25, borderRadius: 50, backgroundColor: "black", opacity: 0.3 }}>
            </View>
          </TouchableHighlight>
        </View>
        <View style={{ height: 25, width: 25, borderRadius: 50, top: -75, left: 275 }}>
          <TouchableHighlight onPress={buttonB}>
            <View style={{ height: 25, width: 25, borderRadius: 50, backgroundColor: "black", opacity: 0.3 }}>
            </View>
          </TouchableHighlight>
        </View>
        <View style={{ height: 25, width: 25, borderRadius: 50, top: -100, left: 225 }}>
          <TouchableHighlight onPress={buttonC}>
            <View style={{ height: 25, width: 25, borderRadius: 50, backgroundColor: "black", opacity: 0.3 }}>
            </View>
          </TouchableHighlight>
        </View>
        <View style={{ height: 25, width: 25, borderRadius: 50, top: -100, left: 250 }}>
          <TouchableHighlight onPress={buttonD}>
            <View style={{ height: 25, width: 25, borderRadius: 50, backgroundColor: "black", opacity: 0.3 }}>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsGroup: {
    flex: 1,
    flexDirection: "col",
    justifyContent: 'center',
    padding: 8,
  }
});

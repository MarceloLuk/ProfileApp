/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Content, Button } from 'native-base';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import ScrollableTabView, {DefaultTabBar } from 'react-native-scrollable-tab-view';


export default class HeaderInit extends Component {
  render() {
    return (
      <ParallaxScrollView
      backgroundColor="white"
      contentBackgroundColor="white"
      stickyHeaderHeight={ 70 }
     parallaxHeaderHeight={ 179 }
      renderForeground={() => (
        <View style={{ height: 90, flex: 1}}>
          <View style={styles.bgImageWrapper}>
            <Text style={styles.title}>Perfil</Text>
            <Button style={styles.buttonsFlaotRight}><Icon name='plus' style={{color: '#FFFFFF'}}/></Button>
            <Button style={styles.buttonsFlaotLeft}><Icon name='envelope' style={{color: '#FFFFFF'}}/></Button>
            <Image source={require('../assets/img/imageproxy.jpg')} style={styles.bgImage} />
            <Image source={require('../assets/img/eu.jpeg')} style={styles.avatar} />
          </View>
          <View style={styles.bgProfile}>
              <Text style={styles.name}>
                  Marcelo Oliveira
              </Text>
          </View>
        </View>

      )}
      renderFixedHeader={() => (
        <View >
          <Text >
            ASUDHASUDH UASHDUASDH HASDUHA UASHDASHUDSAD
          </Text>
        </View>
      )}
      renderStickyHeader={() => (
        <View style={styles.bgProfileMin}>
            <Image source={require('../assets/img/eu.jpeg')} style={styles.avatarMin} />
            <Text style={styles.nameMin}>
                Marcelo Oliveira
            </Text>
        </View>
      )}>
      <View style={{ height: 500 }}>
        <ScrollableTabView
          style={{marginTop:0, overflow:'hidden'}}
          renderTabBar={() => <DefaultTabBar />}
        >
          <Text tabLabel='Tab #1'>My</Text>
          <Text tabLabel='Tab #2 '>favorite </Text>
          <Text tabLabel='Tab #3'>project </Text>
        </ScrollableTabView>
      </View>
    </ParallaxScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    position: 'absolute',
    alignSelf: 'center',
    zIndex:10,
    color: '#FFFFFF',
    flex: 1,
    left:20,
    fontSize:30,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  avatar: {
    width:80,
    height:80,
    borderRadius:40,
    bottom:0,
    top:90,
    zIndex:10,
    position: 'absolute',
    margin: 0,
    left:10,
    marginRight:10
  },
  buttonsFlaotLeft:{
    position: 'absolute',
    width:50,
    height:50,
    borderRadius:25,
    backgroundColor: '#2A83F2',
    shadowColor:'#000000',
    elevation: 10,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    top:10,
    right:80
  },
  buttonsFlaotRight:{
    position: 'absolute',
    width:50,
    height:50,
    backgroundColor: '#6DAF4E',
    borderRadius:25,
    top:10,
    right: 20
  },
  name: {
    flex: 1,
    width:100,
    fontSize: 18,
    textAlign: 'left',
    marginTop:5,
    marginBottom:30,
    fontWeight: 'bold',
    margin: 10,
    left: 90,
  },
  avatarMin: {
    width:40,
    height:40,
    borderRadius:20,
    bottom:0,
    margin: 10,
  },
  nameMin: {
    flex: 1,
    width:100,
    fontSize: 15,
    textAlign: 'left',
    fontWeight: 'bold',
    marginTop:20,
    margin: 10,
  },
  bgProfile:{
    marginTop:120,
     flexDirection: 'row',
    backgroundColor: '#FFFFFF',
  },
  bgProfileMin:{
     flexDirection: 'row',
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  bgImageWrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  bgImage: {
    flex: 1,
      width: null,
      height: null,
      resizeMode: 'cover'
  }
});

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
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import ScrollableTabView, {DefaultTabBar } from 'react-native-scrollable-tab-view';


export default class HeaderInit extends Component {
  render() {
    return (
      <ParallaxScrollView
      backgroundColor="white"
      contentBackgroundColor="white"
      stickyHeaderHeight={ 70 }
     parallaxHeaderHeight={ 200 }
      renderForeground={() => (
        <View style={{ height: 100, flex: 1}}>
          <View style={styles.bgImageWrapper}>
            <Image source={require('../assets/img/imageproxy.jpg')} style={styles.bgImage} />
          </View>
          <View style={styles.bgProfile}>
              <Image source={require('../assets/img/eu.jpeg')} style={styles.avatar} />
              <Text style={styles.name}>
                  Marcelo Gomes de Oliveira
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
                Marcelo Gomes de Oliveira
            </Text>
        </View>
      )}>
      <View style={{ height: 500 }}>
        <ScrollableTabView
          style={{marginTop: 20, overflow:'hidden'}}
          renderTabBar={() => <DefaultTabBar />}
        >
          <Text tabLabel='Tab #1'>My</Text>
          <Text tabLabel='Tab #2 aaaaaaaaaaaa'>favorite aaaaaaaaaaaa</Text>
          <Text tabLabel='Tab #3'>project ccccccccccccc</Text>
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
  avatar: {
    width:60,
    height:60,
    borderRadius:30,
    bottom:0,
    margin: 15,
  },
  name: {
    flex: 1,
    width:100,
    fontSize: 18,
    textAlign: 'left',
    marginTop:30,
    margin: 10,
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

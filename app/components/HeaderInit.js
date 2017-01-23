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
import ScrollableTabView, {ScrollableTabBar } from 'react-native-scrollable-tab-view';
import Overview from './pages/Overview';
import Experience from './pages/Experience';
import Skills from './pages/Skills';


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
            <Button style={styles.buttonsFlaotRight}><Icon name='plus' style={{color: '#FFFFFF'}}/></Button>
            <Button style={styles.buttonsFlaotLeft}><Icon name='envelope' style={{color: '#FFFFFF'}}/></Button>
            <Image source={require('../assets/img/coffee.jpg')} style={styles.bgImage} />
            <Image source={require('../assets/img/eu.jpeg')} style={styles.avatar} />
          </View>
          <View style={styles.bgProfile}>
              <Text style={styles.name}>
                  Marcelo Oliveira
              </Text>
              <Text style={styles.noteName} note>Desenvolvedor</Text>
          </View>
        </View>

      )}
      renderStickyHeader={() => (
        <View style={styles.bgProfileMin}>
            <Image source={require('../assets/img/eu.jpeg')} style={styles.avatarMin} />
            <Text style={styles.nameMin}>
                Marcelo Oliveira
            </Text>
            <Button style={styles.buttonsFlaotRightMin}><Icon name='plus' style={{color: '#FFFFFF'}}/></Button>
            <Button style={styles.buttonsFlaotLeftMin}><Icon name='envelope' style={{color: '#FFFFFF'}}/></Button>
        </View>
      )}>
      <View style={{ minHeight: 500 }}>
        <ScrollableTabView
          renderTabBar={() => <ScrollableTabBar
            style={styles.tabs} />}
            tabBarTextStyle={{
              color: '#000000'
            }}
            tabBarUnderlineStyle={styles.underlineTabs}
        >
        <Overview tabLabel="Perfil"/>
        <Experience tabLabel="Experiência"/>
        <Skills tabLabel="Competências"/>
        <Text tabLabel='Tab #3 word word word' >project</Text>
        <Text tabLabel='Tab #4 word word word word' >favorite</Text>
        <Text tabLabel='Tab #5'>project</Text>
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
    top:10,
    right:80
  },
  buttonsFlaotRight:{
    position: 'absolute',
    width:50,
    height:50,
    backgroundColor: '#72AE4A',
    borderRadius:25,
    top:10,
    right: 20
  },
  buttonsFlaotLeftMin:{
    position: 'absolute',
    width:40,
    height:40,
    borderRadius:20,
    backgroundColor: '#2A83F2',
    shadowColor:'#000000',
    top:10,
    right:70
  },
  buttonsFlaotRightMin:{
    position: 'absolute',
    width:40,
    height:40,
    backgroundColor: '#72AE4A',
    borderRadius:20,
    top:10,
    right: 20
  },
  name: {
    fontSize: 18,
    textAlign: 'left',
    marginTop:5,
    fontWeight: 'bold',
    left: 100,
  },
  noteName:{
    textAlign: 'left',
    left: 100,
    marginBottom:20,
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
  },
  tabs:{
    borderBottomWidth:0,
    marginLeft:10,
    marginRight:10,
    borderBottomColor: '#34CCFE'
  },
  underlineTabs: {
    backgroundColor: '#90BCEB'
  }
});

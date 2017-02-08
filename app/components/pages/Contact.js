/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Content, Card, CardItem, Text } from 'native-base';
import ProgressBarClassic from 'react-native-progress-bar-classic';


export default class Contact extends Component {
  openGithub () {
    Linking.openURL('https://github.com/MarceloLuk');
  }

  openLinkedin () {
    Linking.openURL('https://br.linkedin.com/in/marcelo-gomes-16935437');
  }

  openFacebook () {
    Linking.openURL('https://fb.com/marcelogd');
  }

  openTwitter () {
    Linking.openURL('https://twitter.com/marcelo_luk');
  }
  render() {
    return (
      <Container style={styles.contentBox}>
          <Content>
              <Card>
                <CardItem>
                  <TouchableOpacity onPress={this.openGithub}>
                      <Text> <Icon name="github" style={{  fontSize:25 }} />   Github</Text>
                  </TouchableOpacity>
                </CardItem>
                <CardItem>
                  <TouchableOpacity onPress={this.openLinkedin}>
                      <Text> <Icon name="linkedin-square" style={{ color: '#1683BB', fontSize:25 }} />   Linkedin</Text>
                  </TouchableOpacity>
                </CardItem>
                <CardItem>
                  <TouchableOpacity onPress={this.openFacebook}>
                      <Text> <Icon name="facebook-square" style={{ color: '#4B66A1', fontSize:25 }} />   Facebook</Text>
                  </TouchableOpacity>
                </CardItem>
                <CardItem>
                  <TouchableOpacity onPress={this.openTwitter}>
                    <Text> <Icon name="twitter-square" style={{ color: '#1DA1F2', fontSize:25 }} />   Twitter</Text>
                  </TouchableOpacity>
                </CardItem>
             </Card>
          </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  contentBox: {
    backgroundColor: '#EFEFF7',
    padding:15,
    borderWidth:0,
  },
  title: {
    margin:10,
    fontSize:18,
    fontWeight: 'bold',
    color:'#666666'
  },
  speakerAvatar: {
    resizeMode: 'contain',
    width:35,
    height:50,
  },
  boxShadow: {
    borderWidth: .5,
    paddingLeft: 15,
    paddingRight: 15,
    flex: 1,
    borderRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius:5,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 10
  },
  ajusteText: {
      textAlign: 'justify',
      color:'#666666'
  },
  colorText:{
    color:'#666666',
  },
  columnSkill: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  timeContainer: {
    width: 40
  },
  details: {
    flexDirection: 'column',
    flex: 1,
    zIndex:10,
    marginLeft: 20,
    marginTop:10
  }
});

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
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Content, Card, CardItem, Text } from 'native-base';
import ProgressBarClassic from 'react-native-progress-bar-classic';


export default class Skills extends Component {
  render() {
    return (
      <Container style={styles.contentBox}>
          <Content>
              <Card style={styles.boxShadow}>
                  <CardItem>
                    <Text style={styles.title}>Nivel de conhecimento</Text>
                  </CardItem>
                  <CardItem>
                    <Image style={styles.speakerAvatar} source={require('../../assets/img/php-7.png')} />
                    <ProgressBarClassic
                      progress={100}
                      valueStyle={'default'}
                    />
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
  }
});

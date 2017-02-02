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
                    <View style={styles.columnSkill}>
                      <View>
                        <Image style={styles.speakerAvatar} source={require('../../assets/img/php-7.png')} />
                      </View>
                      <View style={styles.details}>

                      <Text>PHP</Text>
                        <ProgressBarClassic
                          progress={100}
                          valueStyle={'balloon'}
                        />
                      </View>
                    </View>

                    <View style={styles.columnSkill}>
                      <View>
                        <Image style={{resizeMode: 'contain',
                        width:35,
                        height:60}} source={require('../../assets/img/symfony.png')} />
                      </View>
                      <View style={styles.details}>
                      <Text>Symfony</Text>
                        <ProgressBarClassic
                          progress={100}
                          valueStyle={'balloon'}
                        />
                      </View>
                    </View>

                    <View style={styles.columnSkill}>
                      <View>
                        <Image style={{resizeMode: 'contain',
                        width:35,
                        height:60}} source={require('../../assets/img/github.png')} />
                      </View>
                      <View style={styles.details}>
                      <Text>Github</Text>
                        <ProgressBarClassic
                          progress={100}
                          valueStyle={'balloon'}
                        />
                      </View>
                    </View>

                    <View style={styles.columnSkill}>
                      <View>
                        <Image style={{resizeMode: 'contain',
                        width:35,
                        height:60}} source={require('../../assets/img/reactNe.png')} />
                      </View>
                      <View style={styles.details}>
                      <Text>React Native</Text>
                        <ProgressBarClassic
                          progress={100}
                          valueStyle={'balloon'}
                        />
                      </View>
                    </View>

                    <View style={styles.columnSkill}>
                      <View>
                        <Image style={{resizeMode: 'contain',
                        width:35,
                        height:60}} source={require('../../assets/img/2.png')} />
                      </View>
                      <View style={styles.details}>
                      <Text>Ionic 2</Text>
                        <ProgressBarClassic
                          progress={100}
                          valueStyle={'balloon'}
                        />
                      </View>
                    </View>

                    <View style={styles.columnSkill}>
                      <View>
                        <Image style={{resizeMode: 'contain',
                        width:35,
                        height:60}} source={require('../../assets/img/mq1.png')} />
                      </View>
                      <View style={styles.details}>
                      <Text>AngularJs</Text>
                        <ProgressBarClassic
                          progress={100}
                          valueStyle={'balloon'}
                        />
                      </View>
                    </View>

                    <View style={styles.columnSkill}>
                      <View>
                        <Image style={{resizeMode: 'contain',
                        width:35,
                        height:60}} source={require('../../assets/img/postgres.png')} />
                      </View>
                      <View style={styles.details}>
                      <Text>Postgres</Text>
                        <ProgressBarClassic
                          progress={90}
                          color='#efef23'
                          style={{backgroundColor:'#666666'}}
                          valueStyle={'balloon'}
                        />
                      </View>
                    </View>

                    <View style={styles.columnSkill}>
                      <View>
                        <Image style={{resizeMode: 'contain',
                        width:35,
                        height:60}} source={require('../../assets/img/linux.png')} />
                      </View>
                      <View style={styles.details}>
                      <Text>Linux</Text>
                        <ProgressBarClassic
                          progress={90}
                          color='#efef23'
                          style={{backgroundColor:'#666666'}}
                          valueStyle={'balloon'}
                        />
                      </View>
                    </View>

                    <View style={styles.columnSkill}>
                      <View>
                        <Image style={{resizeMode: 'contain',
                        width:35,
                        height:60}} source={require('../../assets/img/docker.png')} />
                      </View>
                      <View style={styles.details}>
                      <Text>Docker</Text>
                        <ProgressBarClassic
                          progress={80}
                          color='#efef23'
                          style={{backgroundColor:'#666666'}}
                          valueStyle={'balloon'}
                        />
                      </View>
                    </View>

                    <View style={styles.columnSkill}>
                      <View>
                        <Image style={{resizeMode: 'contain',
                        width:35,
                        height:60}} source={require('../../assets/img/sql.png')} />
                      </View>
                      <View style={styles.details}>
                      <Text>SQL</Text>
                        <ProgressBarClassic
                          progress={80}
                          color='#efef23'
                          style={{backgroundColor:'#666666'}}
                          valueStyle={'balloon'}
                        />
                      </View>
                    </View>

                    <View style={styles.columnSkill}>
                      <View>
                        <Image style={{resizeMode: 'contain',
                        width:35,
                        height:60}} source={require('../../assets/img/python.png')} />
                      </View>
                      <View style={styles.details}>
                      <Text>Python</Text>
                        <ProgressBarClassic
                          progress={50}
                          color='#efef23'
                          style={{backgroundColor:'#666666'}}
                          valueStyle={'balloon'}
                        />
                      </View>
                    </View>

                    <View style={styles.columnSkill}>
                      <View>
                        <Image style={{resizeMode: 'contain',
                        width:35,
                        height:60}} source={require('../../assets/img/reactNe.png')} />
                      </View>
                      <View style={styles.details}>
                      <Text>React.js</Text>
                        <ProgressBarClassic
                          progress={50}
                          color='#efef23'
                          style={{backgroundColor:'#666666'}}
                          valueStyle={'balloon'}
                        />
                      </View>
                    </View>
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

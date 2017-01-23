/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Animated,
  Easing,
  ListView,
  Image,
  View,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Content, Card, CardItem, Text } from 'native-base';


export default class Experience extends Component {
  render() {
    return (
      <Container style={styles.contentBox}>
          <Content>
              <Card style={styles.boxShadow}>
                  <CardItem>
                    <View style={styles.row}>
                      <View style={styles.timeContainer}>
                        <Text style={styles.timeText}>2017</Text>
                            <View style={[styles.circle]}></View>
                      </View>
                      <View style={styles.details}>

                       <Image style={styles.speakerAvatar} source={require('../../assets/img/xys.png')} />
                          <View style={styles.speakerInfo}>
                         <View style={styles.speakerDescription}>
                           <Text style={styles.title}>Analista Desenvolvedor PHP Sênior</Text>
                           <Text style={styles.speakerName}>Desenvolvimento de sistemas web em PHP utilizando symfony 2 e angular bem como desenvolvimento mobile da plataforma na xys.com.br.</Text>
                         </View>
                       </View>
                        <View style={styles.separator}></View>
                      </View>
                    </View>

                    <View style={styles.row}>
                      <View style={styles.timeContainer}>
                        <Text style={styles.timeText}>2012</Text>
                            <View style={[styles.circle]}></View>
                      </View>
                      <View style={styles.details}>

                       <Image style={styles.speakerAvatarCtis} source={require('../../assets/img/ctis.png')} />
                          <View style={styles.speakerInfo}>
                         <View style={styles.speakerDescription}>
                           <Text style={styles.title}>Analista Desenvolvedor PHP</Text>
                           <Text style={styles.speakerName}>Desenvolvendo sistemas web PHP em ZendFramework integrando framework PhpExt com doctrine 2 atuando nos principais projetos em php da empresa CTIS.</Text>
                         </View>
                       </View>
                        <View style={styles.separator}></View>
                      </View>
                      </View>
                      <View style={styles.row}>
                        <View style={styles.timeContainer}>
                          <Text style={styles.timeText}>2008</Text>
                              <View style={[styles.circle]}></View>
                        </View>
                        <View style={styles.details}>

                         <Image style={styles.speakerAvatarInnovix} source={require('../../assets/img/innovix.png')} />
                            <View style={styles.speakerInfo}>
                           <View style={styles.speakerDescription}>
                             <Text style={styles.title}>Analista desenvolvedor (estagiario)</Text>
                             <Text style={styles.speakerName}>Desenvolvimento de sistemas Web em PHP com banco de dados MySQL e SQL Server, Aplicativos Java (APPLETS) de comunicação com leitora RFID, e comunicação com Webcam, fui incumbido do desenvolvimento do portal da empresa. da empresa de automação INNOVIX.</Text>
                           </View>
                         </View>
                          <View style={styles.separator}></View>
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
  boxShadow: {
    borderWidth: .5,
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
  container: {
    flex: 1
  },
  // ListView
  list: {
    flex: 1
  },
  // SectionHeader
  sectionHeader: {
    marginBottom: 15,
    backgroundColor: '#05A9D6',
    height: 30,
    justifyContent: 'center'
  },
  sectionHeaderText: {
    color: '#FFF',
    fontSize: 18,
    alignSelf: 'center'
  },
  // Row
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15
  },
  timeContainer: {
    width: 40
  },
  timeText: {
    color:  '#AAA',
    textAlign: 'right'
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#88C057',
    position: 'absolute',
    right: -25,
    zIndex:20,
    flex: 1,
    top: 0
  },
  details: {
    borderColor: '#AAA',
    borderLeftWidth: 1,
    flexDirection: 'column',
    flex: 1,
    zIndex:10,
    marginLeft: 20,
    paddingLeft: 20
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: '#3B3738',
    marginBottom: 6
  },
  speakerName: {
    fontSize: 12
  },
  titleSingle: {
    marginBottom: 0
  },
  speakerInfo: {
    flexDirection: 'row'
  },
  speakerAvatar: {
    width:50,
    height:20,
    marginRight: 15,
  },
  peakerAvatarCtis: {
    width:30,
    height:30,
    marginRight: 15,
  },
  peakerAvatarCtis: {
    width:60,
    height:30,
    marginRight: 15,
  },
  speakerDescription: {
    flex: 1
  },
  separator: {
    height: .5,
    backgroundColor: '#AAA',
    zIndex:10,
    marginTop: 15,
    marginBottom: 15
  }
});

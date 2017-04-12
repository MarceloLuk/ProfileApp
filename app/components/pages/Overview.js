/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Content, Card, CardItem, Text } from 'native-base';


export default class Overview extends Component {
  render() {
    return (
      <Container style={styles.contentBox}>
          <Content>
              <Card style={styles.boxShadow}>
                  <CardItem>
                    <Text style={styles.title}>Objetivo</Text>
                      <Text >
                        &nbsp;&nbsp;&nbsp; Oferecer às empresas um profissional não só
                          preparado para atuar de acordo com as tendências atuais de mercado,
                          mas também qualificado para o desenvolvimento sistemas Web e Mobile,
                          com objetivo de superar novos desafios e adquirir experiência
                      </Text>
                  </CardItem>
                  <CardItem >
                       <Text style={styles.ajusteText}><Icon name="calendar" style={{ color: '#DD5044' }} />  Data de nascimento: 15/04/1991</Text>
                  </CardItem>
                  <CardItem >
                       <Text style={styles.ajusteText}><Icon name="user-circle" style={{ color: '#DD5044' }} />  Estado civil: Casado</Text>
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

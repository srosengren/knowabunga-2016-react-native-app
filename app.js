import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  StatusBar
} from 'react-native';

import { ItemsView } from './components/ItemsView';
import Received from './components/Received';

var ws = new WebSocket('ws://knowabunga-2016-react-native.azurewebsites.net/');

function send(message){
    ws.send(JSON.stringify({type:'message',content: this.state.message,username: 'app'}));
    this.setState({message: ''});
}

export default class App extends Component {
  constructor(){
      super();
      this.state = {
          message: '',
          received: []
        };
  }
  componentDidMount(){
      ws.onmessage = e => {
          const received = this.state.received.concat([JSON.parse(JSON.parse(e.data))]); 
          this.setState({
              received: received,
          });
      }
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.messages}>
            <ItemsView items={this.state.received} 
                       renderRow={Received} 
                       enableEmptySections={true} />
        </View>
        <TextInput value={this.state.message}
                   placeholder="Type a message..."
                   style={{height: 40, borderColor: 'gray', borderWidth: 1,padding: 6}}
                   onChangeText={message => this.setState({message})} />
        <TouchableHighlight style={styles.submit} onPress={send.bind(this)}>
            <Text>Submit</Text>
        </TouchableHighlight>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
  submit: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#ccc'
  },
  messages: {
      flex: 1,
      alignSelf: 'stretch',
      backgroundColor: '#cecece',
      padding: 12
  }
});
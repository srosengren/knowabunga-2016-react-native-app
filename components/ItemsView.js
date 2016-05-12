import React, { Component } from 'react';
import {
  ListView
} from 'react-native';

export class ItemsView extends Component {
    constructor(props){
        super(props);
        this.state = {
          dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(props.items || [])  
        };
    }
    componentWillReceiveProps(props){
        this.setState({dataSource: this.state.dataSource.cloneWithRows(props.items || [])});
    }
    render(){
        return <ListView dataSource={this.state.dataSource} {...this.props} />
    }
}
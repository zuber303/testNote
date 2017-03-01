import React, { Component } from 'react';
import {
    AppRegistry,
    Navigator,
    StyleSheet,
    Text,
    View

} from 'react-native';
import Component1 from'./app/components/Component1/component1';
import Component5 from'./app/components/Component5/component5';
import Component6 from'./app/components/Component6/component6';
export default class notpad extends Component {
    renderScene(route, navigator){
        switch(route.id){
            case 'component1':
                return (<Component1 navigator={navigator} title="component1" />)
            case 'component5':
                return (<Component5 navigator={navigator} title="component5" />)
            case 'component6':
                return (<Component6 user={route.user} navigator={navigator} title="component6"/>);

        }
    }
    render(){
        return(
            <Navigator
                initialRoute={{id: 'component1'}}
                renderScene={this.renderScene}
                configureScreen={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
            />
        );
    }
}
AppRegistry.registerComponent('notpad', () => notpad);

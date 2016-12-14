/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
	Text,
	View,
	StyleSheet
} from 'react-native';


/*自定义一个组件*/
class Greeting extends Component {
	render(){
		return (
			<Text>Hello {this.props.name}!</Text>
		);
	}
}

class Blink extends Component {
	constructor(props){
		super(props);
		this.state = {showText: true};
		//每1000毫秒对showText状态做一次取反操作
		setInterval(()=>{
			this.setState({showText: !this.state.showText})
		}, 1000);
	}
	
	render(){
		let display = this.state.showText ? this.props.text : ' ';
		return (
			<Text>{display}</Text>
		)
	}
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

class MyProject extends Component {
  render() {
		let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
			<View style={{alignItems: 'center'}}>
				<Image source={pic} style={{width: 193, height: 110}} />
				<Greeting name='Rexxar'/>
				<Greeting name='Jaina'/>
				<Greeting name='Valeera'/>
				<Blink text='I love to blink'/>
				<Text style={styles.red}>just red</Text>
        <Text style={styles.bigblue}>just bigblue</Text>
        <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
			</View>
    );
  }
}

AppRegistry.registerComponent('MyProject', () => MyProject);

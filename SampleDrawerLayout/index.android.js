/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
	DrawerLayoutAndroid,
	Navigator,
	BackAndroid,
  Text,
	Button,
	TouchableOpacity,
  View
} from 'react-native';

class HomeView extends Component {
	
	constructor(props){
		super(props);
		// 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向不对
    // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
		this.onNavPress = this.onNavPress.bind(this);
	}

	onNavPress(target) {
		this.props.navigator.push({name: target});
	}
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title} onPress={() => alert('这是首页的内容！')}>首页view</Text>
				<View style={styles.flexColumn}>
					<Text style={styles.button} onPress={() => this.onNavPress('message')}>跳转到 [消息]</Text>
					<Text style={styles.button} onPress={() => this.onNavPress('discover')}>跳转到 [发现]</Text>
					<Text style={styles.button} onPress={() => this.onNavPress('user')}>跳转到 [我的]</Text>
				</View>
			</View>
		);
	}
}

class MessageView extends Component {
	
	constructor(props){
		super(props);
		// 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向不对
    // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
		this.goBack = this.goBack.bind(this);
	}
	
	goBack(){
		this.props.navigator.pop();
	}
	
	
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>消息view</Text>
				<View style={styles.flexColumn}>
					<Text style={styles.button} onPress ={this.goBack}>后退</Text>
				</View>
			</View>
		);
	}
}

class DiscoverView extends Component {
	
	constructor(props){
		super(props);
		// 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向不对
    // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
		this.goBack = this.goBack.bind(this);
	}
	
	goBack(){
		this.props.navigator.pop();
	}
	
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>发现view</Text>
				<View style={styles.flexColumn}>
					<Text style={styles.button} onPress ={this.goBack}>后退</Text>
				</View>
			</View>
		);
	}
}

class UserView extends Component {
	constructor(props){
		super(props);
		// 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向不对
    // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
		this.goBack = this.goBack.bind(this);
	}
	
	goBack(){
		this.props.navigator.pop();
	}
	
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>我的view</Text>
				<View style={styles.flexColumn}>
					<Text style={styles.button} onPress ={this.goBack}>后退</Text>
				</View>
			</View>
		);
	}
}

var _navigator; //用来保存navigator
//监听后退按钮的press事件，用来回退页面
BackAndroid.addEventListener('hardwareBackPress', () => {
    if (_navigator.getCurrentRoutes().length === 1) {
        return false;
    }
    _navigator.pop();
    return true;
});

export default class SampleDrawerLayout extends Component {
	
	onNavPress(target) {
    _navigator.push({
      name: target
    });
    //关闭drawer
    this.refs['DRAWER'].closeDrawer();
	}
	
	configureScene() {
		return Navigator.SceneConfigs.FloatFromRight;
	}
	
	renderScene(router, navigator) {
		var Component = null;
    _navigator = navigator;
		switch (router.name) {
			case 'home':
				Component = HomeView;
				break;
			case 'message':
				Component = MessageView;
				break;
			case 'discover':
				Component = DiscoverView;
				break;
			case 'user':
				Component = UserView;
				break;
		}
		//注意这里将navigator作为属性props传递给了各个场景组件
		return <Component navigator = {navigator} />;
	}
	
  render() {
		var navigationView = (
			<View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center',}}>
				<Text style={styles.button} onPress={() => this.onNavPress('home')}>[首页]</Text>
				<Text style={styles.button} onPress={() => this.onNavPress('message')}>[消息]</Text>
				<Text style={styles.button} onPress={() => this.onNavPress('discover')}>[发现]</Text>
				<Text style={styles.button} onPress={() => this.onNavPress('user')}>[我的]</Text>
			</View>
		);
    return (
      <DrawerLayoutAndroid
				ref={'DRAWER'}
				drawerWidth = {200}
				drawerPosition = {DrawerLayoutAndroid.positions.Left}
				renderNavigationView = {() => navigationView}>
				<Navigator
					initialRoute = {{name: 'home'}}
					configureScene = {this.configureScene}
					renderScene = {this.renderScene}>
				</Navigator>
			</DrawerLayoutAndroid>
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
	flexColumn: {
		flex: 1, 
		flexDirection: 'column', 
		justifyContent: 'space-around', 
		alignItems: 'center',
	},
	button: {
		height: 40,
		width: 200,
		//alignSelf: 'stretch',
		backgroundColor: 'green',
		justifyContent: 'center',
		textAlign: 'center',
		textAlignVertical: 'center',
		color: 'white',
	},
	title: {
		height: 50,
		fontSize: 20,
		alignSelf: 'stretch',
		textAlign: 'left',
		color: 'white',
		backgroundColor: 'blue',
		textAlignVertical: 'center',
	}
});

AppRegistry.registerComponent('SampleDrawerLayout', () => SampleDrawerLayout);

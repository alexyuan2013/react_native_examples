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
	TextInput,
	ScrollView,
	ListView,
	Navigator,
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
		<View style={{alignItems: 'center', flex:1}}>
			<Image source={pic} style={{width: 193, height: 110}} />
			<Greeting name='Rexxar'/>
			<Greeting name='Jaina'/>
			<Greeting name='Valeera'/>
			<Blink text='I love to blink'/>
			<Text style={styles.red}>just red</Text>
			<Text style={styles.bigblue}>just bigblue</Text>
			<Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
			<Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
			<View style={{flex: 1, backgroundColor: 'powderblue'}} />
			<View style={{flex: 2, backgroundColor: 'skyblue'}} />
			<View style={{flex: 3, backgroundColor: 'steelblue'}} />
		</View>
    );
  }
}

class FlexDimensionsBasics extends Component {
  render() {
    return (
      // 试试去掉父View中的`flex: 1`。
      // 则父View不再具有尺寸，因此子组件也无法再撑开。
      // 然后再用`height: 300`来代替父View的`flex: 1`试试看？
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}; 

class FlexDirectionBasics extends Component {
  render() {
    return (
      // 尝试把`flexDirection`改为`column`看看
			<View>
				<View style={{flex: 1, flexDirection: 'row'}}>
					<View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
					<View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
					<View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
				</View>
				<View style={{flex: 1, flexDirection: 'column',justifyContent: 'flex-start',alignItems: 'center'}}>
					<View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
					<View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
					<View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
				</View>
			</View>
    );
  }
};
/**
TextInput是一个允许用户输入文本的基础组件。
它有一个名为onChangeText的属性，此属性接受一个函数，而此函数会在文本变化时被调用。
另外还有一个名为onSubmitEditing的属性，会在文本被提交后（用户按下软键盘上的提交键）调用。
*/
class PizzaTranslator extends Component {
	constructor(props) {
		super(props);
		this.state = {text: ''};
	}
	render() {
		return(
		<View style={{padding:10}}>
			<TextInput style={{height:40}} placeholder="Type here to translate!" onChangeText={(text) => this.setState({text})}/>
			<Text style={{padding: 10, fontSize: 42}}>
				{this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
			</Text>
		</View>);
	}
}
/**ScrollView适合用来显示数量不多的滚动元素。
放置在ScollView中的所有组件都会被渲染，
哪怕有些组件因为内容太长被挤出了屏幕外。
如果你需要显示较长的滚动列表，
那么应该使用功能差不多但性能更好的ListView组件。*/
class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  render() {
      return(
        <ScrollView>
          <Text style={{fontSize:26}}>Scroll me plz</Text>
          <Image source={require('./img/cloud.png')} />
          <Image source={require('./img/rain.png')} />
          <Image source={require('./img/snow.png')} />
          <Image source={require('./img/sun.png')} />
          <Image source={require('./img/thunder.png')} />
          <Text style={{fontSize:26}}>If you like</Text>
          <Image source={require('./img/cloud.png')} />
          <Image source={require('./img/rain.png')} />
          <Image source={require('./img/snow.png')} />
          <Image source={require('./img/sun.png')} />
          <Image source={require('./img/thunder.png')} />
          <Text style={{fontSize:26}}>Scrolling down</Text>
          <Image source={require('./img/cloud.png')} />
          <Image source={require('./img/rain.png')} />
          <Image source={require('./img/snow.png')} />
          <Image source={require('./img/sun.png')} />
          <Image source={require('./img/thunder.png')} />
          <Text style={{fontSize:26}}>What's the best</Text>
          <Image source={require('./img/cloud.png')} />
          <Image source={require('./img/rain.png')} />
          <Image source={require('./img/snow.png')} />
          <Image source={require('./img/sun.png')} />
          <Image source={require('./img/thunder.png')} />
          <Text style={{fontSize:26}}>Framework around?</Text>
          <Image source={require('./img/cloud.png')} />
          <Image source={require('./img/rain.png')} />
          <Image source={require('./img/snow.png')} />
          <Image source={require('./img/sun.png')} />
          <Image source={require('./img/thunder.png')} />
          <Text style={{fontSize:26}}>React Native</Text>
        </ScrollView>
    );
  }
}
/*ListView组件用于显示一个垂直的滚动列表，
其中的元素之间结构近似而仅数据不同。

ListView更适于长列表数据，
且元素个数可以增删。和ScrollView不同的是，
ListView并不立即渲染所有元素，而是优先渲染屏幕上可见的元素。

ListView组件必须的两个属性是dataSource和renderRow。
dataSource是列表的数据源，而renderRow则逐个解析数据源中的数据，
然后返回一个设定好格式的组件来渲染。*/
class ListViewBasic extends Component {
	//初始化模拟数据
	constructor(props) {
		super(props);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !==r2});
		this.state = {
			dataSource: ds.cloneWithRows([
				'Jonh', 'Joel', 'James', 'Jimmy', 'Jillian', 'Julie', 'Devin',
				'Jonh', 'Joel', 'James', 'Jimmy', 'Jillian', 'Julie', 'Devin',
				'Jonh', 'Joel', 'James', 'Jimmy', 'Jillian', 'Julie', 'Devin',
				'Jonh', 'Joel', 'James', 'Jimmy', 'Jillian', 'Julie', 'Devin',
				'Jonh', 'Joel', 'James', 'Jimmy', 'Jillian', 'Julie', 'Devin',
				'Jonh', 'Joel', 'James', 'Jimmy', 'Jillian', 'Julie', 'Devin'
			])
		};
	}
	render() {
		return (
			<View style={{flex:1, paddingTop:22}}>
				<ListView dataSource={this.state.dataSource} renderRow={(rowData) => <Text style={{fontSize:22}}>{rowData}</Text>}/>
			</View>
		);
	}
}

import MyScene from './MyScene';
/*
首先要做的是渲染一个Navigator组件，
然后通过此组件的renderScene属性方法来渲染其他场景。
*/
class SimpleNavigationApp extends Component {
	render(){
		return (
			<Navigator
				initialRoute={{title:'My Initial Scene', index: 0}}
				renderScene={(route, navigator) => 
					<MyScene 
						title={route.title}
						// Function to call when a new scene should be displayed           
            onForward={ () => {    
              const nextIndex = route.index + 1;
              navigator.push({
                title: 'Scene ' + nextIndex,
                index: nextIndex,
              });
            }}

            // Function to call to go back to the previous scene
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
					/>
				}
			/>
		);
	}
}


class SimpleFetchApp extends Component {
	//初始化模拟数据
	constructor() {
		super();
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !==r2});
		this.state = {dataSource: ds.cloneWithRows(['init']), loaded: false};
	}
	//当component渲染完成后执行
	//从后台拉取数据，并且重新设置数据源
	componentDidMount() {
		fetch('http://www.smartnari.com:3000/api/onlineusers')
		.then((response) => response.json())
		.then((responseData) => {
			this.setState({
				dataSource: this.state.dataSource.cloneWithRows(responseData), loaded: true
			});
		})
		.catch((error) => {
			console.error(error);
		})
		.done();
	}
	
	
	render() {
		if (!this.state.loaded) {
      return (<Text>Loading movies...</Text>);
    }
		return (
			<View style={{flex:1, paddingTop:22}}>
				<ListView dataSource={this.state.dataSource} renderRow={(rowData) => <Text style={{fontSize:22}}>{rowData}</Text>}/>
			</View>
		);
	}	
}


AppRegistry.registerComponent('MyProject', () => SimpleFetchApp);

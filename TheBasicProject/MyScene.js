import React, {Component, PropTypes} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

//注意组件声明前面的export default关键字。
//它的意思是导出(export)当前组件，以允许其他组件引入(import)和使用当前组件
export default class MyScene extends Component {
	static defaultProps = {
		title: PropTypes.string.isRequired,
    onForward: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired
	}
	render() {
		return (
			<View>
				<Text>Current Scene: { this.props.title }</Text>
        <TouchableHighlight onPress={this.props.onForward}>
          <Text>点我进入下一场景</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.onBack}>
          <Text>点我返回上一场景</Text>
        </TouchableHighlight> 
			</View>
		);
	}
}
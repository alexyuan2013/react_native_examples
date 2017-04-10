import React, {PropTypes} from 'react';
import { StyleSheet, Text } from 'react-native';
import AppText from './AppText';

//这种function形式的component的定义是class extends Component的一种简写
//相当于class形式中只有一个render函数；
//如果不处理其他逻辑的话，鼓励使用这种方式定义component
const SmallText = ({ chidren, style, ...rest}) => (
	<AppText style={[styles.mall, style]} {...rest}>
		{children}
	</AppText>
);

SmallText.propTypes = {
	children: PropTypes.node,
	style: Text.propTypes.style
};

const style = StyleSheet.create({
	small: {
		fontSize: 11
	}
});

export default SmallText;
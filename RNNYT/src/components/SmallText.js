import React, {PropTypes} from 'react';
import { StyleSheet, Text } from 'react-native';
import AppText from './AppText';

//����function��ʽ��component�Ķ�����class extends Component��һ�ּ�д
//�൱��class��ʽ��ֻ��һ��render������
//��������������߼��Ļ�������ʹ�����ַ�ʽ����component
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
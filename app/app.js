import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Text,
} from 'react-native';

export default class LearnRN extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputNum: '',
            inputPassword: '',
        };
    }

// shouldComponentUpdate() {
//     if (this.state.inputNum.length < 3) return false;
//     return true;
// }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    placeholder={'请输入手机号'}
                    onChangeText={(inputNum) => {
                        this.setState({inputNum})
                    }}
                />
                <Text style={styles.text}>
                    您输入的手机号：{this.state.inputNum}
                </Text>
                <TextInput
                    style={styles.textInput}
                    placeholder={'请输入密码'}
                    secureTextEntry={true}
                    onChangeText={(inputPassword) => {
                        this.setState({inputPassword})
                    }}
                />
                <Text style={styles.text}>
                    确定
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    textInput: {
        margin: 16,
        backgroundColor: 'gray',
        fontSize: 20,
    },
    text: {
        fontSize: 20,
    }
});
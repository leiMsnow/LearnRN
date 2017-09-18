/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    PixelRatio,
} from 'react-native';

const {height, width} = Dimensions.get('window');
const pixelRatio = PixelRatio.get();

export default class LearnRN extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    一逻辑像素等于{pixelRatio}实际像素单位
                </Text>
                <Text style={styles.instructions}>
                    手机屏幕高度为{height}逻辑像素
                </Text>
                <Text style={styles.instructions}>
                    手机屏幕宽度为{width}逻辑像素
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
});

AppRegistry.registerComponent('LearnRN', () => LearnRN);

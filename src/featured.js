import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

const styles = Stylesheet.create({
    description: {
        fontSize: 20,
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default class Featured extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.description}>
                    Featured Tab
                </Text>
            </View>
        );
    }
}

module.exports = Featured;

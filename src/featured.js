import React, { Component } from 'react';
import {
    StyleSheet,
    NavigatorIOS,
    View,
    Text
} from 'react-native';
import BookList from './BookList';

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

class Featured extends Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
                    title: 'Featured Books',
                    component: BookList
                }}/>
        );
    }
}

module.exports = Featured;

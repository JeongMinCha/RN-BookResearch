import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableHighlight,
    ActivityIndicatorIOS,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 65,
        padding: 10,
    },
    searchInput: {
        height: 36,
        marginTop: 10,
        marginBottom: 10,
        fontSize: 18,
        borderWidth: 1,
        flex: 1,
        borderRadius: 4,
        padding: 5,
    },
    button: {
        height: 36,
        backgroundColor: '#f39c12',
        borderRadius: 8,
        justifyContent: 'center',
        marginTop: 15,
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center',
    },
    instructions: {
        fontSize: 18,
        alignSelf: 'center',
        marginBottom: 15,
    },
    fieldLabel: {
        fontSize: 15,
        marginTop: 15,
    },
    errorMessage: {
        fontSize: 15,
        alignSelf: 'center',
        marginTop: 15,
        color: 'red',
    },
});

class SearchBooks extends Component {
    render() {
        return (
            <View>

            </View>
        );
    }
}

module.exports = SearchBooks;
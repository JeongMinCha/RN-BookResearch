import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
} from 'react-native';

var FAKE_BOOK_DATA = [
    {
        volumeInfo: {
            title: 'The Catcher in the Rye',
            authors: "J. D. Salinger",
            imageLinks: {
                thumbnail: 'http://books.google.com/books/content?id=PCDengEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
            }
        }
    }
];

const styles = StyleSheet.create({

});

class BookList extends Component {
    render() {
        return (
            <View>

            </View>
        );
    }
}

module.exports = BookList;
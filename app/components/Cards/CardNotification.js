import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import { Fonts } from '../../style';

export default class CardNotification extends Component {
    render() {
        const { style, imgSource, title, description, dateTime, onPress } = this.props;
        return (
            <TouchableOpacity
                onPress={onPress}
                style={[styles.container, style]}
            >
                <Image
                    style={styles.thumbnail}
                    source={imgSource}
                />
                <View style={styles.textContainer}>
                    <Text
                        numberOfLines={1}
                        style={styles.titleLabel}
                    >{title}</Text>
                    <Text
                        numberOfLines={2}
                        style={styles.descriptionLabel}
                    >{description}</Text>
                    <Text
                        numberOfLines={1}
                        style={styles.dateTimeLabel}
                    >{dateTime}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 100,
        alignSelf: 'stretch',
        alignItems: 'center',
    },
    thumbnail: {
        height: 100,
        width: 100,
        borderRadius: 12,
        borderTopRightRadius: 0
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
        height: 100,
        justifyContent: 'space-around',
    },
    titleLabel: {
        fontSize: 18,
        color: '#333333',
        fontFamily: Fonts.sfuiDisplaySemibold
    },
    descriptionLabel: {
        fontSize: 16,
        color: '#444444',
        fontFamily: Fonts.sfuiDisplayRegular
    },
    dateTimeLabel: {
        fontSize: 14,
        color: '#AAAAAA',
        fontFamily: Fonts.sfuiDisplayRegular
    },
});

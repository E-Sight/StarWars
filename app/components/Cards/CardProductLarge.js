/* eslint-disable global-require */
import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Platform,
    Image,
    ImageBackground
} from 'react-native';

import { Fonts, Metrics, Images } from '../../style';

const { HEIGHT } = Metrics;

export default class CardProductLarge extends Component {
    render() {
        const {
            cardStyle,
            imgSource,
            title,
            favorited,
            onPress,
            favoriteOnPress,
        } = this.props;
        return (
            <TouchableOpacity onPress={onPress} style={[styles.content, cardStyle]}>
                <ImageBackground
                    source={imgSource}
                    style={styles.img}
                    resizeMode={'cover'}
                    imageStyle={{
                        borderTopLeftRadius: 12,
                        borderTopRightRadius: 12,
                    }}
                >
                    <TouchableOpacity
                        onPress={favoriteOnPress}
                    >
                        <Image
                            style={styles.imgLike}
                            source={favorited ?
                                (Images.favorites_active) : (Images.favorites_inactive)}
                        />
                    </TouchableOpacity>
                </ImageBackground>
                <View
                    style={styles.titleView}
                >
                    <Text
                        style={styles.title}
                        numberOfLines={2}
                    >{title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: 'white',
        alignSelf: 'stretch',
        height: HEIGHT * 38 <= 260 ? HEIGHT * 38 : 260,
        borderRadius: 12,
        shadowOffset: Platform.OS === 'ios' ?
            { width: 2, height: 2 }
            : { width: 3, height: 3 },
        shadowOpacity: Platform.OS === 'ios' ? 0.3 : 0.8,
        shadowRadius: 15.0,
        elevation: Platform.OS === 'ios' ? 7.5 : 15,
        shadowColor: 'rgba(0,0,0,0.9)',
        marginBottom: 15,
    },
    img: {
        height: 190,
        alignSelf: 'stretch',
        alignItems: 'flex-end',
        padding: 10,
    },
    imgLike: {
        height: 45,
        width: 45
    },
    titleView: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        justifyContent: 'space-around',
        flex: 1
    },
    title: {
        fontFamily: Fonts.sfuiDisplayMedium,
        fontSize: 18,
        marginTop: 3
    },
});

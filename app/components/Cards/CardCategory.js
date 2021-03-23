import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    Platform,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import { Metrics, Fonts } from '../../style';

const { HEIGHT } = Metrics;

export default class CardCategory extends Component {
    render() {
        const {
            title,
            imgSource,
            textStyle,
            onPress
        } = this.props;

        return (
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={onPress}
            >
                <ImageBackground
                    style={styles.buttonImage}
                    imageStyle={{ borderRadius: 12 }}
                    source={imgSource}
                    resizeMode={'cover'}
                >
                    <LinearGradient
                        style={styles.buttonGradient}
                        start={{ x: 0.5, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={['transparent', 'white']}
                    />
                </ImageBackground>
                <Text
                    style={[styles.buttonText, textStyle]}
                    numberOfLines={2}
                >{title}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        paddingRight: 200,
        alignItems: 'center',
        backgroundColor: 'white',
        /* width: 115,
        height: 130, */
        alignSelf: 'stretch',
        height: HEIGHT * 15 <= 100 ? HEIGHT * 15 : 100,
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
    buttonImage: {
        width: 150,
        height: '100%',
        borderRadius: 12,
    },
    buttonGradient: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    buttonText: {
        marginLeft: 16,
        fontFamily: Fonts.sfuiDisplayRegular,
        fontSize: 24,
    }
});

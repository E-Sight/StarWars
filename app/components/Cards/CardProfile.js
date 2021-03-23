/* eslint-disable global-require */
import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';
import { Colors, Images, Fonts } from '../../style';

export default class CardProfile extends Component {
    render() {
        const {
            cardStyle,
            iconSource,
            title,
            labelStyle,
            onPress,
            icon,
            iconBackgroundColor
        } = this.props;
        
        return (
            <TouchableOpacity onPress={onPress} style={[styles.content, cardStyle]}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View
                        style={[styles.iconContainer, {
                            backgroundColor: iconBackgroundColor
                        }]}
                    >
                        {icon}
                        {
                            iconSource ? (<Image source={iconSource} style={styles.icon} />) : null
                        }
                    </View>
                    <Text style={[styles.label, labelStyle]}>{title}</Text>
                </View>
                <Image source={Images.right} style={styles.arrow} />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        alignSelf: 'stretch',
        height: 90,
        //paddingVertical: 18,
        borderRadius: 20,
        paddingHorizontal: 35,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconContainer: {
        borderRadius: 50,
        height: 55,
        width: 55,
        backgroundColor: Colors.mainColor,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        height: 26,
        width: 26,
    },
    label: {
        fontSize: 18,
        fontFamily: Fonts.sfuiDisplayRegular
    },
    arrow: {
        height: 30,
        width: 30
    }
});

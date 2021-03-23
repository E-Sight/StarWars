import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    StatusBar,
    TouchableWithoutFeedback,
    Platform
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

import { Fonts, Colors } from '../../style';

export default class StackHeader extends Component {
    render() {
        const { title, goBackAction, middleFontStyle, right } = this.props;
        return (
            <View
                style={styles.container}
            >
                <StatusBar barStyle="dark-content" />
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={styles.left}>
                        {goBackAction ? (<TouchableWithoutFeedback onPress={goBackAction}>
                            <Icon size={35} name={'arrowleft'} color={'white'} />
                        </TouchableWithoutFeedback>) : null}
                    </View>
                    <View style={styles.center}>
                        <Text
                            adjustsFontSizeToFit
                            numberOfLines={1}
                            style={[styles.textHeader, middleFontStyle]}
                        >{title}</Text>
                    </View>
                    <View style={styles.right}>
                        {
                            right
                        }
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        height: 90,
        paddingTop: 30,
        paddingHorizontal: 15,
        justifyContent: 'center',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: Platform.OS === 'ios' ? 0.6 : 0.8,
        shadowRadius: 1.5,
        elevation: Platform.OS === 'ios' ? 2 : 3,
        shadowColor: 'rgba(0,0,0,0.9)',
        backgroundColor: Colors.mainColor,
    },
    left: {
        flex: 1,
        //backgroundColor: 'green',
        justifyContent: 'center',
        marginLeft: Platform.OS === 'ios' ? 15 : 0,
    },
    center: {
        flex: 3,
        //backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center'
    },
    right: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        //backgroundColor: 'red',
        justifyContent: 'flex-end',
        marginRight: Platform.OS === 'ios' ? 15 : 0,
    },
    textHeader: {
        alignSelf: 'center',
        color: 'white',
        fontFamily: Fonts.sfuiDisplaySemibold,
        fontSize: 20
    }
});

import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    StatusBar,
    Platform,
} from 'react-native';

import SwitchToggle from 'react-native-switch-toggle';

import NavigationService from '../navigation/NavigationService';

import StackHeader from '../components/Header/StackHeader';

import { Colors, Fonts } from '../style';

export default class Preferences extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pushNotifications: true
        };
    }

    // eslint-disable-next-line no-undef
    static navigationOptions = {
        header: () => (<StackHeader
            title={'PREFERÊNCIAS'}
            goBackAction={() => NavigationService.goBack()}
        />)
    }

    render() {
        const { pushNotifications } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <StatusBar barStyle="dark-content" />
                <View style={styles.container}>
                    <View style={styles.settingsOptionContainer}>
                        <Text style={styles.label}>Ativar notificações push</Text>
                        <SwitchToggle
                            switchOn={pushNotifications}
                            backgroundColorOn={Colors.mainColor}
                            circleColorOn={'white'}
                            circleColorOff={'white'}
                            onPress={() => this.setState({
                                pushNotifications: !pushNotifications
                            })}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: Colors.mainBackground
    },
    settingsOptionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginBottom: 10,
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 12,
        shadowOffset: Platform.OS === 'ios' ?
            { width: 2, height: 2 }
            : { width: 3, height: 3 },
        shadowOpacity: Platform.OS === 'ios' ? 0.3 : 0.8,
        shadowRadius: 15.0,
        elevation: Platform.OS === 'ios' ? 7.5 : 15,
        shadowColor: 'rgba(0,0,0,0.9)',
    },
    label: {
        fontSize: 18,
        marginVertical: 28,
        fontFamily: Fonts.sfuiDisplayRegular
    },
    switch: {
        marginVertical: 20
    },
    rightIcon: {
        width: 35,
        height: 35,
    }
});

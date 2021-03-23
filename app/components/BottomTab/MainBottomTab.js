import React, { Component } from 'react';
import { View, StyleSheet, Platform, TouchableWithoutFeedback, Image } from 'react-native';
import { Images, Metrics } from '../../style';
import NavigationService from '../../navigation/NavigationService';

const { HEIGHT } = Metrics;

export default class BottomTab extends Component {
    render() {
        const currentScreen = NavigationService.getCurrentRoute(this.props.navigation.state);
        //console.warn(currentScreen);

        if (currentScreen === 'ProductDetail') {
            return (null);
        }

        return (
            <View style={styles.container}>
                <View style={styles.containerIcon}>
                    <TouchableWithoutFeedback
                        onPress={() => this.props.navigation.navigate('ProductMenuStack')}
                    >
                        <Image
                            source={(currentScreen === 'CategorySelection' ||
                                currentScreen === 'ProductList') ?
                                Images.menu_active : Images.menu_inactive}
                            style={styles.boxIcon}
                        />
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.containerIcon}>
                    <TouchableWithoutFeedback
                        onPress={() => this.props.navigation.navigate('ProfileStack')}
                    >
                        <Image
                            source={(currentScreen === 'Profile') ?
                                Images.profile_active : Images.profile_inactive}
                            style={styles.boxIcon}
                        />
                    </TouchableWithoutFeedback>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 10,
        /* paddingBottom: Platform.OS === 'ios' ? 25 : 10,
        height: Platform.OS === 'ios' ? 85 : 60, */
        paddingBottom: Platform.OS === 'ios' ? HEIGHT * 2 : HEIGHT * 1.5,
        height: Platform.OS === 'ios' ? HEIGHT * 10 : HEIGHT * 9,
        backgroundColor: '#EBE8E8',
        borderTopWidth: Platform.OS === 'ios' ? 2 : 0,
        borderTopColor: '#ddd',
        borderBottomWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0
    },
    containerIcon: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxIcon: {
        height: Platform.OS === 'ios' ? 45 : 40,
        width: Platform.OS === 'ios' ? 45 : 40,
    },
    iconText: {
        fontSize: 12,
        marginTop: 5,
    },
    boxIconCenter: {
        top: Platform.OS === 'ios' ? -20 : -15,
        width: Platform.OS === 'ios' ? 90 : 80,
        height: Platform.OS === 'ios' ? 90 : 80,
        borderRadius: 100,
        borderWidth: Platform.OS === 'ios' ? 0 : 1,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: Platform.OS === 'ios' ? 0.4 : 0.8,
        shadowRadius: 1.5,
        elevation: Platform.OS === 'ios' ? 2 : 3,
        shadowColor: 'rgba(0,0,0,0.9)',
        marginBottom: Platform.OS === 'ios' ? 10 : 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EBE8E8',
    },
    iconCenter: {
        width: 56,
        height: 56
    },
});

import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    StatusBar,
    ImageBackground,
    Platform,
} from 'react-native';
import { Spinner } from 'native-base';

import { Images, Colors } from '../style';

export default class AppLoading extends Component {
    constructor(props) {
        super(props);
    }

    // eslint-disable-next-line no-undef
    static navigationOptions = {
        headerShown: false //Esconder Header
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('MainBottomNavigator');
        }, 3000);
    }

    render() {
        if (Platform.OS === 'android') {
            StatusBar.setBackgroundColor('transparent', true);
            StatusBar.setTranslucent(true);
        }

        return (
            <ImageBackground
                style={styles.containerBg}
                imageStyle={{
                    resizeMode: 'stretch'
                }}
                source={Images.splash_bg}
            >
                <SafeAreaView style={styles.container}>
                    <StatusBar barStyle="light-content" />
                    <Spinner size={50} color={Colors.mainComponentsLogin} />
                </SafeAreaView>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    containerBg: {
        width: '100%',
        height: '100%'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        height: 180,
        width: 180,
        marginTop: 60,
        marginBottom: 40
    },
});

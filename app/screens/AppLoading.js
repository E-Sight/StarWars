import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    StatusBar,
    ImageBackground,
    Platform,
    Image,
} from 'react-native';
import { Spinner } from 'native-base';

import LottieModal from '../components/Modal/LottieModal';

import { Images, Colors, LottieFiles } from '../style';

export default class AppLoading extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalVisible: false,
            modalImgSource: LottieFiles.error,
            modalDescription: '',
            modalHeight: 280,
        };
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
            <ImageBackground style={styles.containerBg} source={Images.splash_bg}>
                <SafeAreaView style={styles.container}>
                    <StatusBar barStyle="light-content" />
                    <LottieModal
                        isVisible={this.state.isModalVisible}
                        description={this.state.modalDescription}
                        buttonText={'Confirmar'}
                        lottieFile={this.state.modalImgSource}
                        onBackAction={() => {
                            this.setState({
                                isModalVisible: false,
                            });
                        }}
                        style={{
                            height: this.state.modalHeight
                        }}
                    />
                    <Image style={styles.logo} source={Images.splash_logo} />
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

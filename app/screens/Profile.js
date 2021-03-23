import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    StatusBar,
    BackHandler,
    ScrollView,
    Platform,
} from 'react-native';

import NavigationService from '../navigation/NavigationService';

import StackHeader from '../components/Header/StackHeader';
import CardProfile from '../components/Cards/CardProfile';

import { Images, Colors } from '../style';

export default class Profile extends Component {
    componentDidMount() {
        this.subs = [
            this.props.navigation.addListener('didFocus',
                () => {
                    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
                }),
            this.props.navigation.addListener('didBlur',
                () => {
                    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
                }),
        ];
    }

    componentWillUnmount() {
        this.subs.forEach(sub => sub.remove());
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    // eslint-disable-next-line no-undef
    static navigationOptions = {
        header: () => (<StackHeader />)
    }

    handleBackButton() {
        NavigationService.navigate('ProductMenuStack');
        return true;
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar barStyle="dark-content" />
                <ScrollView style={styles.container}>
                    <CardProfile
                        iconSource={Images.settings}
                        cardStyle={styles.cardProfile}
                        title={'Preferências'}
                        iconBackgroundColor={'#F5A623'}
                        onPress={() => this.props.navigation.navigate('Preferences')}
                    />
                    <CardProfile
                        iconSource={Images.invite_friend}
                        cardStyle={styles.cardProfile}
                        title={'Convidar Amigos'}
                        iconBackgroundColor={'#50E3C2'}
                        onPress={() => this.props.navigation.navigate('InviteFriends')}
                    />
                    <CardProfile
                        iconSource={Images.about}
                        cardStyle={[styles.cardProfile, { marginBottom: 40 }]}
                        title={'Sobre o Aplicativo'}
                        iconBackgroundColor={'#7C50E3'}
                        onPress={() => this.props.navigation.navigate('About')}
                    />
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.mainBackground,
        paddingTop: 10
    },
    cardProfile: {
        backgroundColor: 'white',
        marginHorizontal: 15,
        shadowOffset: Platform.OS === 'ios' ?
            { width: 2, height: 2 }
            : { width: 3, height: 3 },
        shadowOpacity: Platform.OS === 'ios' ? 0.3 : 0.8,
        shadowRadius: 15.0,
        elevation: Platform.OS === 'ios' ? 7.5 : 15,
        shadowColor: 'rgba(0,0,0,0.9)',
        marginTop: 15
    }
});

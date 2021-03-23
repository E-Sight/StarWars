import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
    Platform,
    Share
} from 'react-native';

import { Toast } from 'native-base';

import StackHeader from '../components/Header/StackHeader';

import NavigationService from '../navigation/NavigationService';

import { Colors, Fonts } from '../style';

export default class InviteFriends extends Component {
    // eslint-disable-next-line no-undef
    onShare = async () => {
        try {
            const result = await Share.share({
                message: 'Olá, você foi convidado para baixar o aplicativo ' +
                    'StarWars! Confira a página de download nesse link: ' +
                    'https://e-sight.mobi/',
            });

            if (result.action === Share.sharedAction) {
                Toast.show({
                    text: 'Obrigado por compartilhar!',
                    buttonText: 'Ok!',
                    duration: 10000,
                    style: {
                        marginBottom: 30,
                        marginHorizontal: 15,
                        borderRadius: 12,
                        paddingHorizontal: 10,
                    },
                    buttonTextStyle: {
                        color: Colors.mainColor
                    }
                });
            } else if (result.action === Share.dismissedAction) {
                //dismissed
            }
        } catch (error) {
            console.warn(error.message);
        }
    };

    // eslint-disable-next-line no-undef
    static navigationOptions = {
        header: () => (<StackHeader
            title={'CONVIDE AMIGOS'}
            goBackAction={() => NavigationService.goBack()}
        />)
    }

    render() {
        return (
            <ScrollView
                style={styles.container}
                contentContainerStyle={{
                    marginTop: 5,
                    paddingHorizontal: 20,
                    paddingVertical: 15,
                    paddingBottom: 40
                }}
            >
                <StatusBar barStyle="dark-content" />
                <View style={styles.inviteContainer}>
                    <Text style={styles.title}>
                        <Text
                            style={[styles.title, { color: Colors.mainColor }]}
                        >Gostou do nosso App?</Text>
                        {' Compartilhe com seus ' +
                            'amigos!'}
                    </Text>
                    <View style={styles.centralView}>
                        <Text
                            style={styles.textCentral}
                        >{'Clique no botão abaixo para enviar ' +
                            'o link de download do App!'}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={this.onShare}
                    >
                        <View style={styles.inviteButton}>
                            <Text style={styles.inviteButtonText}>COMPARTILHAR</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: Colors.mainBackground
    },
    inviteContainer: {
        paddingHorizontal: 20,
        paddingTop: 25,
        paddingBottom: 35,
        marginBottom: 10,
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
    title: {
        fontSize: 22,
        color: '#333333',
        marginBottom: 35,
        fontFamily: Fonts.sfuiDisplaySemibold
    },
    centralView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 40
    },
    textCentral: {
        flex: 1,
        textAlign: 'center',
        fontSize: 18,
        color: '#494949',
        fontFamily: Fonts.sfuiDisplayRegular
    },
    inviteButton: {
        height: 55,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.mainButton,
        borderRadius: 50
    },
    inviteButtonText: {
        fontSize: 18,
        fontFamily: Fonts.sfuiDisplayMedium,
        color: 'white'
    },
});


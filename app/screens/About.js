import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    StatusBar,
    Image,
    TouchableOpacity,
    Linking,
    Platform
} from 'react-native';

import Swiper from 'react-native-swiper';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Zocial from 'react-native-vector-icons/Zocial';

import StackHeader from '../components/Header/StackHeader';

import NavigationService from '../navigation/NavigationService';

import { Images, Fonts, Colors } from '../style';

export default class About extends Component {
    // eslint-disable-next-line no-undef
    static navigationOptions = {
        header: () => (<StackHeader
            title={'SOBRE'}
            goBackAction={() => NavigationService.goBack()}
        />)
    }

    // eslint-disable-next-line no-undef
    openWebsite = () => {
        Linking.canOpenURL(
            'https://e-sight.mobi/'
        ).then(supported => {
            if (supported) {
                Linking.openURL(
                    'https://e-sight.mobi/'
                );
            } else {
                this.onActiveAlert(
                    'Houve um erro ao abrir a página!'
                );
            }
        });
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar barStyle="dark-content" />
                <View style={styles.container}>
                    <View style={styles.devLogoContainer}>
                        <Image
                            resizeMode={'contain'}
                            source={Images.esightLogo}
                            style={styles.devLogo}
                        />
                    </View>
                    <View
                        style={styles.contentContainer}
                    >
                        <Text style={styles.title}>E-Sight</Text>
                        <Swiper
                            containerStyle={styles.swiper}
                            showsButtons={false}
                            loop
                            showsPagination
                            removeClippedSubviews={false}
                            autoplay
                            autoplayTimeout={5}
                        >
                            <Text style={styles.description}>{'Supere suas metas. ' +
                                'A E-Sight oferece uma solução moderna e ' +
                                'eficiente para alavancar ' +
                                'seu negócio e melhorar sua relação com o cliente.'}</Text>
                            <Text style={styles.description}>{'Sistemas intuitivos, limpos ' +
                                'e de fácil entendimento, garantindo uma ' +
                                'boa eficiência durante seu uso.'}</Text>
                            <Text style={styles.description}>{'Administre sua empresa ' +
                                'de qualquer lugar com o uso de aplicativos ' +
                                'móveis e sistemas web'}</Text>
                        </Swiper>
                        <View style={styles.bottomButtonContainer}>
                            <View
                                style={styles.contactContainer}
                            >
                                <TouchableOpacity
                                    style={styles.contactButton}
                                    onPress={() => Linking.openURL(`tel:${'+5515996463260'}`)}
                                >
                                    <FontAwesome
                                        name='phone'
                                        size={40}
                                        color={'white'}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.contactButton}
                                    onPress={() => Linking.openURL('mailto:contato@e-sight.mobi')}
                                >
                                    <Zocial
                                        name='email'
                                        size={40}
                                        color={'white'}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.contactButton}
                                    onPress={() => Linking.openURL('whatsapp://send?text=Olá&phone=+5515996463260')}
                                >
                                    <FontAwesome
                                        name='whatsapp'
                                        size={40}
                                        color={'white'}
                                    />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity
                                style={styles.bottomButton}
                                onPress={() => this.openWebsite()}
                            >
                                <Text
                                    style={styles.bottomButtonText}
                                >VISITAR O SITE</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    devLogoContainer: {
        alignSelf: 'stretch',
        height: 215,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        //marginBottom: 15
    },
    devLogo: {
        height: 220,
        width: 400,
        //backgroundColor: 'magenta'
    },
    contentContainer: {
        backgroundColor: 'white',
        flex: 1,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        paddingTop: 15
    },
    title: {
        fontFamily: Fonts.sfuiDisplaySemibold,
        alignSelf: 'center',
        fontSize: 36,
        color: Colors.esightText
    },
    swiper: {
        flex: 1,
        width: '100%'
    },
    description: {
        marginTop: 10,
        marginHorizontal: 20,
        fontSize: 20,
        textAlign: 'center',
        fontFamily: Fonts.sfuiDisplayRegular,
        color: Colors.Black
    },
    bottomButtonContainer: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    contactContainer: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 80,
        marginBottom: 20,
        marginHorizontal: 20,
    },
    contactButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        width: 70,
        backgroundColor: Colors.esightText,
        /* borderColor: Colors.esightText,
        borderWidth: 1.5, */
        borderRadius: 50,
    },
    bottomButton: {
        backgroundColor: Colors.esightText,
        paddingTop: 15,
        height: Platform.OS === 'ios' ? 85 : 75,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    },
    bottomButtonText: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 26,
        fontFamily: Fonts.sfuiDisplayMedium
    }
});

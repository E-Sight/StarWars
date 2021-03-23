import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import {
    Button,
    Icon
} from 'native-base';

import Modal from 'react-native-modal';

import LottieView from 'lottie-react-native';

import { Colors, Fonts } from '../../style';

export default class LottieModal extends Component {
    render() {
        const {
            isVisible,
            style,
            lottieStyle,
            textStyle,
            buttonStyle,
            loop,
            onBackAction,
            description,
            lottieFile,
            buttonText
        } = this.props;
        return (
            <Modal
                isVisible={isVisible}
                style={[styles.modalConfirmation, style]}
                onBackdropPress={onBackAction}
                onBackButtonPress={onBackAction}
                onRequestClose={onBackAction}
            >
                <View style={styles.modalConfirmationView}>
                    <LottieView
                        style={[styles.modalConfirmationLottieView, lottieStyle]}
                        source={lottieFile}
                        autoPlay
                        loop={loop || false}
                    />
                    <View style={styles.modalConfirmationButtonView}>
                        <Text
                            style={[styles.modalConfirmationText, textStyle]}
                        >{description}</Text>
                        <Button
                            rounded
                            iconLeft
                            onPress={onBackAction}
                            style={[styles.modalConfirmationButton, buttonStyle]}
                        >
                            <Icon name='checkbox-outline' />
                            <Text
                                style={styles.modalConfirmationButtonText}
                            >{buttonText}</Text>
                        </Button>
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    modalConfirmation: {
        position: 'absolute',
        top: '25%',
        alignSelf: 'center',
        height: 280,
        width: 280,
    },
    modalConfirmationView: {
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'column',
        borderRadius: 12,
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    modalConfirmationLottieView: {
        height: 80,
        width: 80,
    },
    modalConfirmationText: {
        fontSize: 18,
        color: Colors.blacktxt,
        fontFamily: Fonts.sfuiDisplayRegular,
        textAlign: 'center',
        marginBottom: 20
    },
    modalConfirmationButtonView: {
        marginTop: 5,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    modalConfirmationButton: {
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        backgroundColor: Colors.mainButton
    },
    modalConfirmationButtonText: {
        color: 'white',
        fontFamily: Fonts.sfuiDisplayMedium,
        fontSize: 16,
        marginLeft: 8,
        marginRight: 10
    },
});

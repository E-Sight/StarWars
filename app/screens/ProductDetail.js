import React, { Component } from 'react';
import {
    Text,
    ScrollView,
    View,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
    Platform,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import { Colors, Fonts } from '../style';

export default class ProductDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            product: this.props.navigation.state.params.product,
        };
    }

    // eslint-disable-next-line no-undef
    static navigationOptions = {
        header: () => (null)
    }

    render() {
        const {
            product,
        } = this.state;

        return (
            <View
                style={{
                    flex: 1,
                }}
            >
                <ScrollView
                    style={styles.container}
                    contentContainerStyle={{
                        paddingBottom: 35
                    }}
                    bounces={false}
                >
                    <StatusBar barStyle="light-content" />
                    <ImageBackground
                        style={styles.swiper}
                        source={{ uri: product.imgSource }}
                        resizeMode={'contain'}
                    >
                        <TouchableOpacity
                            style={styles.backButton}
                            onPress={() => {
                                this.props.navigation.goBack();
                            }}
                        >
                            <AntDesign size={40} name={'arrowleft'} color={'white'} />
                        </TouchableOpacity>
                    </ImageBackground>
                    <View
                        style={styles.descriptionView}
                    >
                        <Text
                            style={styles.title}
                        >{`${product.title}`}</Text>
                        <View
                            style={styles.divisor}
                        />
                        <Text
                            style={styles.ingredientsTitle}
                        >Ingredientes:</Text>
                        <Text
                            style={styles.ingredients}
                        >{`${product.ingredients}`}</Text>
                        <Text
                            style={styles.ingredientsTitle}
                        >Preparo:</Text>
                        <Text
                            style={styles.ingredients}
                        >{`${product.description}`}</Text>
                    </View>
                    <TouchableOpacity
                        style={[styles.shareButton, {
                            marginBottom: 10,
                        }]}
                        /* onPress={this.onShare} */
                    >
                        <Text
                            style={styles.shareButtonText}
                        >Compartilhar</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    swiper: {
        alignSelf: 'stretch',
        height: 270,
    },
    backButton: {
        marginHorizontal: 15,
        marginVertical: 30,
    },
    descriptionView: {
        margin: 20,
        marginBottom: 15,
    },
    title: {
        fontFamily: Fonts.sfuiDisplayMedium,
        fontSize: 28,
        textAlign: 'center',
        color: Colors.mainColor,
    },
    divisor: {
        alignSelf: 'stretch',
        marginTop: 15,
        marginBottom: 20,
        marginHorizontal: 10,
        height: 1,
        backgroundColor: Colors.Black
    },
    ingredientsTitle: {
        fontFamily: Fonts.sfuiDisplayMedium,
        fontSize: 22,
        color: Colors.mainColor,
        marginBottom: 5,
    },
    ingredients: {
        fontFamily: Fonts.sfuiDisplayRegular,
        fontSize: 18,
        /* textAlign: 'justify', */
        marginBottom: 20,
    },
    shareButton: {
        height: 55,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.mainButton,
        borderRadius: 50,
        shadowOffset: Platform.OS === 'ios' ?
            { width: 2, height: 2 }
            : { width: 3, height: 3 },
        shadowOpacity: Platform.OS === 'ios' ? 0.3 : 0.8,
        shadowRadius: 15.0,
        elevation: Platform.OS === 'ios' ? 7.5 : 15,
        shadowColor: 'rgba(0,0,0,0.9)',
        marginHorizontal: 15,
    },
    shareButtonText: {
        fontSize: 18,
        fontFamily: Fonts.sfuiDisplayMedium,
        color: 'white'
    },
});

import React, { Component } from 'react';
import {
    StyleSheet,
    StatusBar,
    View,
    TouchableOpacity,
    Image,
    TextInput,
    Platform,
    FlatList
} from 'react-native';

import { Spinner } from 'native-base';

import AntDesign from 'react-native-vector-icons/AntDesign';

import NavigationService from '../navigation/NavigationService';

import CardProductLarge from '../components/Cards/CardProductLarge';

import { Colors, Images, Fonts } from '../style';

export default class ProductList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            category: this.props.navigation.state.params.category.title,
            productsData: [{
                name: "Luke Skywalker",
                height: "172",
                mass: "77",
                hair_color: "blond",
                skin_color: "fair",
                eye_color: "blue",
                birth_year: "19BBY",
                gender: "male",
                homeworld: "http://swapi.dev/api/planets/1/",
                films: [
                    "http://swapi.dev/api/films/1/",
                    "http://swapi.dev/api/films/2/",
                    "http://swapi.dev/api/films/3/",
                    "http://swapi.dev/api/films/6/"
                ],
                species: [],
                vehicles: [
                    "http://swapi.dev/api/vehicles/14/",
                    "http://swapi.dev/api/vehicles/30/"
                ],
                starships: [
                    "http://swapi.dev/api/starships/12/",
                    "http://swapi.dev/api/starships/22/"
                ],
                created: "2014-12-09T13:50:51.644000Z",
                edited: "2014-12-20T21:17:56.891000Z",
                url: "http://swapi.dev/api/people/1/"
            },
            {
                name: 'C-3PO',
                height: 167,
                mass: 75,
                hair_color: "n/a",
                skin_color: "gold",
                eye_color: "yellow",
                birth_year: "112BBY",
                gender: "n/a",
                homeworld: "http://swapi.dev/api/planets/1/",
                films: [
                    "http://swapi.dev/api/films/1/",
                    "http://swapi.dev/api/films/2/",
                    "http://swapi.dev/api/films/3/",
                    "http://swapi.dev/api/films/4/",
                    "http://swapi.dev/api/films/5/",
                    "http://swapi.dev/api/films/6/"
                ],
                species: [
                    "http://swapi.dev/api/species/2/"
                ],
                vehicles: [],
                starships: [],
                created: "2014-12-10T15:10:51.357000Z",
                edited: "2014-12-20T21:17:50.309000Z",
                url: "http://swapi.dev/api/people/2/"
            },],
            search: '',
            isLoading: false,
        };
    }

    // eslint-disable-next-line no-undef
    static navigationOptions = {
        header: () => (null)
    }

    // eslint-disable-next-line no-undef
    productsFlatlist = () => (<FlatList
        style={{
            alignSelf: 'stretch',
            flex: 1,
        }}
        data={this.state.productsData}
        contentContainerStyle={{
            paddingTop: 20,
            paddingBottom: 25,
            paddingHorizontal: 20,
        }}
        renderItem={({ item }) => (<CardProductLarge
            cardStyle={styles.productItem}
            category={this.state.category}
            imgSource={{ uri: item.imgSource }}
            title={item.name}
            onPress={() => this.props.navigation.navigate('ProductDetail', {
                product: item
            })}
        />)}
        keyExtractor={(item, index) => index.toString()}
    />)

    // eslint-disable-next-line no-undef
    categoryTabPage = (item, index) => (
        <View key={index} tabLabel={item.title} style={{ flex: 1 }}>
            <View style={styles.filterContainer} />
            <View style={styles.tabContentContainer}>
                {
                    this.state.isLoading ? (<View
                        style={{
                            flex: 1,
                            backgroundColor: Colors.mainBackground,
                            alignSelf: 'stretch',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Spinner
                            size={50}
                            color={Colors.mainComponentsLogin}
                        />
                    </View>) : (this.productsFlatlist(item.title))
                }
            </View>
        </View>
    )

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: Colors.mainColor
                }}
            >
                <StatusBar barStyle="dark-content" />
                <View style={styles.container}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginBottom: 10,
                            marginTop: Platform.OS === 'ios' ? 15 : 0
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: 45,
                                marginLeft: 15,
                            }}
                            onPress={() => NavigationService.goBack()}
                        >
                            <AntDesign
                                color={'white'}
                                size={35}
                                name={'arrowleft'}
                            />
                        </TouchableOpacity>
                        <View style={styles.inputContainer}>
                            <View style={styles.inputIconContainer}>
                                <Image source={Images.searchIcon} style={styles.inputIcon} />
                                <View style={styles.inputDivisor} />
                            </View>
                            <TextInput
                                placeholder={'Pesquisar'}
                                style={styles.input}
                                returnKeyType='search'
                                value={this.state.search}
                                onChangeText={(text) => this.setState({
                                    search: text
                                })}
                            />
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        backgroundColor: 'transparent',
                        flex: 1,
                        marginTop: 20,
                    }}
                >
                    {
                        this.categoryTabPage(this.state.category, 0)
                    }
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        paddingTop: 45,
    },
    inputContainer: {
        flex: 1,
        backgroundColor: '#FFF',
        borderRadius: 12,
        marginRight: 10,
        marginLeft: 10,
        paddingHorizontal: 25,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#707070',
        height: 45
    },
    inputIconContainer: {
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        flex: 1,
        marginRight: 5
    },
    inputIcon: {
        height: 30,
        width: 30,
    },
    inputDivisor: {
        marginVertical: 7,
        alignSelf: 'stretch',
        width: 1,
        backgroundColor: '#484848'
    },
    input: {
        fontSize: 18,
        marginLeft: 5,
        flex: 4.5,
        marginVertical: Platform.OS === 'ios' ? 15 : 0,
        color: '#484848',
    },
    filterContainer: {
        backgroundColor: '#EBEBEB',
        height: 60,
        alignSelf: 'stretch',
        justifyContent: 'center',
        paddingHorizontal: 25,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: Platform.OS === 'ios' ? 0.6 : 0.8,
        shadowRadius: 1.5,
        elevation: Platform.OS === 'ios' ? 2 : 3,
        shadowColor: 'rgba(0,0,0,0.9)',
    },
    filterIcon: {
        height: 35,
        width: 35,
        marginLeft: 10,
    },
    tabUnderLine: {
        backgroundColor: 'white',
        height: 2
    },
    tabText: {
        fontFamily: Fonts.sfuiDisplayMedium,
        fontSize: 16,
    },
    //Tab Content Related
    tabContentContainer: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: Colors.mainBackground
    },
    servicesFlatList: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: Colors.mainBackground
    },
    productItem: {
        backgroundColor: 'white',
        shadowOffset: Platform.OS === 'ios' ?
            { width: 2, height: 2 }
            : { width: 3, height: 3 },
        shadowOpacity: Platform.OS === 'ios' ? 0.3 : 0.8,
        shadowRadius: 15.0,
        elevation: Platform.OS === 'ios' ? 7.5 : 15,
        shadowColor: 'rgba(0,0,0,0.9)',
        marginTop: 15,
    },
});

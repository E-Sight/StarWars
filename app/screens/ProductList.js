import React, { Component } from 'react';
import {
    StyleSheet,
    StatusBar,
    View,
    TouchableOpacity,
    Image,
    TextInput,
    Text,
    Platform,
    FlatList
} from 'react-native';

import axios from 'axios';

import { Spinner } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import NavigationService from '../navigation/NavigationService';
import CardProductLarge from '../components/Cards/CardProductLarge';

import { Colors, Images, Fonts } from '../style';

export default class ProductList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            category: this.props.navigation.state.params.category.title,
            productsData: [],
            search: '',
            isLoading: true,
            categoryUri: '',
            page: 1,
            havePrevious: false,
            haveNext: false,
        };
    }

    componentDidMount() {
        this.loadPage();
    }

    loadPage = () => {
        let apiURI = '';
        switch (this.state.category) {
            case 'Espécies':
                apiURI = `https://swapi.dev/api/species/?page=${this.state.page}`;
                break;
            case 'Filmes':
                apiURI = `https://swapi.dev/api/films/?page=${this.state.page}`;
                break;
            case 'Naves':
                apiURI = `https://swapi.dev/api/starships/?page=${this.state.page}`;
                break;
            case 'Pessoas':
                apiURI = `https://swapi.dev/api/people/?page=${this.state.page}`;
                break;
            case 'Planetas':
                apiURI = `https://swapi.dev/api/planets/?page=${this.state.page}`;
                break;
            case 'Veículos':
                apiURI = `https://swapi.dev/api/vehicles/?page=${this.state.page}`;
                break;
            default:
                break;
        }

        axios.get(apiURI)
            .then((response) => {
                // handle success
                this.setState({
                    productsData: response.data.results,
                    categoryUri: apiURI,
                    haveNext: response.data.next ? true : false,
                    havePrevious: response.data.previous ? true : false,
                    isLoading: false,
                });
            })
            .catch(function (error) {
                // handle error
                console.warn(error);
            })
    }

    changePage = (next) => {
        if (next) {
            this.setState({
                page: this.state.page + 1
            }, this.loadPage);
        } else {
            this.setState({
                page: this.state.page - 1
            }, this.loadPage);
        }
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
            paddingTop: 15,
            paddingBottom: 30,
            paddingHorizontal: 20,
        }}
        renderItem={({ item }) => (<CardProductLarge
            cardStyle={styles.productItem}
            category={this.state.category}
            imgSource={{ uri: item.imgSource }}
            title={this.state.category === 'Filmes' ? item.title : item.name}
            onPress={() => this.props.navigation.navigate('ProductDetail', {
                category: this.state.category,
                product: item
            })}
        />)}
        keyExtractor={(item, index) => index.toString()}
    />)

    // eslint-disable-next-line no-undef
    categoryTabPage = (item, index) => (
        <View key={index} tabLabel={item.title} style={{ flex: 1 }}>
            <View style={styles.filterContainer}>
                {
                    this.state.havePrevious ? (<TouchableOpacity
                        style={styles.paginationButton}
                        onPress={() => this.changePage(false)}
                    >
                        <SimpleLineIcons
                            color={Colors.hyperlink}
                            size={20}
                            name={'arrow-left'}
                        />
                        <Text
                            style={styles.paginationLabel}
                        >Anterior</Text>
                    </TouchableOpacity>) : (<View />)
                }
                {
                    this.state.haveNext ? (<TouchableOpacity
                        style={styles.paginationButton}
                        onPress={() => this.changePage(true)}
                    >
                        <Text
                            style={styles.paginationLabel}
                        >Próximo</Text>
                        <SimpleLineIcons
                            color={Colors.hyperlink}
                            size={20}
                            name={'arrow-right'}
                        />
                    </TouchableOpacity>) : (<View />)
                }
            </View>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 25,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: Platform.OS === 'ios' ? 0.6 : 0.8,
        shadowRadius: 1.5,
        elevation: Platform.OS === 'ios' ? 2 : 3,
        shadowColor: 'rgba(0,0,0,0.9)',
    },
    paginationButton: {
        flexDirection: 'row',
    },
    paginationLabel: {
        marginHorizontal: 5,
        fontSize: 16,
        color: Colors.hyperlink,
        textDecorationLine: 'underline',
        fontFamily: Fonts.sfuiDisplaySemibold,
    },
    //Tab Content Related
    tabContentContainer: {
        flex: 1,
        alignItems: 'center',
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

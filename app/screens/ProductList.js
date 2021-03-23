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

import ScrollableTabView, {
    ScrollableTabBar,
} from 'react-native-scrollable-tab-view';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import NavigationService from '../navigation/NavigationService';

import CardProductLarge from '../components/Cards/CardProductLarge';

import { Colors, Images, Fonts } from '../style';

export default class ProductList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            subcategoriesArray: this.props.navigation.state.params.subcategoriesArray,
            productsData: this.props.productsData,
            search: '',
            grid: true,
            columnCount: 2,
        };
    }

    // eslint-disable-next-line no-undef
    static navigationOptions = {
        header: () => (null)
    }

    // eslint-disable-next-line no-undef
    productsFlatlist = (category) => (<FlatList
        key={this.state.columnCount}
        style={{
            alignSelf: 'stretch'
        }}
        numColumns={this.state.columnCount}
        columnWrapperStyle={this.state.grid ? styles.row : null}
        data={this.state.productsData.productsArray}
        contentContainerStyle={{
            paddingTop: 25,
            paddingBottom: 15,
            paddingHorizontal: this.state.grid ? 15 : 20,
        }}
        renderItem={({ item }) => {
            if (this.state.subcategoriesArray) {
                //Existe subcategorias
                if (item.category === this.props.navigation.state.params.category.title &&
                    item.subcategory === category) {
                    return (<CardProductLarge
                        cardStyle={[styles.productItem, {
                            marginHorizontal: this.state.grid ? 5 : 0
                        }]}
                        imgSource={{ uri: item.imgSource }}
                        title={item.title}
                        favorited={item.favorited}
                        onPress={() => this.props.navigation.navigate('ProductDetail', {
                            product: item
                        })}
                    />);
                }

                return null;
            }
            if (item.category === category) {
                return (<CardProductLarge
                    cardStyle={[styles.productItem, {
                        marginHorizontal: this.state.grid ? 5 : 0
                    }]}
                    imgSource={{ uri: item.imgSource }}
                    title={item.title}
                    favorited={item.favorited}
                    onPress={() => this.props.navigation.navigate('ProductDetail', {
                        product: item
                    })}
                />);
            }

            return null;
        }}
        keyExtractor={(item, index) => index.toString()}
    />)

    // eslint-disable-next-line no-undef
    categoryTabPage = (item, index) => (
        <View key={index} tabLabel={item.title} style={{ flex: 1 }}>
            <View style={styles.filterContainer}>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        alignSelf: 'flex-end'
                    }}
                >
                    <TouchableOpacity
                        onPress={() => this.setState({
                            grid: true,
                            columnCount: 2,
                        })}
                    >
                        <Entypo
                            style={styles.filterIcon}
                            size={35}
                            name={'grid'}
                            color={this.state.grid ? '#2b2b2b' : '#ababab'}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.setState({
                            grid: false,
                            columnCount: 1,
                        })}
                    >
                        <Entypo
                            style={styles.filterIcon}
                            size={35}
                            name={'list'}
                            color={this.state.grid ? '#ababab' : '#2b2b3b'}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.tabContentContainer}>
                {this.productsFlatlist(item.title)}
            </View>
        </View>
    )

    render() {
        const category = this.props.navigation.state.params.category;

        if (this.state.subcategoriesArray) {
            //Existe subcategorias
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
                    <ScrollableTabView
                        tabBarUnderlineStyle={styles.tabUnderLine}
                        tabBarActiveTextColor={'white'}
                        tabBarInactiveTextColor={'#c7ebde'}
                        tabBarTextStyle={styles.tabText}
                        style={{
                            backgroundColor: 'transparent',
                        }}
                        renderTabBar={() => <ScrollableTabBar />}
                    >
                        {
                            this.state.subcategoriesArray.map((item, index) => (
                                this.categoryTabPage({
                                    title: item,
                                },
                                    index)
                            ))
                        }
                    </ScrollableTabView>
                </View>
            );
        }

        //Não há subcategorias
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
                        this.categoryTabPage(category, 0)
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
    cardService: {
        backgroundColor: 'white',
        marginHorizontal: 20,
        shadowOffset: Platform.OS === 'ios' ?
            { width: 2, height: 2 }
            : { width: 3, height: 3 },
        shadowOpacity: Platform.OS === 'ios' ? 0.3 : 0.8,
        shadowRadius: 2.0,
        elevation: Platform.OS === 'ios' ? 2 : 4,
        shadowColor: 'rgba(0,0,0,0.9)',
        marginTop: 15,
    },
    refreshButton: {
        height: 55,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.mainButton,
        borderRadius: 50,
        marginTop: 30,
    },
    refreshButtonText: {
        fontSize: 18,
        fontFamily: Fonts.sfuiDisplayMedium,
        color: 'white'
    },
    productItem: {
        flex: 1,
        marginBottom: 20
    },
    row: {
        flex: 1,
        justifyContent: 'space-around'
    }
});

import React, { Component } from 'react';
import {
    ScrollView,
    View,
    StyleSheet,
    StatusBar,
} from 'react-native';

import StackHeader from '../components/Header/StackHeader';

import CardCategory from '../components/Cards/CardCategory';

import { Colors, Images } from '../style';

export default class CategorySelection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isRefreshing: false,
            categoriesData: [
                {
                    title: 'Filmes',
                    imgSource: Images.films,
                },
                {
                    title: 'Pessoas',
                    imgSource: Images.people,
                },
                {
                    title: 'Planetas',
                    imgSource: Images.planets,
                },
                {
                    title: 'Espécies',
                    imgSource: Images.species,
                },
                {
                    title: 'Naves',
                    imgSource: Images.spaceships,
                },
                {
                    title: 'Veículos',
                    imgSource: Images.vehicles,
                },
            ],
        };
    }

    // eslint-disable-next-line no-undef
    static navigationOptions = {
        header: () => (null)
    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: Colors.mainBackground
                }}
            >
                <StackHeader
                    title={'CATEGORIAS'}
                />
                <ScrollView
                    style={styles.container}
                    contentContainerStyle={{ marginTop: 5, padding: 20, paddingBottom: 20, }}
                >
                    <StatusBar barStyle="dark-content" />
                    {this.state.categoriesData
                        .sort((a, b) => a.title > b.title)
                        .map((item, i) => (<CardCategory
                            key={i}
                            title={item.title}
                            imgSource={item.imgSource}
                            onPress={() => {
                                this.props.navigation.navigate('ProductList',
                                    {
                                        category: item
                                    }
                                );
                            }}
                        />))}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: Colors.mainBackground,
    },
});

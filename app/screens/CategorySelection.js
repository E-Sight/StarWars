import React, { Component } from 'react';
import {
    ScrollView,
    View,
    StyleSheet,
    StatusBar,
    RefreshControl,
} from 'react-native';

import StackHeader from '../components/Header/StackHeader';

import CardCategory from '../components/Cards/CardCategory';

import { Colors } from '../style';

export default class CategorySelection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isRefreshing: false,
        };
    }

    componentDidMount() {
        this.subs = [
            this.props.navigation.addListener('didFocus',
                () => {
                    if (this.props.categoriesData.mustRefresh === true) {
                        this.refreshCategories();
                    }
                }),
        ];
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
                    contentContainerStyle={{ marginTop: 5, padding: 20, paddingBottom: 115, }}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={this.refreshCategories}
                            colors={[Colors.mainColor, Colors.mainColor]}
                        />
                    }
                >
                    <StatusBar barStyle="dark-content" />
                    {this.props.categoriesData.categoriesArray
                        .sort((a, b) => a.title > b.title)
                        .map((item) => (<CardCategory
                            key={item.key}
                            title={item.title}
                            imgSource={{ uri: item.imgSource }}
                            onPress={() => {
                                this.props.navigation.navigate('ProductList',
                                    {
                                        subcategoriesArray: item.subcategories,
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

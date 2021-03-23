/* eslint-disable import/no-named-as-default */
/* eslint-disable react/react-in-jsx-scope */
import React, { Component } from 'react';

import {
    createAppContainer,
    createSwitchNavigator,
} from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import NavigationService from './NavigationService';

//Components
import MainBottomTab from '../components/BottomTab/MainBottomTab';

//Loading
import AppLoading from '../screens/AppLoading';

//Menu
import CategorySelection from '../screens/CategorySelection';
import ProductList from '../screens/ProductList';
import ProductDetail from '../screens/ProductDetail';

//Profile
import Profile from '../screens/Profile';
import Preferences from '../screens/Preferences';
import InviteFriends from '../screens/InviteFriends';
import About from '../screens/About';

const ProductMenuStack = createStackNavigator({
    CategorySelection: {
        screen: CategorySelection
    },
    ProductList: {
        screen: ProductList,
    },
    ProductDetail: {
        screen: ProductDetail,
    },
}, {
    headerShown: false,
    headerMode: 'screen'
});

ProductMenuStack.navigationOptions = ({ navigation }) => {
    const currentRoute = navigation.state.routes[navigation.state.index];
    const { routeName } = currentRoute;

    let tabBarVisible = true;
    if (routeName === 'ProductDetail' ||
        routeName === 'PaymentDetail') {
        tabBarVisible = false;
    }
    return {
        tabBarVisible,
    };
};

const ProfileStack = createStackNavigator({
    Profile: {
        screen: Profile,
    },
    Preferences: {
        screen: Preferences
    },
    InviteFriends: {
        screen: InviteFriends
    },
    About: {
        screen: About
    }
}, {
    headerShown: false,
    headerMode: 'screen'
});

ProfileStack.navigationOptions = ({ navigation }) => {
    const currentRoute = navigation.state.routes[navigation.state.index];
    const { routeName } = currentRoute;

    let tabBarVisible = true;
    if (routeName === 'Preferences' ||
        routeName === 'InviteFriends' ||
        routeName === 'About'
    ) {
        tabBarVisible = false;
    }
    return {
        tabBarVisible,
    };
};

const MainBottomNavigator = createBottomTabNavigator({
    /* ChooseLocationStack, */
    ProductMenuStack,
    ProfileStack
}, {
    headerShown: false,
    headerMode: 'screen',
    navigationOptions: () => ({
        gestureEnabled: false
    }),
    tabBarComponent: MainBottomTab
});

const AppLoadingNavigator = createSwitchNavigator({
    AppLoading: { screen: AppLoading },
    MainBottomNavigator
}, {
    headerShown: false,
    headerMode: 'none'
});

const AppContainer = createAppContainer(AppLoadingNavigator);

export default class Navigator extends Component {
    getCurrentRoute(nav) {
        if (Array.isArray(nav.routes) && nav.routes.length > 0) {
            return this.getCurrentRoute(nav.routes[nav.index]);
        }
        return nav.routeName;
    }

    render() {
        return (
            <AppContainer
                ref={navigatorRef => {
                    NavigationService.setTopLevelNavigator(navigatorRef);
                }}
                onNavigationStateChange={(prevState, currentState) => {
                    const currentScreen = this.getCurrentRoute(currentState);
                    const prevScreen = this.getCurrentRoute(prevState);
                    if (prevScreen !== currentScreen) {
                        //console.warn(currentScreen);
                    }
                }}
            />
        );
    }
}

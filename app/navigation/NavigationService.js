import { NavigationActions } from 'react-navigation';

let navigator;

function setTopLevelNavigator(navigatorRef) {
    navigator = navigatorRef;
}

function navigate(routeName, params) {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
        })
    );
}

function goBack() {
    navigator.dispatch(
        NavigationActions.back()
    );
}

function getCurrentRoute(nav) {
    if (Array.isArray(nav.routes) && nav.routes.length > 0) {
        return getCurrentRoute(nav.routes[nav.index]);
    }
    return nav.routeName;
}

// add other navigation functions that you need and export them

export default {
    navigate,
    setTopLevelNavigator,
    getCurrentRoute,
    goBack
};

/* eslint-disable global-require */
import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Colors, Fonts } from '../../style';

export default class CardProductLarge extends Component {
    // eslint-disable-next-line no-undef
    categoryIcon = (category) => {
        switch (category) {
            case 'Espécies':
                return (<MaterialCommunityIcons
                    size={52}
                    name={'dna'}
                    color={Colors.mainColor}
                />);
            case 'Filmes':
                return (<MaterialIcons
                    size={52}
                    name={'local-movies'}
                    color={Colors.mainColor}
                />);
            case 'Naves':
                return (<FontAwesome
                    size={48}
                    name={'space-shuttle'}
                    color={Colors.mainColor}
                />);
            case 'Pessoas':
                return (<MaterialIcons
                    size={52}
                    name={'person'}
                    color={Colors.mainColor}
                />);
            case 'Planetas':
                return (<Ionicons
                    size={52}
                    name={'planet'}
                    color={Colors.mainColor}
                />);
            case 'Veículos':
                return (<MaterialCommunityIcons
                    size={52}
                    name={'motorbike'}
                    color={Colors.mainColor}
                />);
            default:
                return null;
        }
    }

    render() {
        const {
            cardStyle,
            title,
            category,
            onPress,
        } = this.props;
        return (
            <TouchableOpacity onPress={onPress} style={[styles.content, cardStyle]}>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                >
                    <View style={styles.iconContainer}>
                        {
                            this.categoryIcon(category)
                        }
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text
                            numberOfLines={1}
                            style={styles.title}
                        >{title}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        alignSelf: 'stretch',
        height: 90,
        borderRadius: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconContainer: {
        borderRadius: 50,
        height: 60,
        width: 60,
        backgroundColor: 'white',
        marginRight: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        /* width: '75%', */
        color: Colors.mainColor,
        fontFamily: Fonts.sfuiDisplaySemibold,
        fontSize: 22
    },
});

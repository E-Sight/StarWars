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

import StackHeader from '../components/Header/StackHeader';
import NavigationService from '../navigation/NavigationService';

import { Colors, Fonts } from '../style';

export default class ProductDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            category: this.props.navigation.state.params.category,
            product: this.props.navigation.state.params.product,
        };
    }

    // eslint-disable-next-line no-undef
    static navigationOptions = {
        header: () => (<StackHeader
            title={'DETALHES'}
            goBackAction={() => NavigationService.goBack()}
        />)
    }

    fieldsView = () => {
        const {
            category,
            product,
        } = this.state;

        switch (category) {
            case 'Espécies':
                return (
                    <View
                        style={styles.descriptionView}
                    >
                        <Text
                            style={styles.title}
                        >{product.name}</Text>
                        <View
                            style={styles.divisor}
                        />
                        <Text
                            style={styles.detailTitle}
                        >Classificação:</Text>
                        <Text
                            style={styles.detail}
                        >{`${product.classification}`}</Text>
                        <Text
                            style={styles.detailTitle}
                        >Designação:</Text>
                        <Text
                            style={styles.detail}
                        >{`${product.designation}`}</Text>
                        <Text
                            style={styles.detailTitle}
                        >Altura Média:</Text>
                        <Text
                            style={styles.detail}
                        >{`${product.average_height}`}</Text>
                        <Text
                            style={styles.detailTitle}
                        >Cores de Pele:</Text>
                        <Text
                            style={styles.detail}
                        >{`${product.hair_colors}`}</Text>
                        <Text
                            style={styles.detailTitle}
                        >Cores de Olhos:</Text>
                        <Text
                            style={styles.detail}
                        >{`${product.eye_colors}`}</Text>
                        <Text
                            style={styles.detailTitle}
                        >Tempo de Vida Médio:</Text>
                        <Text
                            style={styles.detail}
                        >{`${product.average_lifespan}`}</Text>
                        <Text
                            style={styles.detailTitle}
                        >Idioma:</Text>
                        <Text
                            style={styles.detail}
                        >{`${product.language}`}</Text>
                    </View>
                );
            case 'Filmes':
                return (
                    <View
                        style={styles.descriptionView}
                    >
                        <Text
                            style={styles.title}
                        >{product.title}</Text>
                        <View
                            style={styles.divisor}
                        />
                        <Text
                            style={styles.detailTitle}
                        >Número do Episódio:</Text>
                        <Text
                            style={styles.detail}
                        >{`${product.episode_id}`}</Text>
                        <Text
                            style={styles.detailTitle}
                        >Texto de Abertura:</Text>
                        <Text
                            style={styles.detail}
                        >{`${product.opening_crawl}`}</Text>
                        <Text
                            style={styles.detailTitle}
                        >Diretor:</Text>
                        <Text
                            style={styles.detail}
                        >{`${product.director}`}</Text>
                        <Text
                            style={styles.detailTitle}
                        >Produtores:</Text>
                        <Text
                            style={styles.detail}
                        >{`${product.producer}`}</Text>
                        <Text
                            style={styles.detailTitle}
                        >Data de Lançamento:</Text>
                        <Text
                            style={styles.detail}
                        >{`${product.release_date}`}</Text>
                    </View>
                );
            case 'Naves':
                return (
                    <View
                        style={styles.descriptionView}
                    >
                        <Text
                            style={styles.title}
                        >{product.name}</Text>
                        <View
                            style={styles.divisor}
                        />
                        <Text
                            style={styles.detailTitle}
                        >Modelo:</Text>
                        <Text
                            style={styles.detail}
                        >{`${product.model}`}</Text>
                        <Text
                            style={styles.detailTitle}
                        >Fabricante:</Text>
                        <Text
                            style={styles.detail}
                        >{`${product.manufacturer}`}</Text>
                        <Text
                            style={styles.detailTitle}
                        >Custo em Créditos:</Text>
                        <Text
                            style={styles.detail}
                        >{`${product.cost_in_credits}`}</Text>
                        <Text
                            style={styles.detailTitle}
                        >Comprimento:</Text>
                        <Text
                            style={styles.detail}
                        >{`${product.length}`}</Text>
                        <Text
                            style={styles.detailTitle}
                        >Velocidade Atmosférica Máxima:</Text>
                        <Text
                            style={styles.detail}
                        >{`${product.max_atmosphering_speed}`}</Text>
                        <Text
                            style={styles.detailTitle}
                        >Tripulantes:</Text>
                        <Text
                            style={styles.detail}
                        >{`${product.crew}`}</Text>
                        <Text
                            style={styles.detailTitle}
                        >Passageiros:</Text>
                        <Text
                            style={styles.detail}
                        >{`${product.passengers}`}</Text>
                        <Text
                            style={styles.detailTitle}
                        >Capacidade de Carga:</Text>
                        <Text
                            style={styles.detail}
                        >{`${product.cargo_capacity}`}</Text>
                        <Text
                            style={styles.detailTitle}
                        >Suprimentos:</Text>
                        <Text
                            style={styles.detail}
                        >{`${product.consumables}`}</Text>
                        <Text
                            style={styles.detailTitle}
                        >Avaliação de Hiperdrive:</Text>
                        <Text
                            style={styles.detail}
                        >{`${product.hyperdrive_rating}`}</Text>
                        <Text
                            style={styles.detailTitle}
                        >MGLT:</Text>
                        <Text
                            style={styles.detail}
                        >{`${product.MGLT}`}</Text>
                        <Text
                            style={styles.detailTitle}
                        >Classe de Nave Estelar:</Text>
                        <Text
                            style={styles.detail}
                        >{`${product.starship_class}`}</Text>
                    </View>
                );
            case 'Pessoas':
                return (
                    <View
                        style={styles.descriptionView}
                    >
                        <Text
                            style={styles.title}
                        >{product.name}</Text>
                        <View
                            style={styles.divisor}
                        />
                        <Text
                            style={styles.detailTitle}
                        >Altura:</Text>
                        <Text
                            style={styles.detail}
                        >{`${product.height}`}</Text>
                        <Text
                            style={styles.detailTitle}
                        >Massa:</Text>
                        <Text
                            style={styles.detail}
                        >{`${product.mass}`}</Text>
                        <Text
                            style={styles.detailTitle}
                        >Cor do Cabelo:</Text>
                        <Text
                            style={styles.detail}
                        >{`${product.hair_color}`}</Text>
                        <Text
                            style={styles.detailTitle}
                        >Cor da Pele:</Text>
                        <Text
                            style={styles.detail}
                        >{`${product.skin_color}`}</Text>
                        <Text
                            style={styles.detailTitle}
                        >Cor dos Olhos:</Text>
                        <Text
                            style={styles.detail}
                        >{`${product.eye_color}`}</Text>
                        <Text
                            style={styles.detailTitle}
                        >Ano de Nascimento:</Text>
                        <Text
                            style={styles.detail}
                        >{`${product.birth_year}`}</Text>
                        <Text
                            style={styles.detailTitle}
                        >Gênero:</Text>
                        <Text
                            style={styles.detail}
                        >{`${product.gender}`}</Text>
                    </View>
                );
            case 'Planetas':
                return (
                    <View
                        style={styles.descriptionView}
                    >
                        <Text
                            style={styles.title}
                        >{product.name}</Text>
                        <View
                            style={styles.divisor}
                        />
                        <Text
                            style={styles.detailTitle}
                        >Período de Rotação:</Text>
                        <Text
                            style={styles.detail}
                        >{`${product.rotation_period}`}</Text>
                        <Text
                            style={styles.detailTitle}
                        >Período Orbital:</Text>
                        <Text
                            style={styles.detail}
                        >{`${product.orbital_period}`}</Text>
                        <Text
                            style={styles.detailTitle}
                        >Diâmetro:</Text>
                        <Text
                            style={styles.detail}
                        >{`${product.diameter}`}</Text>
                        <Text
                            style={styles.detailTitle}
                        >Clima:</Text>
                        <Text
                            style={styles.detail}
                        >{`${product.climate}`}</Text>
                        <Text
                            style={styles.detailTitle}
                        >Gravidade:</Text>
                        <Text
                            style={styles.detail}
                        >{`${product.gravity}`}</Text>
                        <Text
                            style={styles.detailTitle}
                        >Terreno:</Text>
                        <Text
                            style={styles.detail}
                        >{`${product.terrain}`}</Text>
                        <Text
                            style={styles.detailTitle}
                        >Água na Superfície:</Text>
                        <Text
                            style={styles.detail}
                        >{`${product.surface_water}`}</Text>
                        <Text
                            style={styles.detailTitle}
                        >População:</Text>
                        <Text
                            style={styles.detail}
                        >{`${product.population}`}</Text>
                    </View>
                );
            case 'Veículos':
                return (
                    <View
                        style={styles.descriptionView}
                    >
                        <Text
                            style={styles.title}
                        >{product.name}</Text>
                        <View
                            style={styles.divisor}
                        />
                        <Text
                            style={styles.detailTitle}
                        >Modelo:</Text>
                        <Text
                            style={styles.detail}
                        >{`${product.model}`}</Text>
                        <Text
                            style={styles.detailTitle}
                        >Fabricante:</Text>
                        <Text
                            style={styles.detail}
                        >{`${product.manufacturer}`}</Text>
                        <Text
                            style={styles.detailTitle}
                        >Custo em Créditos:</Text>
                        <Text
                            style={styles.detail}
                        >{`${product.cost_in_credits}`}</Text>
                        <Text
                            style={styles.detailTitle}
                        >Comprimento:</Text>
                        <Text
                            style={styles.detail}
                        >{`${product.length}`}</Text>
                        <Text
                            style={styles.detailTitle}
                        >Velocidade Atmosférica Máxima:</Text>
                        <Text
                            style={styles.detail}
                        >{`${product.max_atmosphering_speed}`}</Text>
                        <Text
                            style={styles.detailTitle}
                        >Tripulantes:</Text>
                        <Text
                            style={styles.detail}
                        >{`${product.crew}`}</Text>
                        <Text
                            style={styles.detailTitle}
                        >Passageiros:</Text>
                        <Text
                            style={styles.detail}
                        >{`${product.passengers}`}</Text>
                        <Text
                            style={styles.detailTitle}
                        >Capacidade de Carga:</Text>
                        <Text
                            style={styles.detail}
                        >{`${product.cargo_capacity}`}</Text>
                        <Text
                            style={styles.detailTitle}
                        >Suprimentos:</Text>
                        <Text
                            style={styles.detail}
                        >{`${product.consumables}`}</Text>
                        <Text
                            style={styles.detailTitle}
                        >Classe de Veículo:</Text>
                        <Text
                            style={styles.detail}
                        >{`${product.vehicle_class}`}</Text>
                    </View>
                );
            default:
                break;
        }
    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                }}
            >
                <ScrollView
                    style={styles.container}
                    contentContainerStyle={{
                        paddingBottom: 20
                    }}
                    bounces={false}
                >
                    <StatusBar barStyle="light-content" />
                    {this.fieldsView()}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
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
    detailTitle: {
        fontFamily: Fonts.sfuiDisplayMedium,
        fontSize: 22,
        color: Colors.mainColor,
        marginBottom: 5,
        marginTop: 10,
    },
    detail: {
        fontFamily: Fonts.sfuiDisplayRegular,
        fontSize: 18,
        /* textAlign: 'justify', */
    },
});

import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const metrics = {
    HEIGHT: height / 100,
    WIDTH: width / 100,
};

export default metrics;

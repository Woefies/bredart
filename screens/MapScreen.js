import React from 'react';
import { View } from 'react-native';
import styles from '../styles/style';
import MapWithMarkers from '../components/MapWithMarkers';

function MapScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, width: '100%' }}>
                <MapWithMarkers />
            </View>
        </View>
    );
}

export default MapScreen;

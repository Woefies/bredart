// components/MapWithMarkers.js
import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styles from '../styles/style';

const MapWithMarkers = () => {
    const [murals, setMurals] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://stud.hosted.hr.nl/1062594/murals.json')
            .then(response => response.json())
            .then(data => {
                setMurals(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching the murals:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <MapView
            style={styles.map}
            initialRegion={{
                latitude: 51.5919,
                longitude: 4.7783,
                latitudeDelta: 0.06,
                longitudeDelta: 0.06,
            }}
        >
            {murals.map((mural, index) => (
                <Marker
                    key={index}
                    coordinate={{
                        latitude: mural.latitude,
                        longitude: mural.longitude,
                    }}
                    title={mural.title}
                    description={mural.description}
                />
            ))}
        </MapView>
    );
};

export default MapWithMarkers;

import React from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView, Image } from 'react-native';
import styles from '../styles/style';

const HomeScreen = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>BredArt</Text>
            <Image
                source={{ uri: 'https://loremflickr.com/320/240' }}
                style={styles.muralImage}
            />
            <Text style={styles.subtitle}>Explore the vibrant street art of Breda</Text>
            <Text style={styles.description}>
                Discover the hidden gems and colorful murals that bring the city of Breda to life. Whether you're a local resident or a visitor, our app will guide you through the most stunning pieces of street art around the city.
            </Text>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Map')}>
                <Text style={styles.buttonText}>Go to Map</Text>
            </Pressable>
        </ScrollView>
    );
};

export default HomeScreen;
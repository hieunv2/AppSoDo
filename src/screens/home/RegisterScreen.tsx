import React, { FunctionComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import { StyledWebView } from '../../components/base';

const HomeDetailScreen: FunctionComponent = () => {
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <StyledWebView source={{ uri: 'https://reactnative.dev/docs/scrollview' }} style={styles.container} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default HomeDetailScreen;

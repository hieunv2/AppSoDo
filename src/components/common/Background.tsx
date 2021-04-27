import React from 'react';
import { ImageBackground, SafeAreaView, StatusBar, Platform } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import Images from '../../assets/images';

//----------------------------------------------------------------

const Background = ({ children }: any) => {
    return (
        <ImageBackground source={Images.icons.common.background} style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
            <SafeAreaView style={styles.content}>{children}</SafeAreaView>
        </ImageBackground>
    );
};

//----------------------------------------------------------------

const styles = ScaledSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        paddingTop: Platform.select({
            android: 40,
        }),
    },
});

export default React.memo(Background);

import React, { FunctionComponent } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { StyledButton, StyledIcon, StyledTouchable } from '../../components/base';
import Background from '../../components/common/Background';
import images from '../../assets/images';
import { ScaledSheet } from 'react-native-size-matters';

const HomeDetailScreen: FunctionComponent = ({ navigation }: any) => {
    return (
        <Background style={styles.container}>
            <View style={styles.content}>
                <View style={styles.logo}>
                    <StyledIcon source={images.icons.common.logo} size={300} />
                </View>
                <View style={styles.main}>
                    <StyledTouchable customStyle={styles.button} onPress={() => navigation.navigate('LOGIN')}>
                        <Text style={styles.textStyle}>Đăng nhập</Text>
                    </StyledTouchable>
                    <StyledTouchable customStyle={styles.button} onPress={() => navigation.navigate('LOGIN')}>
                        <Text style={styles.textStyle}>Đăng nhập</Text>
                    </StyledTouchable>
                    <StyledTouchable customStyle={styles.button} onPress={() => navigation.navigate('LOGIN')}>
                        <Text style={styles.textStyle}>Đăng nhập</Text>
                    </StyledTouchable>
                </View>
            </View>
        </Background>
    );
};

const styles = ScaledSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
    },
    main: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        marginTop: 40,
        backgroundColor: '#cd031b',
        height: '50@vs',
        width: '200@s',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    textStyle: {
        color: 'white',
        fontWeight: '500',
        fontSize: 24,
    },
});

export default HomeDetailScreen;

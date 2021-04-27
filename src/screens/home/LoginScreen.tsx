import React, { useState, useRef, FunctionComponent } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { StyledWebView } from '../../components/base';
import { WebView, WebViewProps } from 'react-native-webview';

const HomeDetailScreen: FunctionComponent = () => {
    const webviewRef = useRef();

    const [canGoBack, setCanGoBack] = useState(false);
    const [canGoForward, setCanGoForward] = useState(false);
    const [currentUrl, setCurrentUrl] = useState('');

    const backButtonHandler = () => {
        if (webviewRef.current) webviewRef.current.goBack();
    };

    const frontButtonHandler = () => {
        if (webviewRef.current) webviewRef.current.goForward();
    };

    const runFirst = `
    var a = document.getElementsByTagName("a");
    for (i=0; i<a.length; i++)
        if (a[i].target == "framename")
            window.alert(1)
  `;
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <WebView
                    onLoadProgress={({ nativeEvent }) => {
                        console.log('url 1', nativeEvent);
                    }}
                    onNavigationStateChange={(navState) => {
                        console.log('url 2', navState);
                    }}
                    source={{ uri: 'https://sodo13.com/mobile/#/' }}
                    style={styles.container}
                />
                <View style={styles.tabBarContainer}>
                    <TouchableOpacity onPress={backButtonHandler}>
                        <Text style={styles.button}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={frontButtonHandler}>
                        <Text style={styles.button}>Forward</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabBarContainer: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#b43757',
    },
    button: {
        color: 'white',
        fontSize: 24,
    },
});

export default HomeDetailScreen;

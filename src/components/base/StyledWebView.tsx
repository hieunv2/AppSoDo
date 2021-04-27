import * as React from 'react';
import { memo } from 'react';
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native';
import { WebView, WebViewProps } from 'react-native-webview';

const StyledWebView = (props: WebViewProps) => {
    return (
        <View style={styles.container}>
            <WebView
                {...props}
                pullToRefreshEnabled
                startInLoadingState={true}
                renderLoading={() => (
                    <View style={styles.flex1}>
                        <ActivityIndicator size={'large'} />
                    </View>
                )}
                renderError={(errorName) => (
                    <View style={styles.flex1}>
                        <Text>{`Error name: ${errorName}`}</Text>
                        <Text style={styles.textPullDown}>Pull down to try again</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flex1: {
        flex: 1,
    },
    textPullDown: {
        marginTop: 10,
    },
});

export default memo(StyledWebView);

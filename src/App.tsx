import React from 'react';
import { LogBox } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './navigation/NavigationService';
import Navigation from './navigation/scene/RootScenes';
import { RootSiblingParent } from 'react-native-root-siblings';
import APIProvider from './utilities/context/APIProvider';

LogBox.ignoreLogs(['Require cycle:']);

const App: React.FunctionComponent = () => (
    <APIProvider>
        <RootSiblingParent>
            <NavigationContainer ref={navigationRef}>
                <Navigation />
            </NavigationContainer>
        </RootSiblingParent>
    </APIProvider>
);

export default App;

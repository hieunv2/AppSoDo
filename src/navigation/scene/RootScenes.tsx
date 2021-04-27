import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Host } from 'react-native-portalize';
import navigationConfigs from '../config/options';
import { HOME_ROUTE } from '../config/routes';
import HomeScreen from '../../screens/home/HomeScreen';
import LoginScreen from '../../screens/home/LoginScreen';
import RegisterScreen from '../../screens/home/RegisterScreen';
import PromotionScreen from '../../screens/home/PromotionScreen';

const MainStack = createStackNavigator();

const Navigation: React.FunctionComponent = () => {
    return (
        <Host>
            <MainStack.Navigator headerMode={'none'} screenOptions={navigationConfigs}>
                <MainStack.Screen name={HOME_ROUTE.ROOT} component={HomeScreen} />
                <MainStack.Screen name={HOME_ROUTE.LOGIN} component={LoginScreen} />
                <MainStack.Screen name={HOME_ROUTE.REGISTER} component={RegisterScreen} />
                <MainStack.Screen name={HOME_ROUTE.PROMOTION} component={PromotionScreen} />
            </MainStack.Navigator>
        </Host>
    );
};

export default Navigation;

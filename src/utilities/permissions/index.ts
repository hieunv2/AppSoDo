/* eslint-disable consistent-return */
import i18next from 'i18next';
import { Alert } from 'react-native';
import Config from 'react-native-config';
import { check, PERMISSIONS, RESULTS, openSettings, request } from 'react-native-permissions';
import { isIos, logger } from '../helper';

export const checkCamera = async () => {
    try {
        const checkPermission = await check(isIos ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA);
        if (checkPermission === RESULTS.BLOCKED) {
            return false;
        }
        if (checkPermission === RESULTS.DENIED) {
            const result = await request(isIos ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA);
            return result === RESULTS.GRANTED;
        }
        if (checkPermission === RESULTS.UNAVAILABLE) {
            return false;
        }
        return true;
    } catch (err) {
        logger(err);
        return false;
    }
};

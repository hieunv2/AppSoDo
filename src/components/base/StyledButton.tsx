import React, { FunctionComponent } from 'react';
import { StyleProp, StyleSheet, ViewStyle, Text, TextStyle } from 'react-native';
import { Themes } from '../../assets/themes';
import StyledTouchable from '../../components/base/StyledTouchable';

interface StyledButtonProps {
    title: string;
    customStyle?: StyleProp<ViewStyle>;
    onPress(params?: any): void;
    onLongPress?(): void;
    textStyle?: StyleProp<TextStyle>;
    disabled?: boolean;
}

const StyledButton: FunctionComponent<StyledButtonProps> = (props: StyledButtonProps) => {
    const { title, customStyle, onPress, onLongPress, disabled = false, textStyle } = props;
    return (
        <StyledTouchable
            customStyle={[styles.container, customStyle]}
            onPress={onPress}
            onLongPress={onLongPress}
            disabled={disabled}
        >
            <Text style={[styles.title, textStyle]}>{title}</Text>
        </StyledTouchable>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 42,
        width: 128,
        borderColor: Themes.COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
    },
    title: {
        color: Themes.COLORS.textPrimary,
    },
});

export default StyledButton;

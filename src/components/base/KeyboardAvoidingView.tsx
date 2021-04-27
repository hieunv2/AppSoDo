import React, {FunctionComponent} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ViewProps,
  ViewStyle,
} from 'react-native';

interface KeyboardAvoidingViewProps extends ViewProps {
  children: any;
  keyboardVerticalOffset?: number;
  contentContainerStyle?: ViewStyle;
  style?: ViewStyle;
}

const KeyboardAvoid: FunctionComponent<KeyboardAvoidingViewProps> = ({
  children,
  keyboardVerticalOffset,
  contentContainerStyle,
  style,
}) => {
  if (Platform.OS === 'ios') {
    return (
      <KeyboardAvoidingView
        style={style}
        keyboardVerticalOffset={keyboardVerticalOffset || 0}
        contentContainerStyle={contentContainerStyle || {}}>
        {children}
      </KeyboardAvoidingView>
    );
  }
  return <KeyboardAvoidingView style={style}>{children}</KeyboardAvoidingView>;
};

export default KeyboardAvoid;

import React from 'react';
import { TouchableOpacity, Text } from 'react-native';


function ResetButtonStateless({ extensionStyles, onPress, children }) {
    return (
        <TouchableOpacity style={extensionStyles.button} onPress={onPress}>
            <Text style={extensionStyles.label}>{children}</Text>
        </TouchableOpacity>
    );
}

export default ResetButtonStateless;

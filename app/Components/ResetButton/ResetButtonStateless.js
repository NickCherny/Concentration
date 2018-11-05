import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';

class ResetButtonStateless extends Component {

    render() {
        return (
            <TouchableOpacity style={this.props.styles.button} onPress={this.props.onPress}>
                <Text style={this.props.styles.label}>{this.props.children}</Text>
            </TouchableOpacity>
        )
    }
};

export default ResetButtonStateless;

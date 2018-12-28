import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import styles from './Card.styles';

class CardStateless extends Component {
    constructor(...props) {
        super(...props);

        this.state = {
            isTurned: false
        };
    }

    handlerPressCard = () => {
        this.setState(({ isTurned }) => ({ isTurned: !isTurned }));
    }

    render() {
        const { hidden, isTurned } = this.props;
        const itemViewStyles = isTurned ? ({...styles.itemView, backgroundColor: '#FFFFFF'}) : styles.itemView;

        if (hidden) return <View style={{...itemViewStyles, backgroundColor: '#000000'}} />;

        return (
            <TouchableHighlight
                style={itemViewStyles}
                onPress={this.props.onChange}
                underlayColor={"#FFE8AD"}
            >
                <Text style={{ fontSize: 50 }}>{isTurned && this.props.emoji}</Text>
            </TouchableHighlight>
        );
    }
};

export default CardStateless;

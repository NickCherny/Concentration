import React, { Component } from 'react';
import { Text, View, TouchableHighlight, Alert } from 'react-native';


const styles = {
    itemView: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
        backgroundColor: '#FFC33A',
        borderWidth: 1,
        borderColor: '#8A621B',
        marginTop: 10,
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 10,
        borderRadius: 3
    },
}

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

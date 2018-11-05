import React, { Component } from 'react';
import { View, Alert, Text, Button } from 'react-native';

import Card from './Components/Card';


const styles = {
    wrapper: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    cardList: {
        flex: 1,
        flexShrink: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        alignItems: 'center',
        backgroundColor: '#000000',
        paddingTop: 60,
    },
    footer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#000000',
    },
    footerText: {
        color: '#FFFFFF',
        fontSize: 23
    },
    resetButtonWrapper: {
        height: 80,
        backgroundColor: '#FFFFFF'
    }
};

const emojies = ['🤡', '🤑', '👹', '👻', '💩', '🤖', '🤬', '👼', '🧟‍♂️', '👺', '👅'];

const CARDS_COUNT = 19;

const getRandomEmojiIndex = () => Math.round(Math.random() * 10);

class App extends Component {
    constructor(...props) {
        super(...props);

        let cards = [];
        for (let i = 0; i <= CARDS_COUNT; i++) {
            cards.push({ index: i, value: getRandomEmojiIndex(), isTurned: false });
        }

        this.state = {
            items: cards,
            isGame: false,
            flipedCount: 0,
        };
    }

    handleReset = () => {
        this.setState(({ items }) => ({
            flipedCount: 0,
            isGame: false,
            items: items.map((item) => ({ ...item, isTurned: false, hidden: false })),
        }))
    }

    handleCardChange = (index) => {
        this.setState(({ items, isGame }) => {
            items[index].isTurned = !items[index].isTurned;
            const getTurnedCards = () => items.filter(({ isTurned }) => isTurned);

            if (isGame) {
                if (getTurnedCards().every(({ value }) => items[index].value === value)) {
                    getTurnedCards().forEach(item => item.hidden = true);
                } else {
                    items.forEach(item => item.isTurned = false);
                }

                return { items, isGame: false, flipedCount: getTurnedCards().length };
            } else {
                const hasDuble = getTurnedCards().reduce(
                    (acc, item, i) => acc || (item.index !== index && item.value === items[index].value),
                    false
                );


                if (hasDuble) {
                    items.forEach(item => item.isTurned = false);
                    items[index].isTurned = true;
                }

                return { items, isGame: hasDuble, flipedCount: getTurnedCards().length }
            }

        })
    }

    renderCardList() {
        return this.state.items.map(({ index, value, ...props }) => (
            <Card
                key={index}
                emoji={emojies[value]}
                onChange={() => this.handleCardChange(index)}
                {...props}
            />
        ))
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.cardList}>
                    {this.renderCardList()}
                </View>
                <View>
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>Fliped: {this.state.flipedCount}</Text>
                    </View>
                    <View style={{ backgroundColor: '#0C3BA1', height: 60, justifyContent: 'flex-start', paddingTop: 10 }}>
                        <Button color="#FFFFFF" onPress={this.handleReset} title="Reset">asdasd</Button>
                    </View>
                </View>
            </View>
        );
    }
}

export default App;

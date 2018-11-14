import React, { Component } from 'react';

import ListStateless from './ListStateless';


const getRandomEmojiIndex = () => Math.round(Math.random() * 10);
const getTurnedCards = items => items.filter(({ isTurned }) => isTurned);

function makeCardsList(count = 2) {
    let cards = [];
    for (let i = 0; i <= count; i++) {
        cards.push({ index: i, value: getRandomEmojiIndex(), isTurned: false });
    }

    return cards;
}

class List extends Component {
    constructor(...props) {
        super(...props);

        this.state = {
            items: makeCardsList(19),
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

            if (isGame) {
                if (getTurnedCards(items).every(({ value }) => items[index].value === value)) {
                    getTurnedCards(items).forEach(item => item.hidden = true);
                } else {
                    items.forEach(item => item.isTurned = false);
                }

                return { items, isGame: false, flipedCount: getTurnedCards().length };
            } else {
                const hasDuble = getTurnedCards(items).reduce(
                    (acc, item, i) => acc || (item.index !== index && item.value === items[index].value),
                    false
                );


                if (hasDuble) {
                    items.forEach(item => item.isTurned = false);
                    items[index].isTurned = true;
                }

                return { items, isGame: hasDuble, flipedCount: getTurnedCards(items).length }
            }

        })
    }


    renderItemCard({ index, value, ...props }) {
        return (<Card
            key={index}
            emoji={emojies[value]}
            onChange={() => this.handleCardChange(index)}
            {...props}
        />);
    }

    render() {
            const { items, flipedCount } = this.state;

            return (<ListStateless
                items={items}
                flipedCount={flipedCount}
                renderItemCard={this.renderItemCard}
                onReset={this.handleReset}
            />);
    }
}

export default List;

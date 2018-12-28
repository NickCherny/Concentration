import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './List.styles';

function ListStateless({
    items,
    flipedCount,
    renderItemCard,
    onReset,
}) {
    return (
        <View style={styles.ListWrapper}>
            <View style={styles.ListContainer}>{items.map(renderItemCard)}</View>
            <View>
                <View style={styles.ListFooter}>
                      <Text style={styles.ListFooterText}>Fliped: {flipedCount}</Text>
                </View>
                <View style={styles.ListResetButtonGrid}>
                    <Button color="#FFFFFF" onPress={onReset} title="Reset" />
                </View>
            </View>
        </View>
    );
}

export default ListStateless;

import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';


const styles = StyleSheet.create({
    ListWrapper: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#000000',
    },
    ListContainer: {
        flex: 1,
        flexShrink: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        alignItems: 'center',
        paddingTop: 60,
    },
    ListFooter: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
    },
    ListFooterText: {
        color: '#FFFFFF',
        fontSize: 23
    },
    ListResetButtonGrid: {
        backgroundColor: '#0C3BA1',
        height: 60,
        justifyContent: 'flex-start',
        paddingTop: 10
    }
});

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

// column-items.js
import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
export default function ColumnItems() {
const items = ['One', 'Two', 'Three', 'Four', 'Five']
return (
<View style={styles.container}>
{
items.map((item, i) => {
return (
<View key={i} style={styles.items}>
<Text style={styles.text}>{item}</Text>
</View>
)
})
}
</View>
)
}

const styles = StyleSheet.create({
    container: {
    flex: 1, 
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    },
    items: {
    backgroundColor: 'lightgray',
    justifyContent: 'center', 
    alignItems: 'center',
    marginBottom: 5, 
    width: '50%',
    height: '200px',
    text: { color: 'blue', fontSize: 20 }
    },
    })
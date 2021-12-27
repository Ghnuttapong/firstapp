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
    flexDirection: 'column', 
    marginTop: 50, padding: 10
    },
    items: {
    height: 60, backgroundColor: 'lightgray',
    justifyContent: 'center', 
    marginBottom: 15, paddingLeft: 10,
    text: { color: 'blue', fontSize: 20 }
    },
    })
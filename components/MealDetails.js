import { View, Text, StyleSheet } from "react-native";

function MealDetails({mealData}){
   return    <View style={styles.deatiles}>
   <Text style={styles.deatilesItem}>{mealData.duration}</Text>
   <Text style={styles.deatilesItem}>{mealData.complexity.toUpperCase()}</Text>
   <Text style={styles.deatilesItem}>{mealData.affordability.toUpperCase()}</Text>
</View>
}

export default MealDetails;

const styles = StyleSheet.create({
    deatiles: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        justifyContent: 'center'
    },
    deatilesItem: {
        marginHorizontal: 4,
        fontSize: 12,
        color:'white'
    }
})
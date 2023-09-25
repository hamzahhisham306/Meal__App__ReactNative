import { View, Text, StyleSheet, FlatList } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
function MealsOverviewScreen({ route }) {
    const { categoryId } = route.params
    const navigation = useNavigation();
    const displayedMeals = MEALS.filter((mealItem) => mealItem.categoryIds.includes(categoryId))

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((item) => item.id === categoryId);
        navigation.setOptions({
            title: categoryTitle.title
        })
    }, [])
    function renderMealsHandler(itemData) {
        return <MealItem
            title={itemData.item.title}
            complexity={itemData.item.complexity}
            imageUrl={itemData.item.imageUrl}
            duration={itemData.item.duration}
            affordability={itemData.item.affordability}
            mealId={itemData.item.id}
        />
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealsHandler}
            />
        </View>
    )
}


export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})
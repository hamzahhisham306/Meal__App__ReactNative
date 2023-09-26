import { View, Text, StyleSheet, Pressable, Image, ScrollView, Button } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import MealDetails from "../components/MealDetails";
import IconButton from "../components/IconButton";
function MealsDeatiles() {
    const route = useRoute();
    const mealData = route.params.mealDeatiles;
    const navigate = useNavigation();
    const handlerPress = () => {

    }
    useLayoutEffect(() => {
        navigate.setOptions({
            title: mealData.title,
        })
        navigate.setOptions({
            headerRight: () => {
                return <IconButton onPress={handlerPress} name='star' color='white'/>
            }
        })
    }, [handlerPress, navigate])
    return <ScrollView style={styles.mealItem}>
        <Pressable >
            <View>
                <View>
                    <Image source={{ uri: mealData.imageUrl }} style={styles.image} />
                    <Text style={styles.title}>{mealData.title}</Text>
                </View>
                <MealDetails mealData={mealData} />
            </View>
        </Pressable>
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Ingredients</Text>
        </View>
        <View style={styles.ingredientsContainer}>
            {mealData.ingredients.map((item) => (
                <Text key={item} style={styles.ingredients}>{item}</Text>
            ))}
        </View>
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Steps</Text>
        </View>
        <View style={styles.stepsContainer}>
            {mealData.steps.map((item) => (
                <Text key={item} style={styles.step}>{item}</Text>
            ))}
        </View>
    </ScrollView>
}

export default MealsDeatiles;

const styles = StyleSheet.create({
    mealItem: {
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#3f2f25',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    innerConatiner: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 350,
    },

    title: {
        fontWeight: "bold",
        textAlign: 'center',
        fontSize: 24,
        margin: 8,
        color: 'white'
    },
    subtitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: "#e2b497"

    },
    subtitleContainer: {
        padding: 6,
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        margin: 6,
    },
    ingredients: {
        textAlign: 'center',
        color: '#351401',
        borderRadius: 8,
        marginHorizontal: 12,
        marginVertical: 4,

    },
    ingredientsContainer: {
        backgroundColor: '#e2b497',
    },
    step: {
        textAlign: 'center',
        margin: 5,
        color: '#351401'
    },
    stepsContainer: {
        backgroundColor: '#e2b497',
    }
})
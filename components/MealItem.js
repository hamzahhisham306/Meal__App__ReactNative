import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";

function MealItem({ mealId, title, imageUrl, duration, complexity, affordability }) {
    const navigation = useNavigation();
    const mealDeatiles = MEALS.filter((item)=>item.id==mealId)

    function handlerPress() {
       navigation.navigate("MealsDeatiles",{
        mealDeatiles
       })
    
    }
    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{ color: '#ccc' }} style={({ pressed }) => pressed ? styles.pressItem : null} onPress={handlerPress}>
                <View>
                    <View>
                        <Image source={{ uri: imageUrl }} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.deatiles}>
                        <Text style={styles.deatilesItem}>{duration}</Text>
                        <Text style={styles.deatilesItem}>{complexity.toUpperCase()}</Text>
                        <Text style={styles.deatilesItem}>{affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    );
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
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
        height: 200,
    },
    pressItem: {
        opacity: 0.5
    },
    title: {
        fontWeight: "bold",
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
    deatiles: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        justifyContent: 'center'
    },
    deatilesItem: {
        marginHorizontal: 4,
        fontSize: 12,
    }
})
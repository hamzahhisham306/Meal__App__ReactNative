import { View, Text, StyleSheet,Pressable, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
function MealsDeatiles(){
    const route = useRoute();
    const mealData = route.params.mealDeatiles;
    const navigate = useNavigation();
    useLayoutEffect(()=>{
        navigate.setOptions({
            title:mealData[0].title
        })
    },[])
  return   <View style={styles.mealItem}>
            <Pressable android_ripple={{ color: '#ccc' }} style={({ pressed }) => pressed ? styles.pressItem : null} >
                <View>
                    <View>
                        <Image source={{ uri: mealData[0].imageUrl }} style={styles.image} />
                        <Text style={styles.title}>{mealData[0].title}</Text>
                    </View>
                    <View style={styles.deatiles}>
                        <Text style={styles.deatilesItem}>{mealData[0].duration}</Text>
                        <Text style={styles.deatilesItem}>{mealData[0].complexity.toUpperCase()}</Text>
                        <Text style={styles.deatilesItem}>{mealData[0].affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
}

export default MealsDeatiles;

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
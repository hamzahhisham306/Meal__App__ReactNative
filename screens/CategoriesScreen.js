import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data'
import { FlatList } from 'react-native';

function CategoriesScreen({ navigation }) {

    function renderCategoryItem(itemData) {
        function pressHandler() {
            console.log("itemData.item.imageUrl",itemData.item)
            navigation.navigate("MealsOverview", {
                categoryId:itemData.item.id,
                title:itemData.item.title,
                
            
            })
        }
        return <CategoryGridTile  onPress={pressHandler} title={itemData.item.title} color={itemData.item.color} />
    }

    return <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} numColumns={2} renderItem={renderCategoryItem} />
}

export default CategoriesScreen;
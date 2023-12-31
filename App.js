import { StyleSheet, SafeAreaView, Text, Button } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealsDeatiles from './screens/MealsDeatiles';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoriteScreen from './screens/FavoriteScreen';
import { Ionicons } from '@expo/vector-icons';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return <Drawer.Navigator screenOptions={{
    headerStyle: { backgroundColor: '#351401' },
    headerTintColor: "white",
    sceneContainerStyle: { backgroundColor: '#3f2f25' },
    drawerActiveBackgroundColor: "#ccc",
    drawerActiveTintColor: "black",

  }}>
    <Drawer.Screen
      name="Categories"
      component={CategoriesScreen}
      options={{
        title: "All Categories",
        drawerIcon: () => {
          return <Ionicons size={24} color="black" name='home' />
        }
      }}
    />
    <Drawer.Screen
      name="Favorites"
      component={FavoriteScreen}
      options={{
        drawerIcon: () => {
          return <Ionicons size={24} color="black" name="star"/>
        }
      }}
    />
  </Drawer.Navigator>
}

export default function App() {
  return (
    <SafeAreaView style={styles.rootScreen}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: '#351401' },
          headerTintColor: 'white',
          contentStyle: { backgroundColor: '#3f2f25' }
        }}>
          <Stack.Screen name='MealsCategories' component={DrawerNavigator} options={{

            headerShown: false,

          }} />
          <Stack.Screen name='MealsOverview' component={MealsOverviewScreen}
          // options={({ route, navigation }) => {
          //   const catId = route.params.categoryId;
          //   return {
          //     title: catId
          //   };
          // }}
          />
          <Stack.Screen name='MealsDeatiles' component={MealsDeatiles} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

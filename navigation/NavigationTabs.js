import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import EcranAcceuil from "../screens/EcranAcceuil";
import CalculatriceScreen from "../screens/CalculatriceScreen";

const Tab = createBottomTabNavigator();

const NavigationTabs = () => {
    return (
        <Tab.Navigator backBehavior="order">
            <Tab.Screen name="Home" component={EcranAcceuil}
            options={{ 
                tabBarLabel: "Acceuil",
                tabBarActiveTintColor: "#333",
                tabBarInactiveTintColor: "#888",
                title: "Acceuil",
            }}
            />
            <Tab.Screen name="Calculatrice" component={CalculatriceScreen}
            options={{
                tabBarLabel: "Calculatrice",
                tabBarActiveTintColor: "#333",
                tabBarInactiveTintColor: "#888",
                title: "Aller faire mon calcul",
            }}
            />

        </Tab.Navigator>
    )
}

export default NavigationTabs;
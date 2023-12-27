import {NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CourseListScreen from "./screen/CourseListScreen";
import ProfileScreen from "./screen/ProfileScreen";
import SettingScreen from "./screen/SettingScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import {AboutStack} from "./AppStack";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                tabBarLabelPosition: 'below-icon',
                tabBarShowLabel: true,
                tabBarActiveTintColor: 'purple'
            }}>
                <Tab.Screen name="Course List" component={CourseListScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen}
                    options={{
                        title: "My Profile",
                        tabBarIcon: ({ color}) => <Ionicons name='person' size={20} color={color} />,
                        tabBarBadge: 3
                    }}
                />
                <Tab.Screen name="Settings" component={SettingScreen} />
                <Tab.Screen name="About Stack" component={AboutStack} options={{ headerShown: false}} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
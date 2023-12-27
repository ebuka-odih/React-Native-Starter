import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from "@react-navigation/drawer";
import DashboardScreen from "./screen/DashboardScreen";
import SettingScreen from "./screen/SettingScreen";

const Drawer = createDrawerNavigator()

export default function AppDrawer() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Dashboard" component={DashboardScreen}
                               options={{
                                   title: "My Dashboard",
                                   drawerLabel: "Dashboard Label",
                                   drawerActiveTintColor: "#333",
                                   drawerActiveBackgroundColor: "lightblue",
                                   drawerContentStyle: {
                                       backgroundColor: "#c6cbef"
                                   },
                               }}
                />
                <Drawer.Screen name="Settings" component={SettingScreen}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
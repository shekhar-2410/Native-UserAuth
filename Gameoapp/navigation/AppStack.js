import {
  createDrawerNavigator,
} from "@react-navigation/drawer";
import HomeScren from "../screens/HomeScren";
import ProfileScreen from "../screens/ProfileScreen";
import MessageScreen from "../screens/MessageScreen";
import MomentScreen from "../screens/MomentScreen";
import SettingScreen from "../screens/SettingScreen";
import CustomeDrawerScreen from "../screens/CustomeDrawerScreen";
import { AntDesign } from "@expo/vector-icons";
import BottomTab from "../navigation/BottomTab";

const Drawer = createDrawerNavigator();
const AppStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomeDrawerScreen {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "#aa18ea",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#333",
        drawerStyle: { marginLeft: 0 },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={BottomTab}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <AntDesign
              name={focused ? "home" : "home"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <AntDesign
              name={focused ? "user" : "user"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Message"
        component={MessageScreen}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <AntDesign
              name={focused ? "message1" : "message1"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Moment"
        component={MomentScreen}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <AntDesign
              name={focused ? "book" : "book"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <AntDesign
              name={focused ? "setting" : "setting"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;

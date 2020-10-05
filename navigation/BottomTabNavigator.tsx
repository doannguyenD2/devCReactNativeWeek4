import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import CompleteScreen from "../screens/CompleteScreen";
import ActiveScreen from "../screens/ActiveScreen";
import {
  BottomTabParamList,
  CompleteScreenParamList,
  ActiveScreenParamList,
  AllTodoParamList,
} from "../types";
import AllTodoScreen from "../screens/AllTodoScreen";
import SingleTodoScreen from '../screens/SingleTodoScreen';


const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  // @TODO: tab navigator and init route is AllTodoScreen
  return (
    <BottomTab.Navigator
      initialRouteName="AllTodoTab"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Completed"
        component={CompleteTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-done-all" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="AllTodoTab"
        component={AllTodoTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-add-circle-outline" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Active"
        component={ActiveTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-list" size={24} color={color} />          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const CompleteTabStack = createStackNavigator<CompleteScreenParamList>();

function CompleteTabNavigator() {
  return (
    <CompleteTabStack.Navigator>
      <CompleteTabStack.Screen
        name="CompleteScreen"
        component={CompleteScreen}
        options={{ headerTitle: "Completed" }}
      />
    </CompleteTabStack.Navigator>
  );
}

const ActiveTabStack = createStackNavigator<ActiveScreenParamList>();

function ActiveTabNavigator() {
  return (
    <ActiveTabStack.Navigator>
      <ActiveTabStack.Screen
        name="ActiveScreen"
        component={ActiveScreen}
        options={{ headerTitle: "Active Title" }}
      />
    </ActiveTabStack.Navigator>
  );
}

const AllTodoTabStack = createStackNavigator<AllTodoParamList>();

function AllTodoTabNavigator() {
  return (
    <AllTodoTabStack.Navigator>
      <AllTodoTabStack.Screen
        name="AllTodoScreen"
        component={AllTodoScreen}
        options={{ headerTitle: "All To do", headerShown: false }}
      />
      <AllTodoTabStack.Screen
        name="SingleTodoScreen"
        component={SingleTodoScreen}
        options={{ headerTitle: "About task" }}
      />
    </AllTodoTabStack.Navigator>
  );
}

import React from "react";
import {createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import PostScreen from "../screens/PostScreen";

const Stack =  createStackNavigator();

const StackNavigator = ()=> {
    return(
        <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerShown: false
        }}
        >
            <Stack.Scren name="Home" component={TabNavigator}/>    
            <Stack.Scren name="PostScreen" component={PostScreen}/>    
        </Stack.Navigator>
            );
};
   export default StackNavigator;

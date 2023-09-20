import React, {FC} from "react";
import { 
    Pressable,
    Text,
    StyleProp,
    ViewStyle,
    StyleSheet,
    PressableProps
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons  from "@expo/vector-icons/MaterialCommunityIcons";

export type IconLibrary = {
    [key: string]: () => React.ComponentType<any>
}

const ICON_LIBRARIES: IconLibrary = {
    Feather: () => Feather,
    MaterialCommunityIcons: () => MaterialCommunityIcons,
    //add more libraries as needed
}
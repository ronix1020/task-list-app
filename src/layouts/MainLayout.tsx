import React from "react";
import { ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface MainLayoutProps {
    children: React.ReactNode;
    styles?: ViewStyle;
}

const MainLayout = ({children, styles}: MainLayoutProps) => {
    return (
        <SafeAreaView style={{ flex: 1, ...styles }}>
            { children }
        </SafeAreaView>
    )
}

export default MainLayout;
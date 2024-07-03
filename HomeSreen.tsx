import { Text, View } from "react-native";

export default function HomeSreen() {
    return(
        <View
        style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
        <Text>Home Sreen</Text>
        <Text
        style={{
            fontSize: 20,
            fontWeight: 'bold',
        }}>
        Home Sreen
        </Text>
        </View>
    );
}
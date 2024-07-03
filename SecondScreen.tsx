import { Text, View } from "react-native";

export default function SecondScreen() {
    return (
        <View
        style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>Second Screen</Text>
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: 'bold'
                }}>
                    Second Screen
            </Text>
        </View>
    );
}
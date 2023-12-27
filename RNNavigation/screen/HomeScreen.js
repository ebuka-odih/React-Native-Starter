import { StyleSheet, Text, View, Button } from 'react-native';
import {useNavigation} from "@react-navigation/native";

export default function HomeScreen({ navigation, route}) {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home</Text>
            <Text style={styles.text}>{route.params?.result}</Text>
            <Button title="Goto About" onPress={() => navigation.navigate("About", {
                name: "London"
            })}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    }
});

import { StyleSheet, Text, View, Button } from 'react-native';


const DashboardScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Dashboard</Text>
            <Button title="Toggle Drawer" onPress={() => navigation.toggleDrawer()} />
            <Button title="Goto Settings" onPress={() => navigation.jumpTo("Settings")} />
        </View>
    );
}

export default DashboardScreen;

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

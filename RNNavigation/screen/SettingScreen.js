import { StyleSheet, Text, View, Button } from 'react-native';


const SettingScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Setting</Text>
        </View>
    );
}

export default SettingScreen;

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

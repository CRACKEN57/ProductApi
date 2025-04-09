
import { StyleSheet, Button } from 'react-native';

export const HomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#b0b0b0", // added background color
        padding: 20, // added padding
    },
    User: {
        fontSize: 22,
        color: "#333", // added text color
        fontWeight: "bold", // added font weight
        textAlign: "center", // added text alignment
    },
    LoadMore: {
        width: 70,
        height: 70,
        fontSize: 20,
        backgroundColor: "#007bff",
        textAlign: "center",
        left: 20,
        bottom: 20,
        paddingVertical: 20, // added padding vertical
        paddingHorizontal: 20, // added padding horizontal
        color: "#ffffff", // added text color
    },
    LoadMinus: {
        width: 70,
        height: 70,
        fontSize: 20,
        backgroundColor: "#ff0000",
        textAlign: "center",
        right: 20,
        bottom: 20,
        paddingVertical: 20,
        paddingHorizontal: 20,
        color: "#ffffff",
    },
    input: {
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: "#007bff",
    },
    menuButton: {
        padding: 10,
        backgroundColor: "#0245ffff",
        borderRadius: 50,
        position: "absolute",
        top: 40,
        right: 10,
        zIndex: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 10,
    },
    menuIcon: {
        fontSize: 24,
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
    },
    menuItem: {
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#333", // Línea divisoria sutil
        textTransform: "capitalize",
    },
})
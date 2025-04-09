import { StyleSheet } from 'react-native';

export const ProductCardStyles = StyleSheet.create({
    //Diseños de la tarjeta
    container: {
        width: 350,
        height: 420,
        backgroundColor: "#fff",
        borderRadius: 5,
        padding: 10,
        margin: 10,
        shadowColor: "#b2cc09",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 5,
    },
    price: {
        position: "absolute",
        fontSize: 14,
        color: "#ee1414",
        fontWeight: "bold",
        top: -4,
    },
    description: {
        fontSize: 10,
        color: "#666",
        textAlign: "justify",
        maxHeight: 110, // Altura máxima
        height: 110, // Altura mínima
        overflow: "hidden", // Ocultar el desbordamiento
    },
    image: {
        width: 340,
        height: 200,
        borderRadius: 10,
        marginTop: 8,
    },
    button: {
        backgroundColor: "#4CAF50",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
})
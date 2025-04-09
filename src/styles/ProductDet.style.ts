import { StyleSheet } from 'react-native';

export const ProductDetailStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginTop: 8,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
    },
    description: {
        fontSize: 16,
        textAlign: 'justify',
        marginTop: 10,
        paddingHorizontal: 20,
    },
    price: {
        fontSize: 20,
        color: '#ee1414',
        fontWeight: 'bold',
        marginTop: 10,
    },
    
})
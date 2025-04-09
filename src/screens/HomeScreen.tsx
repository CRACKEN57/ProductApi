import React, { useEffect, useState } from 'react'
import { Alert, Button, Pressable, Text, TextInput, View, TouchableOpacity, Animated } from 'react-native';
import { HomeStyles } from '../styles/Home.styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native-gesture-handler';
import { ProductsGen } from '../types/ProductsGen';
import ProductCard from '../components/ProductCard';
import Ionicons from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({ route, navigation }: any) => {

  // UseStates
  const [AllCategories, setAllCategories] = useState<string[]>([])
  const [category, setCategory] = useState<string>("")
  const [inputValue, setInputValue] = useState<string>("")
  const [products, setProducts] = useState<ProductsGen[]>([])

  const [menuOpen, setMenuOpen] = useState(false);
  const slideAnim = useState(new Animated.Value(-200))[0]; // Estado de animación
  const [pagination, setPagination] = useState(0)

  const [selectedProduct, setSelectedProduct] = useState<ProductsGen | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [menuVisible, setMenuVisible] = useState(false) // Estado para el menú hamburguesa

  // Extraer el usuario desde login
  const { user } = route.params; // Extraer el usuario desde login

  const logOut = async () => {
    try {
      await AsyncStorage.removeItem("user")
      navigation.replace("Login")
    } catch (error) {
      Alert.alert("Error", `${error}`)
    }
  }



  // Obtener los productos desde la API
  useEffect(() => {
    const getProducts = async () => {
      if (pagination > 0) {
        setPagination(0)
      }
      console.log(pagination)
      setLoading(true)
      try {
        const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${pagination}`)
        const responseCategories = await fetch(`https://dummyjson.com/products/category-list`)
        const data = await response.json()

        setProducts(data.products)
        setAllCategories(await responseCategories.json())

      } catch (error) {
        setError(`${error}`)
      } finally {
        setLoading(false)
      }
    }
    getProducts()
  }, [pagination])

  //Buscar un producto especifico
  useEffect(() => {

    const getEspecificProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/search?q=${inputValue}`)
        const data = await response.json()
        console.log(pagination)
        setProducts(data.products)
      } catch (error) {
        setError(`${error}`)
      } finally {
        setLoading(false)
      }
    }

    if (inputValue.length > 0) {
      getEspecificProduct()
    } else {
      setPagination(pagination)
    }


  }, [inputValue, pagination])

  // Obtener el producto seleccionado
  useEffect(() => {
    if (selectedProduct) {

      fetch(`https://fakestoreapi.com/products/${selectedProduct.ProductId}`)

      navigation.navigate("Details", { product: selectedProduct })
    }
  }, [selectedProduct])

  useEffect(() => {

    const getProductByCategory = async () => {
      if (category !== "") {
        console.log(category);
        try {
          const response = await fetch(`https://dummyjson.com/products/category/${category}`)
          const data = await response.json()
          setProducts(data.products)
        } catch (error) {
          setError(`${error}`)
        }
      } else {
        setPagination(0)
      }
    }
    getProductByCategory()
  }, [category])

  // Animación del menú hamburguesa
  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: menuOpen ? 0 : -250, // Mueve el menú dentro o fuera de la pantalla
      duration: 300, // Duración de la animación
      useNativeDriver: true,
    }).start();
  }, [menuOpen]);

  return (
    <View style={{ flex: 1 }}>
      {/* Menú hamburguesa */}
      <TouchableOpacity onPress={() => setMenuVisible(!menuVisible)} style={HomeStyles.menuButton}>
        <Text style={HomeStyles.menuIcon}>☰</Text>
      </TouchableOpacity>

      {menuVisible && (
        <View style={{
          position: "absolute",
          top: 40,
          right: 10,
          backgroundColor: "white",
          padding: 10,
          borderRadius: 5,
          zIndex: 10,
          elevation: 5,
        }}>
          <Text style={{ fontWeight: "bold", marginBottom: 5 }}>Categorías</Text>
          {
            AllCategories.map((category, index) => (
              <ScrollView>
                <Pressable key={index} onPress={() => setCategory(category)} style={{ padding: 5 }}>
                  <Text style={HomeStyles.menuItem}>{category}</Text>
                </Pressable>
              </ScrollView>
            ))
          }
        </View>
      )}

      <ScrollView style={{ flex: 1 }}>
        <TextInput
          style={HomeStyles.input}
          value={inputValue}
          onChangeText={
            (text) => setInputValue(text)
          }
          placeholder="Buscar producto"
        />

        {/* Lista de productos */}
        <View style={HomeStyles.container}>
          {loading ? (
            <Text>Cargando...</Text>
          ) : error ? (
            <Text>Error: {error}</Text>
          ) : (
            products.map((product) => (

              <ProductCard
                key={product.ProductId}
                Products={product}
                onPress={() => {
                  setSelectedProduct(product)
                }}
              />

            ))
          )}
        </View>
      </ScrollView>

      {/* Botones de paginación estáticos */}
      <View style={{
        position: "absolute",
        bottom: 10,
        left: 0,
        right: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
      }}>
        <Pressable>
          <Text style={HomeStyles.LoadMinus} onPress={() => setPagination(pagination - 10)}>{`<=`}</Text>
        </Pressable>
        <Pressable>
          <Text style={HomeStyles.LoadMore} onPress={() => setPagination(pagination + 10)}>{`=>`}</Text>
        </Pressable>
      </View>

      <Button title="Cerrar Sesión" onPress={logOut} />
    </View>
  )
}

export default HomeScreen
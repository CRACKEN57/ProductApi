
import { StyleSheet } from "react-native";

export const LoginStyles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d3d3d3',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: '#2c11da',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: '#000000',
    color: '#ffffff',
  },
  button: {
    height: 40,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 20,
    marginTop: 15,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  registerText:{
    fontSize: 18,
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    marginBottom: 10,
  },
});
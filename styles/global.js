const { StyleSheet } = require("react-native");

const globalStyles = StyleSheet.create({
    contenedor:{
        flex:1,
    },
    contenido: {
        paddingHorizontal:'2.5%',
        flex:1,
        width:'100%',
    },
    boton:{
        backgroundColor:'#FFDA00',
        borderRadius:20
    },
    botonTexto: {
        textTransform: 'uppercase',
        fontWeight:'bold',
        color:'#000'
    }
})

export default globalStyles;
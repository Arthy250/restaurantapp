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
    },
    botonTexto: {
        textTransform: 'uppercase',
        fontWeight:'bold',
        color:'#000'
    },
    titulo:{
        textAlign:'center',
        marginTop:40,
        marginBottom:20,
        fontSize: 30,
        fontWeight: 500,
    },
    card:{
        backgroundColor:'#f7f7f7',
        padding: 15,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    imagen: {
        height: 300,
        width: '100%',
        borderRadius:10
    },
    cantidad:{
        marginVertical: 20,
        fontWeight: 'bold'
    }
})

export default globalStyles;
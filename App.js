import React from "react";
import {View,Text,SafeAreaView,StyleSheet,Dimensions} from "react-native";

const App=() => {
  return(
  <SafeAreaView style={styles.container}>
    <View style={styles.boxRed}>
      <View style={styles.grayBox}>
        <View style={styles.innerCircle1}>
         <Text> Orange Circle </Text>
        </View>
        <View style={styles.innerCircle2}>
         <Text> Yellow Box </Text>
        </View>
      </View>
   </View>

    <View style={styles.boxPink}>
     <View style={styles.innercontainer}>
        <View style={styles.innerBlack}>
         <Text style={{color:"white"}}> Black Box </Text>
        </View>
        <View style={styles.innerBrown}>
         <Text style={{transform: [{ rotate: '-90deg'}]}}>Brown Box </Text>
        </View>
      </View>
    </View>
  </SafeAreaView>
  )
}

export default App; 

const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center"
  },
  boxRed:{
    flex:1,
    backgroundColor:"red",
    width:Dimensions.get("window").width,
    
  },
  boxPink:{
    flex:2,
    flexDirection:"row",
    justifyContent:"space-evenly",
    backgroundColor:"pink",
    width:Dimensions.get("window").width,
  alignItems:"center"
  },
  grayBox:{
     backgroundColor:"gray",
     margin:15,
      borderRadius:20,
      height:(Dimensions.get("window").height / 3)-40,
      flexDirection:"row",
      justifyContent:"space-evenly",
      alignItems:"center"
    },
  innerCircle1:{
    backgroundColor:"orange",
    borderRadius:1000,
   paddingVertical:50,
   paddingHorizontal:10,
   alignSelf:"center"

    },
   innerCircle2:{
    backgroundColor:"yellow",
    borderRadius:100,
    fontSize:50,
    padding:10
   },
innercontainer:{
  flex:1,
  flexDirection:"row",
  alignItems:"center",
  justifyContent:"space-evenly",

},
   innerBlack:{
    color:"#e0e0e0",
    backgroundColor:"black",
    borderRadius:15,
    paddingVertical:150,
    paddingHorizontal:50,
   },
    innerBrown:{
    backgroundColor:"brown",
    borderRadius:50,
    paddingVertical:150,
   
   }
})
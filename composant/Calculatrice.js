import React, { useState , useCallback} from 'react'
import { ScrollView, RefreshControl, TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import { Input as ElementsInput , CheckBox , Icon} from '@rneui/base';

const Calculatrice = () => {
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [Nbr1, Nombre] = useState('')
    const [Nbr2, Nombre2] = useState('')
    const [operation, setOperation] = useState(0)
    const [result, setResult] = useState('')
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
    }, []) 
    
    const calculeOperation = (Nbr1, Nbr2) => {
        if(check1){
            let operation = Number(Nbr1) + Number(Nbr2);
            setOperation(operation);
            setResult("Voici le resultat de votre adittion");
        }else if(check2){
            let operation = Number(Nbr1) - Number(Nbr2);
            setOperation(operation);
            setResult("Voici le resultat de votre soustraction");
        }
        else{
            let operation = "NaN"
            setOperation(operation)
            setResult("Cocher un opperateur");
        }
    }
  return (
    
       <ScrollView
        style={styles.scrollContainer}
        refreshControl={<RefreshControl refreshing={refreshing}
        onRefresh={onRefresh} />}
        contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
        }}
        >   
        <ElementsInput
            onChangeText={Nombre}
            value={Nbr1}
            placeholder="Rentrez un nombre"
            keyboardType="numeric"
    />
     
    <CheckBox
      left
      title="+"
      checked={check1}
      onPress={() => setCheck1(!check1)}
    />
    <CheckBox
      left
      title="-"
      checked={check2}
      onPress={() => setCheck2(!check2)}
    />

       <ElementsInput
            onChangeText={Nombre2}
            value={Nbr2}
            placeholder="Rentrez un nombre"
            keyboardType="numeric"
    />     
      <TouchableOpacity style={styles.calculateBtn} onPress={() => {
          calculeOperation(Nbr1, Nbr2);
        }}>
          <Text style={styles.calculateBtnText}>
            Calculer Mon operation
          </Text>
        </TouchableOpacity>

          <View>
            <Text style={styles.resultText}>
                {result}
            </Text>
            <Text style={styles.resultCalcul}>
                {operation}
            </Text>
    </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    container:{
        width: "100%",
        flex: 1,
        justifyContent: "center",
      },
      scrollContainer:{
          width: "100%",
          flex: 1,
      },
      calculateBtn:{
        margin: 30,
        borderWidth: 0.5,
        borderRadius: 4,
        backgroundColor: "#333",
        textAlign: "center",
        paddingVertical: 12,
        justifyContent: "center",
      },
      calculateBtnText: {
        fontSize:24,
        textAlign:"center",
        color:"#fff",
      },
      resultCalcul: {
        fontSize: 48,
        fontWeight: "900",
        textAlign: "center",
        color:"#000",
      },
      resultText: {
        fontSize:24,
        textAlign:"center",
        marginHorizontal: 12,
      }
})

export default Calculatrice

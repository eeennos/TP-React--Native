import React from 'react';
import { WelcomeText } from '../composant';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as RNElements from '@rneui/base';

class EcranAcceuil extends React.Component{
    render(){
        const goToCalculator = () => {
            this.props.navigation.navigate("CalculatriceScreen")
          }
        return(
            <View style={styles.container}>
                <WelcomeText
                    text="Calculatrice App"
                />
                <Image 
                    source={require("../assets/iconCalculatrice.png")}      
                    style={styles.IconAcceuil}
                />
                <RNElements.Button
                color="#202124"
                title="Allez faire mon calcul"
                titleStyle={{
                    color:"white",
                    marginHorizontal: 20,
                    fontWeight: "bold",
                    letterSpacing: 1.5,
                    fontSize: 24,
                }}
                
                buttonStyle={{
                    backgroundColor: "black",
                    borderWidth: 2,
                    paddingVertical: 16,
                    borderColor: "white",
                    borderRadius: 8,
                }}
                onPress={goToCalculator}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    IconAcceuil: {
        width: 200,
        height: 200,
        borderRadius: 4,
        margin: 80,
    },

})
export default EcranAcceuil
import React from 'react';
import { StyleSheet, View} from 'react-native';
import { Calculatrice } from '../composant';

const CalculatriceScreen = ({ navigation}) => {
        return (
            <View style={styles.view}>
               <Calculatrice/>
            </View>
        );
    }


const styles = StyleSheet.create({
    view:{
        flex: 1,
        backgroundColor:"#ffffff",
        justifyContent: "center",
        alignItems: "center",
    }
})

export default CalculatriceScreen;
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function Result(props) {
    const { name, salary, total, errorMessage } = props;
    return (
        <View style={styles.content}>
            {total && (
                <View style={styles.boxResult}>
                    <Text style={styles.title}>RESUMEN</Text>
                    <DataResult title="El empleado: " value={`${name} `} />
                    <DataResult title="Tiene un salario base de : " value={`$${salary} `} />
                    <DataResult title="El descuento del ISS(3%) es de: " value={`$${total.desIss} `} />
                    <DataResult title="El descuento del AFP(4%) es de: " value={`$${total.desAfp} `} />
                    <DataResult title="El descuento de la Renta(5%) es de: " value={`$${total.desRenta} `} />
                    <DataResult title="El salario neto resultante es de: " value={`$${total.sNeto} `} />
                </View>
            )}
            <View>
                <Text style={styles.error}>{errorMessage}</Text>
            </View>
        </View>
    );
}
function DataResult(props) {
    const { title, value } = props;
    return (
        <View style={styles.value}>
            <Text>{title}</Text>
            <Text>{value}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    content: {
        marginHorizontal: 40,
    },
    boxResult: {
        padding: 30,
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    value: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    error: {
        textAlign: 'center',
        color: '#f00',
        fontWeight: 'bold',
        fontSize: 20,
    },
});
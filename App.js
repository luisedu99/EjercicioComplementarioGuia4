/**
* @format
* @flow strict-local
*/
import React, {useState, useEffect} from "react";
import {SafeAreaView, StyleSheet, View, Text, StatusBar } from 'react-native'

import color from "./src/utils/color";
import Form from "./src/components/Form";
import Footer from "./src/components/Footer";
import Result from "./src/components/Result";


export default function App(){
  const [name, setName] = useState(null);
  const [salary, setSalary] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (name && salary) calculate();
    else reset();
  }, [name, salary]);

  const calculate = () => {
    
    const deduccionIss = (salary * 0.03);
    const deduccionAfp = (salary * 0.04);
    const deduccionRenta = (salary * 0.05);
    const salarioNeto = salary- (deduccionIss + deduccionAfp + deduccionRenta);
    setTotal({
      desIss: deduccionIss,
      desAfp: deduccionAfp,
      desRenta: deduccionRenta,
      sNeto: salarioNeto,
    });
  };

  const reset = () => {
    setErrorMessage('');
    setTotal(null);
  };


  return (
    <>
    <statusBar barStyle="light-content"/>
    <SafeAreaView style={styles.Header}>      
    <Text style={styles.HeadApp}>Ejercicio complementario Guia 4 CS171609</Text>
      <Text style={styles.HeadApp}>Obtención de salario neto</Text>
      <Form
        setName={setName}
        setSalary={setSalary}
      />
    </SafeAreaView>
    <Result
      name={name}
      salary={salary}
      total={total}
      errorMessage={errorMessage}
    />
    <Footer calculate={calculate}/>
    </>
  );
}

const styles = StyleSheet.create({
  Header: {
    backgroundColor: color.PRIMARY_COLOR,
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center'
  },
  HeadApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
  },
})



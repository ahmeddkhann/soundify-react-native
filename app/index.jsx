import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <SafeAreaView>
      <StatusBar/>
      <View>
        <Text>App is running fine!</Text>
      </View>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({})
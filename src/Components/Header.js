//@flow
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.header}>
        Cryptocurrency App
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    paddingTop: 20,
    fontWeight: 'bold',
    fontSize: 22,
  }
})

export default Header
import React from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import { images } from '../Utils/CoinIcons'

const CoinCard = ({ symbol, price_usd, percent_change_24h, percent_change_7d, coin_name }) => {

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.mainLeft}>
          <Image
            source={{ uri: images[symbol] }}
            style={styles.coinImage}
          />
          <Text style={styles.separator}>|</Text>
          <Text style={styles.name}>{coin_name}</Text>
        </View>

        <Text>{price_usd.toFixed(3)} $</Text>
      </View>

      <View style={styles.additionalInfo}>
        <Text>24h: 
          <Text style={percent_change_24h >= 0 ? styles.percentInc : styles.percentDec}>
            {percent_change_24h}%
          </Text> 
        </Text>

        <Text>7d: 
          <Text style={percent_change_7d >= 0 ? styles.percentInc : styles.percentDec}>
            {percent_change_7d}%
          </Text> 
        </Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 2,
    borderColor: '#ededed'
  },
  main: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  separator: {
    marginLeft: 5,
    marginRight: 5
  },
  name: {
    fontWeight: 'bold'
  },
  mainLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  additionalInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%'
  },
  percentInc: {
    color: 'green'
  },
  percentDec: {
    color: 'red'
  },
  coinImage: {
    width: 50,
    height: 50
  }
})

export default CoinCard
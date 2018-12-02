import React, { Component } from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import FetchCoinData from '../Actions/FetchCoinData'
import CoinCard from './CoinCard'

export class CryptoContainer extends Component {

  componentDidMount() {
    this.props.FetchCoinData()
  }

  renderCoinCards() {
    const { crypto } = this.props

    return crypto.data.map((coin, index) => (
      <CoinCard
        key={index}
        coin_name={coin.name}
        symbol={coin.symbol}
        price_usd={coin.quote.USD.price}
        percent_change_24h={coin.quote.USD.percent_change_24h}
        percent_change_7d={coin.quote.USD.percent_change_7d}
      />
    ))
  }

  render() {
    if (this.props.crypto.isFetching) {
      return <Text>Loading...</Text>
    }

    return (
      <ScrollView style={styles.listView}>
        {this.renderCoinCards()}
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  const { crypto } = state

  return {
    crypto
  }
}

const styles = StyleSheet.create({
  listView: {
    marginBottom: 50
  }
})

export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer)

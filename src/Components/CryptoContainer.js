//@flow
import * as React from 'react'
import type { ComponentType } from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import type { State, InitialStateType } from '../Utils/StateType.js'
import FetchCoinData from '../Actions/FetchCoinData'
import CoinCard from './CoinCard'

type Props = {
  crypto: InitialStateType,
  FetchCoinData: Function
}

export class CryptoContainer extends React.Component<Props> {

  componentDidMount() {
    this.props.FetchCoinData()
  }

  renderCoinCards() {
    const { crypto } = this.props

    const cards: Array<React.Node> = crypto.data.map((coin, index) => (
      <CoinCard
        key={index}
        coin_name={coin.name}
        symbol={coin.symbol}
        price_usd={coin.quote.USD.price}
        percent_change_24h={coin.quote.USD.percent_change_24h}
        percent_change_7d={coin.quote.USD.percent_change_7d}
      />
    ))

    return cards
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

const styles = StyleSheet.create({
  listView: {
    marginBottom: 50
  }
})

const mapStateToProps = (state: State): State => {
  const { crypto } = state

  return { crypto }
}

export default (connect(mapStateToProps, { FetchCoinData })(CryptoContainer): ComponentType<Props>)

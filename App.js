//@flow
import * as React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'

import { Header, CryptoContainer } from './src/index'
import Store from './src/Store'

export default class App extends React.Component<{}> {
  render() {
    return (
      <Provider store={Store}>
        <View>
          <Header />
          <CryptoContainer />
        </View>
      </Provider>
    );
  }
}
import React, { PureComponent } from 'react';
import {
  Text,
  View
} from 'react-native';
import styles from './<%= name %>Style.js'

class <%= name %> extends PureComponent {
  render () {
    const {} = this.props
    return (
      <View style={styles.root}>
        <Text><%= name %></Text>
      </View>
    )
  }
}
export default <%= name %>

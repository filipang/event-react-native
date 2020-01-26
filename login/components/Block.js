import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class Block extends Component {
    render(){
        const { left,flex, row, center, middle, right, space, style, children, ...props } = this.props;
        const blockStyles = [
            styles.block,
            flex && { flex },
            flex === 'disabled' && { flex: 0 },
            center && styles.center,
            middle && styles.middle,
            right && styles.right,
            space && { justifyContent: `space-${space}` },
            row && styles.row,
            left && styles.left,
            style,
          ];

          return(
              <View style={blockStyles} {...props}>
                  {children}
              </View>
          )
    }
}

const styles = StyleSheet.create({
    block: {
      flex: 1,
    },
    row: {
      flexDirection: 'row'
    },
    center: {
      alignItems: 'center'
    },
    middle: {
      justifyContent: 'center'
    },
    right: {
      justifyContent: 'flex-end'
    },
    left: {
        justifyContent: 'flex-start'
    },
  });
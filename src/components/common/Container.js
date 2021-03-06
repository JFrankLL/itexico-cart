import React from 'react';
import { View } from 'react-native';

const Container = (props) => {
  const { containerStyle } = styles;
  return (
    <View style={containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'column'
  }
};

export { Container };

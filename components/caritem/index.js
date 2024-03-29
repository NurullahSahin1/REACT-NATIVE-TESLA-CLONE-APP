//import liraries
import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';
import StyledButton from '../StyleButton';

// create a component
const CarItem = props => {
  const {name, tagline, image, taglineCTA} = props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>{tagline}</Text>
        <Text style={styles.subTitleCTA}>{taglineCTA}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content={'Custom Order'}
          onPress={() => {
            console.warn('Custom Order ');
          }}
        />
        <StyledButton
          type="secondary"
          content={'Existing Inventory'}
          onPress={() => {
            console.warn('Existing Inventory ');
          }}
        />
      </View>
    </View>
  );
};

//make this component available to the app
export default CarItem;

import * as React from 'react';
import { StyleSheet, View, Text,  } from 'react-native';
import {  SelectTime } from 'react-native-select-date-orenda';
import { utils } from '../../src/utils';

export default function App() {
  const [date,setDate]=React.useState( '18/01/2023')


  return (
    <View style={styles.container}>
      <SelectTime
        valuePicker={date && utils.convertDigitInDate(date)}
        isVisiblePick={true}
        onHidePick={() => {}}
        onPressValue={(date) => {
          setDate(date)
        }}
      />
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});

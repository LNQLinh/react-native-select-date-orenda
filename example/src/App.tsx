import React, { useState } from 'react'
import { Button } from 'react-native'
import {  SelectTime,utils } from 'react-native-select-date-orenda';

export default function App() {
  const [date,setDate]=useState('18/01/2023')
  const [isVisible, setIsVisible] = useState(false)

  return (
    <>
     
      <SelectTime
        valuePicker={date && utils.convertDigitInDate(date)}
        isVisiblePick={isVisible}
        onPressValue={(date) => {
          setDate(date)
        }}
      />
      <Button title="Open" onPress={() => setIsVisible(true)} />
      <Button title="Close" onPress={() => setIsVisible(false)} />
       
    </>
  );
}


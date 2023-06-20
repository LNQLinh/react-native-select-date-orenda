import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { multiply,ModalSelectDate } from 'react-native-select-date-orenda';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();
  const [isVisible,setisVisible]= React.useState(false)
  const date= "18/01/2023"

  React.useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []);

  console.log("---datte", date)

  return (
    <View style={styles.container}>
 <ModalSelectDate
          isVisible={isVisible}
          onBackDropPress={() => setisVisible(false)}
          onPressDate={(value) => {
            setisVisible(false)
          }}
          date={date}
          minDate="31/12/2022"
          maxDate="31/12/2030"
        />
<TouchableOpacity onPress={()=>setisVisible(true)}>
<Text>Result: {result}</Text>

</TouchableOpacity>
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

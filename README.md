# react-native-select-date-orenda

HN

## Installation

```sh
1.Download package with npm or yarn

npm install react-native-select-date-orenda

yarn add react-native-select-date-orenda

2. Install

yarn add react-native-calendars 

```
## Modal

<img src="src/Image/demo.png" height="400px" style="margin-left:10px" />


## Usage

```js
import {  SelectTime } from 'react-native-select-date-orenda';


// ...

   <SelectTime
        valuePicker={date && utils.convertDigitInDate(date)}
        isVisiblePick={true}
        onHidePick={() => {}}
        onPressValue={(date) => {
          setDate(date)
        }}
      />
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)

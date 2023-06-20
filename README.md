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

## Usage

```js
import { ModalSelectDate } from 'react-native-select-date-orenda';

// ...

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
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)

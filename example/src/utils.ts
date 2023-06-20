export const utils = {
    zeroPad(value, length) {
        return `${value}`.padStart(length, "0")
      },
      convertDigitInDate: (str) => {
        if (!str || str == null) return ""
        return str.split("/").reverse().join("-")
      },
      displayDatePicker: (str) => {
        if (!str || str == null) return ""
        return str.split("-").reverse().join("/")
      },
}
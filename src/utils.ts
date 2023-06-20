export const utils = {
    zeroPad(value:any, length:any) {
        return `${value}`.padStart(length, "0")
      },
      convertDigitInDate: (str:any) => {
        if (!str || str == null) return ""
        return str.split("/").reverse().join("-")
      },
      displayDatePicker: (str:any) => {
        if (!str || str == null) return ""
        return str.split("-").reverse().join("/")
      },
}
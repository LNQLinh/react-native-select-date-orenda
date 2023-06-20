import * as React from "react"
import { StyleProp, TextStyle, TouchableOpacity, View, ViewStyle,Text } from "react-native"
// import { VectorIcons } from "../vector-icons/vector-icons"
import { Calendar, LocaleConfig } from "react-native-calendars"
import { ModalSelectMonth } from "./ModalSelectMonth"
// import { VectorIcons } from "./VectorIcons/VectorIcons"
import { utils } from "./utils"
import { ModalSelectYear } from "./modal-select-year"
import { colors } from "./colors"
// import utils from "../../utils"
// import { translate } from "../../i18n"
LocaleConfig.locales.vn = {
  monthNames: [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ],
  monthNamesShort: ["T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8", "T9", "T10", "T11", "T12"],
  dayNames: ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"],
  dayNamesShort: ["CN", "T.2", "T.3", "T.4", "T.5", "T.6", "T.7"],
}
LocaleConfig.defaultLocale = "vn"

const $container: ViewStyle = {
  paddingHorizontal: 16,
  backgroundColor: colors.neutral100,
}
const $warp_picker: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: 14,
}

const $rowSelectMonth: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
}
const $textYear: TextStyle = {
  color: colors.gray800,
  fontSize: 15,
}
const $textMonth: TextStyle = {
  paddingHorizontal: 18,
  color: colors.gray800,
  fontSize: 15,
}
export interface SelectTimeProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  valuePicker: any
  isVisiblePick: boolean
  onHidePick: () => void
  onPressValue?: (value:any) => void
  maxDate?: any
  minDate?: any
}
/**
 * Describe your component here
 */
export const SelectTime = function SelectTime(props: SelectTimeProps) {
  const { style,onPressValue, onHidePick, isVisiblePick, valuePicker, maxDate, minDate } = props
  const styles = Object.assign({}, $container, style)
  // const yearCurrent = new Date().getFullYear()
  // const monthCurrent = new Date().getMonth() + 1

  const [year, setYear] = React.useState(new Date().getFullYear())
  const [month, setMonth] = React.useState(new Date().getMonth() + 1)
  const [isVisibleMonth, setIsvisibleMonth] = React.useState(false)
  const [isVisibleYear, setIsvisibleYear] = React.useState(false)
  const [markedDate, setMarkedDate] = React.useState(
    utils.convertDigitInDate(new Date().toLocaleDateString()),
  )

  React.useEffect(() => {
    if (isVisiblePick) {
      setMarkedDate(valuePicker)
      if (valuePicker) {
        setMonth(new Date(valuePicker).getMonth() + 1)
        setYear(new Date(valuePicker).getFullYear())
      }
    }
  }, [isVisiblePick])

  

  return (
    <>
      {isVisiblePick && (
        <View style={styles}>
          <ModalSelectMonth
            monthDefault={month}
            isVisible={isVisibleMonth}
            onBackDropPress={() => setIsvisibleMonth(false)}
            onPressMonth={(value:any) => setMonth(value)}
          />
          <ModalSelectYear
            minDate={utils.convertDigitInDate(minDate)}
            maxDate={utils.convertDigitInDate(maxDate)}
            isVisible={isVisibleYear}
            onBackDropPress={() => setIsvisibleYear(false)}
            onPressSelect={(value:any) => setYear(value)}
          />
          <View style={$warp_picker}>
            <TouchableOpacity onPress={() => setIsvisibleYear(true)}>
              <Text  style={$textYear} >Năm {year}</Text>
            </TouchableOpacity>
            <View style={$rowSelectMonth}>
              <TouchableOpacity onPress={() => month > 1 && setMonth(month - 1)}>
                {/* <VectorIcons
                  type="Feather"
                  name="chevron-left"
                  size={25}
                  color={colors.primaryDefault}
                /> */}
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setIsvisibleMonth(true)}>
                <Text
                  style={$textMonth}
                 
                >Tháng {month}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => month < 12 && setMonth(month + 1)}>
                {/* <VectorIcons
                  type="Feather"
                  name="chevron-right"
                  size={25}
                  color={colors.primaryDefault}
                /> */}
              </TouchableOpacity>
            </View>
          </View>
          <Calendar
            initialDate={`${year}-${utils.zeroPad(month, 2)}-01`}
            minDate={utils.convertDigitInDate(minDate) || "1900-01-01"}
            maxDate={utils.convertDigitInDate(maxDate)}
            onDayPress={(day:any) => {
              setMarkedDate(day.dateString)
              onPressValue(utils.displayDatePicker(day.dateString))
              onHidePick()
            }}
            hideArrows={true}
            // monthFormat={"MM yyyy"}
            onMonthChange={() => {}}
            hideExtraDays={true}
            renderHeader={() => {
              return <></>
            }}
            theme={{
              textSectionTitleColor: colors.neutral400,
              textSectionTitleDisabledColor: "#d9e1e8",
              dayTextColor: colors.gray700,
              todayTextColor: "#00948A",
              todayButtonFontWeight: "600",
            //   textDayFontFamily: typography.primary.medium,
              textDayStyle: { fontWeight: "400" },
              textDayFontSize: 16,
              monthTextColor: colors.neutral900,
            //   textMonthFontFamily: typography.familyBold,
            }}
            markingType={"custom"}
            markedDates={{
              [markedDate]: {
                selected: true,
                disableTouchEvent: true,
                selectedColor: "#E8F8F5",
                selectedTextColor: "#00948A",
                customTextStyle: { fontWeight: "600" },
              },
            }}
          />
        </View>
      )}
    </>
  )
}
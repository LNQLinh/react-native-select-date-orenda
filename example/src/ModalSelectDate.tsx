import * as React from "react"
import { FlatList, StyleProp, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import Modal from "react-native-modal"
// import configs from "../../utils/configs"
import { SelectTime } from "./select-time"
import { utils } from "./utils"
import { configs } from "./configs"
import { colors } from "./colors"
export interface ModalSelectDateProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  isVisible: boolean
  onBackDropPress: () => void
  date: any
  onPressDate: (value:any) => void
  maxDate?: any
  minDate?: any
}

/**
 * Describe your component here
 */

export const ModalSelectDate = function ModalOverview(props: ModalSelectDateProps) {
  const { style, isVisible, onBackDropPress, onPressDate, date, maxDate, minDate } = props
  const styles = Object.assign({}, $container, style)
  const [showPicker, setShowpicker] = React.useState(false)

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onBackDropPress}
      style={styles}
      animationInTiming={500}
      animationOutTiming={500}
    >
      <View style={$content}>
        <View style={{ alignItems: "center" }}>
          <View style={$line} />
        </View>
        <SelectTime
          valuePicker={date && utils.convertDigitInDate(date)}
          isVisiblePick={true}
          onHidePick={() => setShowpicker(false)}
          onPressValue={(value) => onPressDate(value)}
          maxDate={maxDate}
          minDate={minDate}
        />
      </View>
    </Modal>
  )
}

const $line: ViewStyle = {
  height: 6,
  width: 60,
  borderRadius: 60,
  backgroundColor: "#E6E6E6",
  marginBottom: 20,
}
const $container: ViewStyle = {
  justifyContent: "flex-end",
  margin: 0,
}

const $content: ViewStyle = {
  minHeight: configs.windowHeight * 0.4,
  backgroundColor: colors.neutral100,
  borderTopLeftRadius: 12,
  borderTopRightRadius: 12,
  paddingVertical: 16,
}

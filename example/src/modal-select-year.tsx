import * as React from "react"
import { FlatList, StyleProp, TextStyle, TouchableOpacity, View, ViewStyle, Text } from "react-native"
import Modal from "react-native-modal"
import { configs } from "./configs"
import { colors } from "./colors"

const $container: ViewStyle = {
  flex: 1,
  justifyContent: "flex-end",
  margin: 0,
}
const $content: ViewStyle = {
  backgroundColor: colors.neutral100,
  height: configs.windowHeight * 0.5,
  borderTopLeftRadius: 12,
  borderTopRightRadius: 12,
}

const $textYear: TextStyle = {
  color: colors.neutral900,
  fontSize: 16,
}
const $btnYear: ViewStyle = {
  paddingHorizontal: 16,
  paddingVertical: 8,
}
const $line: ViewStyle = {
  height: 1,
  backgroundColor: colors.neutral300,
  marginHorizontal: 16,
}
export interface ModalSelectYearProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  isVisible: boolean
  onBackDropPress: () => void
  onPressSelect: (value:any) => void
  maxDate?: any
  minDate?: any
}

/**
 * Describe your component here
 */
export const ModalSelectYear = function ModalSelectYear(props: ModalSelectYearProps) {
  const { style, isVisible, onBackDropPress, onPressSelect, maxDate, minDate } = props
  const styles = Object.assign({}, $container, style)
  const yearCurrent = maxDate ? new Date(maxDate).getFullYear() : new Date().getFullYear()
  const yearMin = minDate ? new Date(minDate).getFullYear() - 1 : 1899
  const listYear = Array.from({ length: yearCurrent - yearMin }, (_, i) => yearCurrent - i)

  return (
    <Modal isVisible={isVisible} style={styles} onBackdropPress={onBackDropPress}>
      <View style={$content}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={listYear}
          keyExtractor={( index) => `${index}`}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={$btnYear}
              onPress={() => {
                onPressSelect(item)
                onBackDropPress()
              }}
            >
              <Text  style={$textYear}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={() => <View style={$line} />}
        />
      </View>
    </Modal>
  )
}

import * as React from "react"
import { FlatList, StyleProp, TextStyle, TouchableOpacity, View, ViewStyle,Text,Dimensions } from "react-native"
import Modal from "react-native-modal"

const {  height } = Dimensions.get("window")

const $container: ViewStyle = {
  justifyContent: "flex-end",
  flex: 1,
  margin: 0,
}

const $content: ViewStyle = {
  height: height * 0.4,
  borderTopLeftRadius: 12,
  borderTopRightRadius: 12,
  backgroundColor: "#FFFFFF",
  paddingVertical: 12,
}
const $textMonth: TextStyle = {
  color: "#000000",
  fontSize: 16,
}
const $btnMonth: ViewStyle = {
  paddingHorizontal: 16,
  paddingVertical: 8,
}
const $line: ViewStyle = {
  height: 1,
  backgroundColor: "#F5F6F8",
  marginHorizontal: 16,
}

export interface ModalSelectMonthProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  isVisible: boolean
  monthDefault: any
  onBackDropPress: () => void
  onPressMonth: (value:any) => void
}

/**
 * Describe your component here
 */
export const ModalSelectMonth = function ModalSelectMonth(props: ModalSelectMonthProps) {
  const { style, isVisible, onBackDropPress, onPressMonth } = props
  const styles = Object.assign({}, $container, style)
  return (
    <Modal isVisible={isVisible} style={styles} onBackdropPress={onBackDropPress}>
      <View style={$content}>
        <View style={{ alignItems: "center", marginTop: 8 }}>
          <View style={$lineTop} />
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
          keyExtractor={( index) => `${index}`}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={$btnMonth}
              onPress={() => {
                onPressMonth(item)
                onBackDropPress()
              }}
            >
              <Text  style={$textMonth}>
                Tháng {item}
              </Text>
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={() => <View style={$line} />}
        />
      </View>
    </Modal>
  )
}
const $lineTop: ViewStyle = {
  height: 6,
  width: 60,
  borderRadius: 60,
  backgroundColor: "#E6E6E6",
  marginBottom: 20,
}

import { Dimensions, Platform } from "react-native"
// Size Iphone 11 pro
const guidelineBaseWidth = 375
const guidelineBaseHeight = 812
const { width, height } = Dimensions.get("window")
export const configs = {
  windowWidth: width,
  windowHeight: height,
 
}

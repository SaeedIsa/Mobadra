import * as React from "react"
import Svg, {Path, Text, TextPath} from 'react-native-svg';

function CustomHexagon(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 519" width="200" height="200" {...props}>
      <Path
        fill="#2f7a92"
        d="M450 0H150L0 259.22l150 259.22h300l150-259.22L450 0z"
        data-name="Layer 2"
      />
    <Text
    fill="none"
    stroke="purple"
    fontSize="100"
    fontWeight="bold"
    x="100"
    y="20"
    textAnchor="middle"
  >
    STROKED TEXT
  </Text>
    </Svg>
  )
}

export default CustomHexagon
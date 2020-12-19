import * as React from "react"
import Svg, {Path, Text, TextPath, G} from 'react-native-svg';

function CustomEvent(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 519" width="210" height="190" {...props}>
      <G data-name="Layer 2">
        <Path
          fill={props.color_map}
          d="M450 0H150L0 259.22l150 259.22h300l150-259.22L450 0z"
        />
        <Text
          transform="matrix(.77 0 0 1 187.47 150.67)"
          fill="#fff"
          fontWeight={300}
          fontSize={102.77}
        >
          {"sometime"}
        </Text>
        <Text
          transform="matrix(.77 0 0 1 94.96 318.65)"
          fontSize={98.78}
          fill="#fff"
          fontWeight={300}
        >
          {"something"}
        </Text>
        <Text
          transform="matrix(.77 0 0 1 198.38 452.98)"
          fontSize={50.88}
          fill="#fff"
          fontWeight={300}
        >
          {"somewhere"}
        </Text>
      </G>
    </Svg>
  )
}

export default CustomEvent
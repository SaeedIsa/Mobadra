import * as React from "react"
import Svg, {Path, Text, G, Defs, SvgCss} from 'react-native-svg';
import TouchableOpacityG from '../touchable_opacity_g';

function CustomEventRow(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1089.84 554.5"
      width='400'
      height='200'
      {...props}
    >
      <G id="prefix__Layer_2" data-name="Layer 2">
        <G id="prefix__Edu">
          {!props.last && <TouchableOpacityG
            onPress={e => {
                console.log('presseed path *** 111111');
            }}>
           <Path
            fill={props.colors_map[0]}
            d="M1089.84 554.17l-150-259.22h-300l-150 259.22.19.33h599.62l.19-.33z"
          />
          </TouchableOpacityG>}
          {!props.first && <TouchableOpacityG
            onPress={e => {
                console.log('presseed path *** 22222');
            }}>
          <Path
            fill={props.colors_map[1]}
            d="M490.08 0l-.24.41 150 259.22h300l150-259.22-.24-.41H490.08z"
          />
          </TouchableOpacityG>}
          <TouchableOpacityG
            onPress={e => {
                console.log('presseed path *** 33333');
            
            }}
            disabled>
          <Path
            fill={props.colors_map[2]}
            d="M450 17.57H150L0 276.79l150 259.22h300l150-259.22L450 17.57z"
          />
          </TouchableOpacityG>
          <TouchableOpacityG
            onPress={e => {
                console.log('presseed here1111');
            }}>
          <Text
            className="prefix__cls-4"
            transform="matrix(.77 0 0 1 173.5 379.22)"
            fontSize='102.77'
            fill='#fff'
            fontWeight='300'
          >
            {"12.101.200"}
          </Text>
          </TouchableOpacityG>
          {!props.first && <TouchableOpacityG
            onPress={e => {
                console.log('presseed here2222');
            }}>
          <Text
            className="prefix__cls-4"
            transform="matrix(.77 0 0 1 663.35 102.3)"
            fontSize='102.77'
            fill='#fff'
            fontWeight='300'
          >
            {"120.10.20"}
          </Text>
          </TouchableOpacityG>}
          <TouchableOpacityG
            onPress={e => {
                console.log('presseed here3333');
            }}>
          <Text
            className="prefix__cls-5"
            transform="matrix(.77 0 0 1 80.69 215.28)"
            fill='#fff'
            fontWeight='300'
            fontSize='99'
          >
            {"Orintation Day11"}
          </Text>
          </TouchableOpacityG>
          {!props.last && <TouchableOpacityG
            onPress={e => {
                console.log('presseed here 44444');
            }}>
          <Text
            className="prefix__cls-5"
            transform="matrix(.77 0 0 1 570.53 493.6)"
            fill='#fff'
            fontWeight='300'
            fontSize='98.78'
          >
            {"Orintation Day222"}
          </Text>
          </TouchableOpacityG>}
          {!props.first && <TouchableOpacityG
            onPress={e => {
                console.log('presseed here 55555');
            }}>
          <Text
            className="prefix__cls-6"
            transform="matrix(.77 0 0 1 691.7 174.17)"
            fill='#fff'
            fontWeight='300'
            fontSize='51'
          >
            {"Majd El Kurum 111"}
          </Text>
          </TouchableOpacityG>}
          {!props.first &&
            <TouchableOpacityG
            onPress={e => {
                console.log('presseed path *** 4444444');
            }}>
          <Path
            className="prefix__cls-7"
            d="M669.47 137a12.66 12.66 0 00-10.77 19.31l10 16.19a1 1 0 00.89.5 1.06 1.06 0 00.9-.51l9.79-16.35A12.67 12.67 0 00669.47 137zm9.06 18.06l-8.9 14.86-9.14-14.72a10.55 10.55 0 1118-.14z"
            fill='#fff'
          />
          </TouchableOpacityG>}
          {!props.first &&
          <TouchableOpacityG
            onPress={e => {
                console.log('presseed path *** 5555');
            }}>
          <Path
            className="prefix__cls-7"
            d="M669.47 143.33a6.33 6.33 0 106.32 6.33 6.34 6.34 0 00-6.32-6.33zm0 10.56a4.24 4.24 0 114.22-4.23 4.24 4.24 0 01-4.22 4.23z"
            fill='#fff'
          />
          </TouchableOpacityG>}
          <TouchableOpacityG
            onPress={e => {
                console.log('presseed here 6666');
            }}>
          <Text
            className="prefix__cls-6"
            transform="matrix(.77 0 0 1 201.86 449.17)"
            fill='#fff'
            fontWeight='300'
            fontSize='51'
          >
            {"Majd El Kurum222 "}
          </Text>
          </TouchableOpacityG>
          <TouchableOpacityG
            onPress={e => {
                console.log('presseed path *** 666666');
            }}>
          <Path
            className="prefix__cls-7"
            d="M179.63 412a12.66 12.66 0 00-10.77 19.31l10 16.19a1 1 0 00.89.5 1.06 1.06 0 00.9-.51l9.79-16.35A12.67 12.67 0 00179.63 412zm9.06 18.06l-8.9 14.86-9.14-14.72a10.55 10.55 0 1118-.14z"
            fill='#fff'

          />
          </TouchableOpacityG>
          <TouchableOpacityG
            onPress={e => {
                console.log('presseed path *** 77777777');
            }}>
          <Path
            className="prefix__cls-7"
            d="M179.63 418.33a6.33 6.33 0 106.32 6.33 6.34 6.34 0 00-6.32-6.33zm0 10.56a4.24 4.24 0 114.22-4.23 4.24 4.24 0 01-4.22 4.23z"
            fill='#fff'

          />
          </TouchableOpacityG>
        </G>
      </G>
    </Svg>
  )
}

export default CustomEventRow
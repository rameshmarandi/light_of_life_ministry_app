
import {StyleSheet} from "react-native"
import { backgroundColorHandler } from "../../Components/commonHelper";
import { getFontSize, getResHeight, getResWidth } from "../../utility/responsive";
import { useSelector } from "react-redux";

// let {isDarkMode , currentBgColor , curentTextColor} = useSelector(state => state.user);


// let backgrounColorG = backgroundColorHandler()

export const styles = StyleSheet.create({
    drawerContainer: {
      flex: 1,
      padding: 0,
      borderBottomRightRadius: 30,
    //   backgroundColor:"red"
    },
    imageContainer: {
      backgroundColor:"red",
      paddingHorizontal:"5%",
      flexDirection:"row",
      // justifyContent:"center",
      alignItems:"center"
    },
    btnTitleStyle: {
      textAlign: 'left',
      fontSize: getFontSize(1.6),
      marginLeft: getResWidth(3)
      // marginLeft: '5%',
      // marginTop: '2%',
    },
    btnContainerStyle: {
      marginBottom: getResHeight(0.7),
      width: '100%',
    },
    buttonStyle: {
      // backgroundColor : `${backgroundColor}`,
      // backgroundColor:`${backgroundColorHandler()}`
      // flexDirection: 'row',
      // justifyContent: 'center',
      // alignItems: 'center',
      justifyContent: 'flex-start',
      width: '100%',
      // height: '100%',
      overflow: 'hidden',
      paddingLeft: getResWidth(4),
    },
  });
  
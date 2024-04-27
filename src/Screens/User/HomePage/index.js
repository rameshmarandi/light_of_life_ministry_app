// import React, {Component} from 'react';
// import {View, Text} from 'react-native';
// import {connect} from 'react-redux';

// export class index extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {}
//   }
//   render() {
//     return (
//       <>
//         <SafeAreaView
//           style={{
//             flex: 1,
//             justifyContent: 'center',
//             alignContent: 'center',
//             alignItems: 'center',
//           }}>
//           <Text> HomePage </Text>
//           <TouchableOpacity
//             onPress={() => {
//               this.props.navigation.navigate('ProfilePage');
//             }}
//             style={{
//               marginTop: '5%',
//             }}>
//             <Text>onPress to move Profile page</Text>
//           </TouchableOpacity>
//         </SafeAreaView>
//       </>
//     );
//   }
// }

// const mapStateToProps = state => ({});

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(index);

import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  FlatList,
} from 'react-native';
import React from 'react';
import {VectorIcon} from '../../../Components/VectorIcon';
import theme from '../../../utility/theme';
import CustomHeader from '../../../Components/CustomHeader';
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../../../reducer/CounterSlice';


const index = ({navigation}) => {
  StatusBar.setBarStyle('light-content');
  StatusBar.setBackgroundColor(theme.color.darkTheme); // Set your desired background color
  const count = useSelector((state) => state.user.user)
  // const dispatch = useDispatch()

  // console.log("Counter---" , count)

  console.tron.log("Final blog", count)

  let Data = ["Flatlst" , "Scrollview" , "Test"]

  const renderItem = ({item})=>{
return <Text>{item}</Text>
  }
  return (
    <SafeAreaView style={{
      flex:1
    }}>
      <CustomHeader
      Hamburger={() => {
        // navigation.openDrawer();
      }}
      centerLogo={true}
      />
      <FlatList
      data ={Data}
      renderItem = {renderItem}
      />
      <Text
        style={{
          fontFamily: theme.font.bold,
        }}>
        Homeapge
      </Text>
      <VectorIcon
        type={'AntDesign'}
        name={'stepforward'}
        color={'red'}
        size={23}
      />
      <TouchableOpacity
        onPress={() => {
          // navigation.navigate('Settings');
          // dispatch(increment())
        }}>
        <Text
          style={{
            color: 'red',
          }}>
          Clcie
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default index;

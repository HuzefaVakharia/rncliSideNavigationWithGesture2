/* eslint-disable prettier/prettier */
import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import
{
 Image,
 Text,
 View
} from 'react-native';
import
{
 responsiveFontSize,
 responsiveHeight,
 responsiveWidth,
} from 'react-native-responsive-dimensions';




const DrawerNavigationMenuItem = (props) =>
{
 

 return (
  <View style={ { flex: 1, flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', marginTop: responsiveHeight(0) } }>






   <View
    style={ {
     //This view is to give gray box which will hold first menu icon

     borderRadius: 10,
     backgroundColor: '#E6E1DC',
     /* width: responsiveWidth(11),
     height: responsiveHeight(5), */
     width: responsiveWidth(11.5),
     height: responsiveHeight(5.5),
     marginLeft: responsiveWidth(5),
     //marginTop: responsiveHeight(2),
    } }>
    <View
     style={ {
      //This is view inside gray box and we have given flex:1,justifyContent:'center' so that whatever image we put
      //inside this view will get justifyContent:'center'
      flex: 1,
      justifyContent: 'center',
      alignSelf: 'center',
      //backgroundColor:'red'
      //flexDirection:'row',
     } }>
     <Image
      source={ props.itemIconPropslabel }
      //style={ { height: responsiveHeight(3.5), width: responsiveWidth(7) } }
      style={ { height:responsiveHeight(props.heightOfLeftSideIcon), width:responsiveWidth(props.widthOfLeftSideIcon) } }
     />

     {/* <Ionicons name="home-outline" size={22} color="black" /> */ }
    </View>
   </View>






   <View
    style={ {
     //This view is for holding Drawer Navigation Menu Item Name

     //borderRadius: 10,
     //backgroundColor:'#E5E6E7',
     width: responsiveWidth(36),
     height: responsiveHeight(10),
     //marginLeft:responsiveWidth(5),
     //marginTop: responsiveHeight(2),
    } }>
    <View
     style={ {
      flex: 1,
      //justifyContent: 'center',
      //justifyContent: 'flex-start',   
      //alignSelf: 'center',
      justifyContent:props.justifyContentForItemName,
      marginTop:responsiveHeight(props.marginTopForItemName),
      marginLeft: responsiveWidth(2),
      //backgroundColor:'purple'
      //flexDirection:'row',
     } }>
     <Text
      style={ {
       fontSize: responsiveFontSize(2.5),
       
       color: 'black',
      } }>
      { props.itemNamePropslabel }
     </Text>
    </View>
   </View>











   <View
    style={ {
     width: responsiveWidth(11),
     height: responsiveHeight(5),
     marginLeft: responsiveWidth(21),
     //backgroundColor:'yellow',
     //marginTop: responsiveHeight(2),
    } }>
    <View
     style={ {
      flex: 1,
      justifyContent: 'center',
      alignSelf: 'center',
      //flexDirection:'row',
     } }>
     {props.showRightIcon=='Yes'?
     
     <Image
      source={require('../images/drawer_end.png')}
      //style={ { height: responsiveHeight(3.5), width: responsiveWidth(7) } }
      style={ { height:responsiveHeight(2.5), width:responsiveWidth(3) } }
     />
     
     :null}
    </View>

   </View>





  </View>
 );
};

export default DrawerNavigationMenuItem;


/* <AntDesign name="right" size={ 15 } color="black" /> */

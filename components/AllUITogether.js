/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import
  {
    Animated,
    Dimensions,
    FlatList,
    Image,
    ImageBackground,
    Modal,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
  } from 'react-native';

import
  {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
//import { TextInput } from 'react-native-paper';
import { Badge, Button } from '@rneui/themed';




import React, { useEffect, useRef, useState } from 'react';





let { height, width } = Dimensions.get('window');






















export default function AllUITogether(props)
{
  /*Section for putting all const variable or hard coded value for all variable starts here  */
  

  

  /* Section for putting all const variable or hard coded value for all variable ends here */

  /* Section for putting all useState starts here: find this section in this file using keyword 'all useState' */

  const today = new Date();
  const [openStartDatePicker, setOpenStartDatePicker] = useState(false); // open close modal
 
  const [startedDate, setStartedDate] = useState('12/12/2023');
  const [isLoadingForGalleryImages, setIsLoadingForGalleryImages] =
    useState(false);
  
    const [selectedChip, setSelectedChip] = useState(-1);
  

  const [previousImage, setPreviousImage] = useState(null);
  const [previousImages, setPreviousImages] = useState([]);

 
  let imageBaseAPI = 'https://rajeshwersoftsolution.com/jwelcart/public';
  
  

 
  const [
    largeDropDownForFetchingLocalDataclicked,
    setLargeDropDownForFetchingLocalDataclicked,
  ] = useState(false);
  

  const [threeLineButtonClicked, setthreeLineButtonClicked] = useState(false);
  

  

 

 

  const [cameraOrGalleryOptionsModal, setcameraOrGalleryOptionsModal] =
    useState(false);

 

  

  /* Section for putting all useState ends here : find this section in this file using keyword 'all useState'*/

  

  /*Section for putting all functions which are reuseable starts here: find this section in this file using keyword 'all functions' */

  



  

  

  

  /* Section for putting all functions which are reuseable ends here: find this section in this file using keyword 'all functions' */

if (props.show == 'SideDrawerThreeLineImage')//--------------------------------------------------->    
  {
    return (
      <>
        <Image
          source={ require('../images/drawer.png') }
          style={ {
            width: responsiveWidth(8),
            height: responsiveHeight(4),
          } }
        />
      </>
    );
  } else if (props.show == 'TopLabelForPagesListedInBottomNavigation')//Keep this ------------------------------>
  {
    return (
      <>
        <Text
          style={ {
            fontSize: responsiveHeight(3),
            
            marginLeft: responsiveWidth(
              props.marginLeftPropsForTopLabelForPagesInBottomNav
            ),
            marginTop: responsiveHeight(-5),

            color: 'white',
          } }>
          { props.topLabelForPagesListedInBottomNavProps }
        </Text>
      </>
    );
  } else if (props.show == 'TopSmallIcon')//-------------------------------------------------------->
  {
    return (
      <>
        <TouchableOpacity
          onPress={ () =>
          {
            props.dothisWhenTopSmallIconPressedProps();
          } }>
          <Image
            //source={require('../images/bell.png')}
            source={ props.iconToDisplayPathProps }
            style={ {
              width: props.widthOfTopSmallIconprops,
              height: props.heightOfTopSmallIconprops,
              //marginTop: responsiveHeight(-4),
              //marginLeft: responsiveWidth(85),
              marginTop: responsiveHeight(props.marginTopOfTopSmallIconprops),
              marginLeft: responsiveWidth(props.marginLeftOfTopSmallIconprops),
              //backgroundColor:'purple',
            } }
          />
          { props.showBadgeAlsoprops == true ? (
            <Badge
              status="error"
              value={ props.bellNotificationNumberProps }
              containerStyle={ {
                position: 'absolute',
                top: responsiveHeight(-5),
                right: responsiveWidth(6),
              } }
            />
          ) : null }
        </TouchableOpacity>
      </>
    );
  } 
  }

/* THIS IS THE SYNTAX OF USING ALREADY CREATED STYLE AND ALSO ADDING SOME NEW ATTRIBUTEIS IN ALREADY CREATED CONST STYLE :

                                                    style={[styles.container,{NEW ATTRIBUTES HERE},]}       */





/* This above closing curly bracket is for closing AllUITogether() function */


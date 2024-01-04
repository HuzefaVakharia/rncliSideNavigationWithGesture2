/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
//import liraries
import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, Dimensions, SafeAreaView, Alert, TouchableOpacity} from 'react-native';
import ActualSideNavigationMenu from './ActualSideNavigationMenu';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';


import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import AllUITogether from './components/AllUITogether';

let { height, width } = Dimensions.get('window');
// create a component















const App = () => {


  const gesture = Gesture.Pan().onUpdate((event) => {
    runOnJS(openingSideDrawerMenu)();
  });




  const translateX = useSharedValue(0);

  const openingSideDrawerMenu = () => {
    ChildRef.current.openSideNavigationMethod() ||
      setthreeLineButtonClicked(ChildRef.current.bringGrayColor);
  };

  /* const gesture = Gesture.Pan().onUpdate(event => {
    runOnJS(openingSideDrawerMenu)();
  }); */

  const ChildRef = useRef();

  const goToCategoryScreen = () => {
    Alert.alert('Clicked...');
    ChildRef.current.closeSideNavigationMethod();
  };

  const goToCaratScreen = () => {
    Alert.alert('Clicked...');
    ChildRef.current.closeSideNavigationMethod();
  };

  const goToColorScreen = () => {
    Alert.alert('Clicked...');
    ChildRef.current.closeSideNavigationMethod();
  };

  const goToAddStaffScreen = () => {
    Alert.alert('Clicked...');
    ChildRef.current.closeSideNavigationMethod();
  };

  const goToChangePasswordScreen = () => {
    Alert.alert('Clicked...');
    ChildRef.current.closeSideNavigationMethod();
  };

  const goToSettingsScreen = () => {
    Alert.alert('Clicked...');
    ChildRef.current.closeSideNavigationMethod();
  };

  

  const [selectedMenuItem, setSelectedMenuItem] = useState(0);
  const [threeLineButtonClicked, setthreeLineButtonClicked] = useState(false);

  const [hideFlatList, sethideFlatList] = useState(false);

  let [bellNotificationNumber, setBellNotificationNumber] = useState(0);
  
  
  
  
  
  
  
  const bellIconPressedInHomeScreenDoThis = () => {
    alert('Bell icon button pressed From Home Screen...');
    
  };
  
  
  const removingNowGrayColor = () => {
    //setthreeLineButtonClicked(false);
    
    //alert("Removing Gray Color");
  };
  
  
  
  
  const removeData = async () => {
    Alert.alert('Logout button clicked')
    
  };














  return (
    <SafeAreaView style={{ flex: 1 }}>
    <GestureHandlerRootView style={{ flex: 1, height: height, width: width }}>
    <View style={styles.container}>
      <Text>Side Drawer Menu Demo</Text>
      <GestureDetector gesture={gesture}>
                <Animated.View>
                  {/*View to hold our created Drawer Navigation Three line image button */}

                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: responsiveHeight(-45),        
                    }}>
                    <TouchableOpacity
                      style={{ marginLeft: 20 }}
                      onPress={() =>
                        ChildRef.current.openSideNavigationMethod() ||
                        setthreeLineButtonClicked(
                          ChildRef.current.bringGrayColor
                        )
                      }>
                      <AllUITogether show={'SideDrawerThreeLineImage'} />
                    </TouchableOpacity>

                    {/*View to hold Side Drawer Opening Icon ends here at below View  */}
                  </View>

                  
                  
                  {/* Another Module for JEWEL CART text starts here: */}
                  <View>
                    <AllUITogether
                      show={'TopLabelForPagesListedInBottomNavigation'}
                      topLabelForPagesListedInBottomNavProps={'JEWEL CART'}
                      marginLeftPropsForTopLabelForPagesInBottomNav={31}
                    />
                  </View>
                  {/* Another Module for JEWEL CART text Ends here: */}

                  {/* Another Module for Bell icon starts here: */}
                  <View>
                    <AllUITogether
                      show={'TopSmallIcon'}
                      dothisWhenTopSmallIconPressedProps={
                        bellIconPressedInHomeScreenDoThis
                      }
                      bellNotificationNumberProps={bellNotificationNumber}
                      iconToDisplayPathProps={require('./images/bell.png')}
                      showBadgeAlsoprops={true}
                      widthOfTopSmallIconprops={25}
                      heightOfTopSmallIconprops={30}
                      marginTopOfTopSmallIconprops={-4}
                      marginLeftOfTopSmallIconprops={85}
                    />
                  </View>
                  {/* Another Module for Bell icon Ends here: */}
                </Animated.View>
              </GestureDetector>
    </View>
              <ActualSideNavigationMenu
                ref={ ChildRef }
                removeGraycolorPropsLabel={ removingNowGrayColor }
                gotoCategoryScreenPropsLabel={ goToCategoryScreen }
                gotoCaratScreenPropsLabel={ goToCaratScreen }
                goToAddStaffScreenPropsLabel={ goToAddStaffScreen }
                gotoColorScreenPropsLabel={ goToColorScreen }   
                gotoSettingsScreenPropsLabel={ goToSettingsScreen }
                gotoChangePasswordScreenPropsLabel={ goToChangePasswordScreen }    
                
                removeAllAsyncStorageInformation={ removeData }
              />
    </GestureHandlerRootView>


        



    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default App;

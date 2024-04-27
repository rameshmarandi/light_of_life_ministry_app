import React, {useCallback} from 'react';
import {View, Linking, Text, TouchableWithoutFeedback,TouchableOpacity} from 'react-native';

import MapView, {Marker, Callout} from 'react-native-maps';
import {getFontSize} from '../utility/responsive';
import {VectorIcon} from './VectorIcon';
import theme from '../utility/theme';
import { MapCoordinate } from '../Config/constants';

const GoogleUIComp = () => {
  const handleCalloutPress = () => {
    // alert("sdfsd")
    // setPopupOpen(false);

    const latitude = 18.5890345;
    const longitude = 73.7925924;
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    Linking.openURL(url);
  };
  const [isPopupOpen, setPopupOpen] = React.useState(false);

  const handleMarkerPress = () => {
    setPopupOpen(true);
  };
  const coordinates = [
    { latitude: 18.5890345, longitude: 73.7925924  , 
    
    }, // Example coordinates
    { latitude: 18.591790, longitude: 73.819640}, // Example coordinates
    { latitude: 18.989088, longitude: 75.760078}, // Example coordinates
  


  ];

  const markerData = [
    {
      coordinate: { latitude: 18.5890345, longitude: 73.7925924 },
      title: 'Light of Life Church',
      description: 'Join us for worship, fellowship, and spiritual growth at Light of Life Church. All are welcome!'
    },
   
  ];


  return (
    <>
      <MapView
        style={{
          width: '100%',
           height: '100%', 
        borderRadius: 10
      }}
        initialRegion={{
          latitude: MapCoordinate.latitude,
          longitude: MapCoordinate.longitude,
          latitudeDelta: 15,
          longitudeDelta: 15,
        }}>
          {coordinates.map((coordinate, index) => (
          <Marker
            key={index}
            coordinate={coordinate}
            title="Light of Life Church"
            description="Join us for worship, fellowship, and spiritual growth at Light of Life Church. All are welcome!"
            icon={() => (
              <VectorIcon
                type={'FontAwesome6'}
                name={'location-dot'}
                size={getFontSize(29)}
                color={'red'}
              />
            )}>
            <Callout>
              <TouchableWithoutFeedback onPress={() => handleCalloutPress(coordinate.latitude, coordinate.longitude)}>
                <View>
                  <Text style={{ fontWeight: 'bold', color: theme.color.primary }}>Light of Life Ministries</Text>
                  <Text>Join us for worship, fellowship, and spiritual growth.</Text>
                  <Text style={{ color: 'red', textDecorationLine: 'underline' }}>
                    Click to open in Google Maps
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </Callout>
          </Marker>
        ))}
        {/* <Marker
          coordinate={{
            latitude: MapCoordinate.latitude,
            longitude: MapCoordinate.longitude,
          }}
          title="Light of Life Church"
          description="Join us for worship, fellowship, and spiritual growth at Light of Life Church. All are welcome!"
          onPress={handleMarkerPress}
          icon={() => (
            <VectorIcon
              type={'FontAwesome6'}
              name={'location-dot'}
              size={getFontSize(29)}
              color={'red'}
              style={{}}
            />
          )}>
          {isPopupOpen && (
            <>
              <Callout>
                <TouchableWithoutFeedback onPress={handleCalloutPress}>
                <View>
                  <Text style={{ fontWeight: 'bold' , color : theme.color.primary}}>Light of Life Ministries</Text>
                  <Text>Join us for worship, fellowship, and spiritual growth.</Text>
                  <Text style={{ color: 'red', textDecorationLine: 'underline' }}>
                    Click to open in Google Maps
                  </Text>
                </View>
              </TouchableWithoutFeedback>
              </Callout>
            </>
          )}
        </Marker>
     */}
      </MapView>
    </>
  );
};

// Wrap the component with React.memo and useCallback to prevent re-renders
const MemoizedGoogleMapComp = React.memo(GoogleUIComp);

const GoogleMapComp = () => {
  // Wrapping the component with useCallback to prevent unnecessary re-creation
  const memoizedCallback = useCallback(() => <MemoizedGoogleMapComp />, []);

  return memoizedCallback();
};

export default GoogleMapComp;

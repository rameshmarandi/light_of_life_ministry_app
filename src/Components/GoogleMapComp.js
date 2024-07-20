import React, {useCallback, useState} from 'react';
import {
  View,
  Linking,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';

import MapView, {Marker, Callout} from 'react-native-maps';
import {getFontSize} from '../utility/responsive';
import {VectorIcon} from './VectorIcon';
import theme from '../utility/theme';
import {MapCoordinate} from '../Config/constants';

const GoogleUIComp = () => {
  const initialLatitude = MapCoordinate.latitude;
  const initialLongitude = MapCoordinate.longitude;
  const initialLatitudeDelta = 15;
  const initialLongitudeDelta = 15;

  const [lat, setLat] = useState(initialLatitude);
  const [long, setLong] = useState(initialLongitude);
  const [latitudeDelta, setlatitudeDelta] = useState(initialLatitudeDelta);
  const [longitudeDelta, setlongitudeDelta] = useState(initialLongitudeDelta);

  const handleCalloutPress = () => {
    const latitude = 18.5890345;
    const longitude = 73.7925924;
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    Linking.openURL(url);
  };

  const coordinates = [
    {latitude: 18.5890345, longitude: 73.7925924}, // Example coordinates
    {latitude: 18.59179, longitude: 73.81964}, // Example coordinates
    {latitude: 18.989088, longitude: 75.760078}, // Example coordinates
  ];

  const handleReset = useCallback(() => {
    setLat(initialLatitude);
    setLong(initialLongitude);
    setlatitudeDelta(initialLatitudeDelta);
    setlongitudeDelta(initialLongitudeDelta);
  }, [
    initialLatitude,
    initialLongitude,
    initialLatitudeDelta,
    initialLongitudeDelta,
  ]);
  return (
    <>
      {/* <TouchableOpacity
        style={{
          position: 'absolute',
          top: 20,
          left: 20,
          zIndex: 9999,
          backgroundColor: 'white',
          padding: 10,
          borderRadius: 5,
        }}
        onPress={handleReset}>
        <Text>Reset</Text>
      </TouchableOpacity> */}

      <MapView
        style={{
          flex: 1,
          borderRadius: 10,
        }}
        initialRegion={{
          latitude: lat,
          longitude: long,
          latitudeDelta,
          longitudeDelta,
        }}
        onRegionChangeComplete={region => {
          // Update the current coordinates and deltas when the region changes
          setLat(region.latitude);
          setLong(region.longitude);
          setlatitudeDelta(region.latitudeDelta);
          setlongitudeDelta(region.longitudeDelta);
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
              <TouchableWithoutFeedback
                onPress={() => {
                  alert('sdf');
                  handleCalloutPress(coordinate.latitude, coordinate.longitude);
                  handleCalloutPress();
                }}>
                <TouchableOpacity
                  onPress={() => {
                    alert('sdf');
                    handleCalloutPress(
                      coordinate.latitude,
                      coordinate.longitude,
                    );
                    handleCalloutPress();
                  }}>
                  <Text
                    style={{fontWeight: 'bold', color: theme.color.primary}}>
                    Light of Life Ministries
                  </Text>
                  <Text>
                    Join us for worship, fellowship, and spiritual growth.
                  </Text>
                  <Text style={{color: 'red', textDecorationLine: 'underline'}}>
                    Click to open in Google Maps
                  </Text>
                </TouchableOpacity>
              </TouchableWithoutFeedback>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </>
  );
};

export default GoogleUIComp;

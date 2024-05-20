import React, { useState, useEffect } from 'react';
import { Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AnimatedLoader from 'react-native-animated-loader';

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      navigation.navigate('Signin');
    }, 1000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'white'}}>
      {/* animation loading  */}
      <Image source={require('../image/Data/Image32.png')} style={{ width: 200, height: 200 }} />
    </View>
  );
}
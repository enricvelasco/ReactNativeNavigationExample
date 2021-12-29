import React from 'react';
import {Image as NativeImage} from 'react-native';
import {heightSizes} from '../../constants/sizes';

const Poster = ({src = '', resizeMode = 'cover', size = 'full', style}) => {
  return (
    <NativeImage
      style={[sizes[size], style]}
      source={{uri: src}}
      resizeMode={resizeMode}
    />
  );
};

const sizes = {
  full: heightSizes.fullSize,
  large: heightSizes.largeSize,
  medium: heightSizes.mediumSize,
  small: heightSizes.smallSize,
};

export default Poster;

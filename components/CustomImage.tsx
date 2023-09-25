import { Text, Image, StyleSheet } from 'react-native';
import React from 'react';

export type CustomImageProps = {
  fromWeb: boolean;
  image: string | { uri: string };
  title: string;
  width: number;
  height: number;
};

const CustomImage: React.FC<CustomImageProps> = ({
  fromWeb,
  image,
  title,
  width,
  height,
}) => {
  let imageSource;

  if (fromWeb) {
    imageSource = { uri: typeof image === 'string' ? image : image.uri };
  } else {
    imageSource = typeof image === 'string' ? { uri: `file://${image}` } : image;
  }

  return (
    <>
      <Text style={styles.tituloImage}>{title}</Text>
      <Image source={imageSource} style={{ width, height }} />
    </>
  );
};

const styles = StyleSheet.create({
  tituloImage: {
    paddingTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CustomImage;

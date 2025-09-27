import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  PermissionsAndroid,
  Platform,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const OptionCard = ({ icon, title, subtitle, active, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.card, active && styles.activeCard]}
      onPress={onPress}
    >
      <View style={styles.row}>
        <Icon
          name={icon}
          size={30}
          color={active ? '#388E3C' : '#333'}
          style={styles.icon}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function ScanOptions({ setScanImg }) {
  const [activeOption, setActiveOption] = useState(null);
  // Open camera
  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'Krishi AI needs access to your camera to scan crops',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );

        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else {
      return true;
    }
  };

  const takePhoto = async () => {
    const hasPermission = await requestCameraPermission();
    if (!hasPermission) {
      Alert.alert(
        'Permission Denied',
        'Camera access is required to scan crops.',
      );
      return;
    }

    launchCamera({ mediaType: 'photo' }, response => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        const uri = response.assets?.[0]?.uri;
        if (uri) {
          setScanImg(uri);
          console.log('Captured Image URI: ', uri);
        }
      }
    });
  };

  // Open gallery
  const pickPhoto = () => {
    launchImageLibrary({ mediaType: 'photo', quality: 1 }, response => {
      if (!response.didCancel && !response.errorCode) {
        const asset = response.assets[0];
        setScanImg(asset.uri);
        uploadPhoto(asset);
      }
    });
  };

  const uploadPhoto = async asset => {
    const formData = new FormData();
    formData.append('file', {
      uri: asset.uri,
      type: asset.type,
      name: asset.fileName || 'crop.jpg',
    });

    // TODO: Send to your backend / AI model
    console.log('Uploading:', formData);
  };

  return (
    <View style={styles.container}>
      <OptionCard
        icon="camera-outline"
        title="Scan with Camera"
        subtitle="Capture real-time images of your plants for immediate analysis"
        active={activeOption === 'camera'}
        onPress={() => {
          setActiveOption('camera');
          takePhoto();
        }}
      />
      <OptionCard
        icon="tray-arrow-up"
        title="Upload Image"
        subtitle="Select an existing photo from your gallery or files for detection"
        active={activeOption === 'upload'}
        onPress={() => {
          setActiveOption('upload');
          pickPhoto(); // ✅ fixed
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    margin: 10,
  },
  card: {
    borderRadius: 5,
    padding: 12,
    margin: 10,
  },
  activeCard: {
    backgroundColor: '#E8F5E9', // light green
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    padding: 10,
    marginRight: 12,
  },
  textContainer: {
    flexShrink: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 12,
    color: '#555',
  },
});

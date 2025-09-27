import { View, Text } from 'react-native';
import React, { useState } from 'react';
import ScanIntro from '../components/ScanIntro.jsx';
import ScanOptions from '../components/ScanOptions.jsx';
import ScanResultCard from '../components/ScanResultCard.jsx';
import { ScrollView } from 'react-native';
export default function Scan() {
  const [scanImg, setScanImg] = useState(null);
  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <ScanIntro />
      <ScanOptions setScanImg={setScanImg} />
      <ScanResultCard scanImg={scanImg} />
    </ScrollView>
  );
}

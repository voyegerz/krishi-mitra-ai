import { View, Text } from 'react-native';
import React from 'react';
import ScanIntro from '../components/ScanIntro.jsx';
import ScanOptions from '../components/ScanOptions.jsx';
import ScanResultCard from '../components/ScanResultCard.jsx';
import { ScrollView } from 'react-native';
export default function Scan() {
  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <ScanIntro />
      <ScanOptions />
      <ScanResultCard />
    </ScrollView>
  );
}

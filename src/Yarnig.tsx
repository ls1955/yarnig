import {ImageURISource, Modal, StyleSheet, Text, View} from 'react-native';

type Props = {
  images: ImageURISource[];
};

export default function Yarnig({images}: Props) {
  return (
    <Modal animationType="fade" hardwareAccelerated>
      <View style={styles.container}></View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#000'},
});

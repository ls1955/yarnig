import {
  Image,
  ImageURISource,
  Modal,
  StyleSheet,
  View,
  VirtualizedList,
} from 'react-native';

type Props = {
  images: ImageURISource[];
  index: number;
};

export default function Yarnig({images, index = 0}: Props) {
  return (
    <Modal animationType="fade" hardwareAccelerated>
      <View style={styles.container}>
        <VirtualizedList
          data={images}
          horizontal
          pagingEnabled
          windowSize={2}
          initialNumToRender={1}
          maxToRenderPerBatch={1}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          initialScrollIndex={index}
          renderItem={() => <Image />}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#000'},
});

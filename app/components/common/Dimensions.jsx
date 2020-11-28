import { useDimensions } from '@react-native-community/hooks';
import { Dimensions, SafeAreaView, View, StyleSheet, Button } from 'react-native';

export default Dimensions = () => {
  console.log('dimensions api', Dimensions.get('screen'));
  console.log('hook api', useDimensions());

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Click me" onPress={() =>
        console.log('hi')} />
      <View style={{
        backgroundColor: 'dodgerblue',
        width: '50%',
        height: 70
      }}>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

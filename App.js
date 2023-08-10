import React from 'react';
import {useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useEffect} from 'react';

function App() {
  const [Test, Testing] = useState(true);

  useEffect(() => {
    console.log('Test');
  }, []);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'red'}}>
      <TouchableOpacity
        style={{
          width: 100,
          height: 40,
          marginLeft: Dimensions.get('screen').width / 2 - 50,
          marginTop: Dimensions.get('screen').height / 2 - 20,
          backgroundColor: 'green',
          borderRadius: 5,
        }}>
        <Text
          style={{
            color: 'white',
            margin: 6,
            fontWeight: '300',
            alignItems: 'center',
            textAlign: 'center',
            textAlignVertical: 'center',
          }}>
          Click me
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default App;

import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import ModalComp from '../../components/custom/Modal';

const ProfileView = ({route}) => {
  useEffect(() => {
    if (route?.params.displayToGo) {
      console.log(route?.params.displayToGo);
    }
  }, [route?.params.displayToGo]);

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile View</Text>

      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text>Open Modal</Text>
      </TouchableOpacity>

      <ModalComp
        visible={modalVisible}
        setVisible={setModalVisible}
        title="Set Your Tpics">
        <View>
          <Text>Modal Content</Text>
          <Text>Modal Content</Text>
          <Text>Modal Content</Text>
          <Text>Modal Content</Text>
          <Text>Modal Content</Text>
        </View>
      </ModalComp>
    </View>
  );
};

export default ProfileView;

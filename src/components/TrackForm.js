import React, {useContext, useState} from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements'
import Spacer from './Space';
import {Context as LocationContext} from '../context/LocationContext';

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName
  } = useContext(LocationContext);

  return (
    <>
      <Spacer>
        <Input
          placeholder="Enter name"
          value={name}
          onChangeText={changeName}
        />
      </Spacer>
      {recording
        ? <Button
            title="Stop"
            onPress={stopRecording}
          />
        :  <Button
            title="Start Recording"
            onPress={startRecording}
           />
      }
    </>
  )
}

const styles = StyleSheet.create({

});

export default TrackForm;

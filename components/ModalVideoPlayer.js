import React, { memo } from 'react';
import { Modal } from 'react-native';
import VideoPlayer from 'react-native-video-controls';

const ModalVideoPlayer = ({ isModalVisible, onClose }) => {
  return (
    <Modal
      supportedOrientations={['landscape', 'portrait']}
      animationType="slide"
      visible={isModalVisible}>
      <VideoPlayer
        source={{ uri: 'https://vjs.zencdn.net/v/oceans.mp4' }}
        fullscreenOrientation="all"
        onEnd={() => onClose()}
        onBack={() => onClose()}
      />
    </Modal>
  );
};

export default memo(ModalVideoPlayer);

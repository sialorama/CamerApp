
import React from 'react';
import {Image, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const PhotoPreviewSection = ({
    photo,
    handleRetakePhoto
}: {
    photo: CameraCapturePicture;
    handleRetakePhoto: () => void;
}) => (
<SafeAreaView>
    <View style={styles.box}>
        <Image
        style={styles.previewConatiner}
        source={{uri: 'data:image/jpg;base64,' + photo.base64}}
        />
    </View>
    <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleRetakePhoto}>
            <Fontisto name='trash' size={36} color='black' />
        </TouchableOpacity>
    </View>
</SafeAreaView>
);

const styles StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        borderRadius: 15,
        padding: 1,
        width: '95%%',
        backgroundColor: 'darkgray',
        justifyContent: 'center',
        alignItems: "center",
    },
    previewConatiner: {
        width: '100%',
        height: '100%',
        borderRadius: 15
    },

    buttonContainer: {
        marginTop: '4%',
        flexDirection: 'row',
        justifyContent: "center",
        width: '100%',
    },
    button: {
        backgroundColor: 'gray',
        borderRadius: 25,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default PhotoPreviewSection;
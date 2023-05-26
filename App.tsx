import React, { FC, memo, useCallback, useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const App: FC = () => {
    const [value, setValue] = useState('');

    const onPress = useCallback(() => {
        setValue('$');
    }, []);

    return (
        <View style={styles.container}>
            <TextInput value={value} onChangeText={setValue} style={styles.input} multiline />
            <View style={styles.button}>
                <Button title="$" onPress={onPress} color="black" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        flex: 1,
        paddingHorizontal: 20,
    },
    input: {
        width: 350,
        paddingVertical: 40,
        borderWidth: 1,
        paddingHorizontal: 10,
    },
    button: {
        alignSelf: 'flex-start',
        marginTop: 10,
        backgroundColor: 'gray',
    },
});

export default memo(App);

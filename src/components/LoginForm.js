import React from 'react';
import { useRef } from 'react';
import { StyleSheet, TextInput, View, Button, Text} from 'react-native';

export default function LoginForm() {
    const ref_input = useRef();

    return(
    <View style={styles.container}>
        <TextInput
            style={ styles.input }
            autoFocus={true}
            placeholder="Email Address"
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="next"
            onSubmitEditing={() => ref_input.current.focus()}
            blurOnSubmit={false}
            keyboardType="email-address"
        />
        <TextInput
            style={ styles.input }
            placeholder="Password"
            placeholderTextColor="rgba(255,255,255,0.7)"
            secureTextEntry
            returnKeyType="go"
            ref={ref_input}

        />

    <Button
        style= {styles.button}
        title="Login"
        color="#841584"
    />
    </View>
);

}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgb(115,175,216)',
        marginBottom: 20,
        paddingHorizontal: 10,
        color: '#FFF'
    },
   
})
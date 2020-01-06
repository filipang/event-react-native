import React, { memo, useState } from "react";
import { StyleSheet } from "react-native";
import Text from '../components/Text'
import Block from "../components/Block";
import Button from "../components/Button";
import Input from "../components/Input";
import BackButton from "../components/BackButton";
import { theme } from "../core/theme";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import {
  emailValidator,
  passwordValidator,
  nameValidator
} from "../core/utils";
import { signInUser } from "../api/auth-api";
import Toast from "../components/Toast";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const _onSignUpPressed = async () => {
    if (loading) return;

    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    setLoading(true);

    const response = await signInUser({
      name: name.value,
      email: email.value,
      password: password.value
    });

    if (response.error) {
      setError(response.error);
    }

    setLoading(false);
  };

  return (
    // <KeyboardAwareScrollView style={{ marginVertical: 20 }} showsVerticalScrollIndicator={false}>

      <Block flex center>
      <BackButton goBack={() => navigation.navigate("HomeScreen")} />

        <Text h3 style={{marginBottom: 6, marginTop: 48}}
        >
          Register to eVent
        </Text>
        <Block center style={{marginTop: 25}}>

      <Input
        full
        label="Name"
        value={name.value}
        onChangeText={text => setName({ value: text, error: "" })}
        error={!!name.error}
        errorText={name.error}
        style={{ marginBottom: 25 }}
      />

      <Input
        full
        label="Email"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        style={{ marginBottom: 25 }}
      />

      <Input
        full
        label="Password"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
        autoCapitalize="none"
        style={{ marginBottom: 25 }}
      />

      <Button
        style={{marginBottom: 12}}
        full
        loading={loading}
        mode="contained"
        onPress={_onSignUpPressed}
      >
        <Text button>Create Account</Text>
              </Button>

      <Text paragraph color="gray">
        Already have an account?<Text paragraph color="blue" onPress={()=>navigation.navigate('LoginScreen')}>
          Login.
        </Text>
      </Text>

      <Toast message={error} onDismiss={() => setError("")} />
      </Block>
      </Block>

  // </KeyboardAwareScrollView>  );
};

const styles = StyleSheet.create({
  label: {
    color: theme.colors.secondary
  },
  
  row: {
    flexDirection: "row",
    marginTop: 4
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary
  }
});

export default memo(RegisterScreen);

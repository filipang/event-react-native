import React, { memo, useState } from "react";
import { StyleSheet, View } from "react-native";
import { emailValidator } from "../core/utils";
import BackButton from "../components/BackButton";
import Text from '../components/Text';
import Block from '../components/Block';
import Input from "../components/Input";
import { theme } from "../core/theme";
import Button from "../components/Button";
import { sendEmailWithPassword } from "../api/auth-api";
import Toast from "../components/Toast";


const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ value: "", type: "" });

  const _onSendPressed = async () => {
    if (loading) return;

    const emailError = emailValidator(email.value);

    if (emailError) {
      setEmail({ ...email, error: emailError });
      return;
    }

    setLoading(true);

    const response = await sendEmailWithPassword(email.value);

    if (response.error) {
      setToast({ type: "error", value: response.error });
    } else {
      setToast({
        type: "success",
        value: "Email with password has been sent."
      });
    }

    setLoading(false);
  };

  return (
    <View>
    <Block flex center>
    
    <BackButton goBack={() => navigation.navigate("LoginScreen")} />

    <Text h3 style={{marginBottom: 6, marginTop: 48}}>
      Forgot password
    </Text>

    <Block center style={{marginTop: 25}}>
      <Input
        label="email"
        full
        returnKeyType="done"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        style={{marginBottom: 25}}
      />

      <Button
      full
        loading={loading}
        mode="contained"
        onPress={_onSendPressed}
        style={styles.button}
      >
        <Text button>Send Reset Instructions</Text>
      </Button>


      <Toast
        type={toast.type}
        message={toast.value}
        onDismiss={() => setToast({ value: "", type: "" })}
      />
      </Block>
      </Block>
      </View>
);
};

const styles = StyleSheet.create({
  back: {
    width: "100%",
    marginTop: 12
  },
  button: {
    marginTop: 12
  },
  label: {
    color: theme.colors.secondary,
    width: "100%"
  }
});

export default memo(ForgotPasswordScreen);

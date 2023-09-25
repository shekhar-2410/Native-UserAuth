import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import SocialButton from "../component/SocialButton";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginScreen = ({ navigation }) => {
  const { login } = useContext(AuthContext);

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        const handleLogin = (values) => {
          login(values);
        };
        handleLogin(values);
        resetForm({
          values: {
            email: "",
            password: "",
          },
        });
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View style={{ backgroundColor: "#fff", flex: 1, padding: 30 }}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("../assets/login.jpg")}
            />
          </View>
          <View>
            <Text
              style={{
                marginTop: -40,
                fontSize: 27,
                fontWeight: "bold",
                marginBottom: 20,
              }}
            >
              Login
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <Entypo name="email" size={18} color={"#C6C6C6"} />
            <TextInput
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              keyboardType="email-address"
              style={styles.input}
              placeholder="Email"
            />
            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderColor: "#C6C6C6",
              borderBottomWidth: 2,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Entypo name="lock" size={18} color={"#C6C6C6"} />
              <TextInput
                style={styles.input}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry={true}
                placeholder="Password"
              />
              {touched.password && errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
            </View>
            <TouchableOpacity>
              <Text
                style={{
                  color: "purple",
                  fontWeight: "400",
                  fontSize: 18,
                  marginTop: -5,
                }}
              >
                Forgot?
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={handleSubmit}
            >
              <Text style={{ color: "#fff", fontSize: 16, fontWeight: "500" }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{
                color: "#C6C6C6",
                marginBottom: 30,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Or Login With...
            </Text>
          </View>
          <View style={styles.socialContainer}>
            <SocialButton name="google" color={"#F7BB0A"} />
            <SocialButton name="facebook-square" color={"#0A8DF7"} />
            <SocialButton name="twitter" color={"#0ABAF7"} />
          </View>
          <View
            style={{
              alignItems: "center",
              marginTop: 30,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 15 }}>New to the app?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("register");
              }}
            >
              <Text
                style={{ color: "purple", fontWeight: "600", fontSize: 16 }}
              >
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    marginVertical: 40,
  },
  image: {
    width: 250,
    height: 250,
  },
  inputContainer: {
    flexDirection: "row",
    borderColor: "#C6C6C6",
    borderBottomWidth: 2,
    marginBottom: 30,
  },
  input: {
    marginLeft: 6,
    fontSize: 18,
    marginTop: -5,
  },
  buttonContainer: {
    alignItems: "center",
    marginVertical: 30,
    borderRadius: 5,
    padding: 12,
    backgroundColor: "purple",
    elevation: 6,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  errorText: {
    color: "red",
    marginLeft: 4,
  },
});

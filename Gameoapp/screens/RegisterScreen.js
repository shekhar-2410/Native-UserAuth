import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Entypo } from "@expo/vector-icons";
import axios from "axios";
import { signUpUrl } from "../utils/config";

const validationSchema = Yup.object().shape({
  displayName: Yup.string().required("Full Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  // confirmPassword: Yup.string()
  //   .oneOf([Yup.ref("password"), null], "Passwords must match")
  //   .required("Confirm Password is required"),
});

const RegisterScreen = ({ navigation }) => {
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [isLoading, setIsLoading] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const handleDateChange = (event, selectedDate) => {
    if (selectedDate) {
      setDateOfBirth(new Date(selectedDate));
    }
    setShowDatePicker(Platform.OS === "ios");
  };
  const formatDate = (date) => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };
  return (
    <Formik
      initialValues={{
        displayName: "",
        email: "",
        password: "",

        // confirmPassword: "",
        // birthDate: dateOfBirth,
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        axios
          .post(signUpUrl, {
            ...values,
            returnSecureToken: true,
          })
          .then((res) => {
            setIsLoading(false);
          })
          .catch((error) => {
            console.log("Error:", error);
            if (error.response) {
              console.log("Response data:", error.response.data);
            }
            setIsLoading(false);
          });
        console.log("Form values:", values);
        resetForm({
          values: {
            // fullName: "",
            email: "",
            password: "",
            // confirmPassword: "",
            // birthDate: new Date(),
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
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            flex: 1,
            backgroundColor: "#fff",
            paddingHorizontal: 30,
            paddingVertical: 10,
          }}
        >
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("../assets/registration.jpg")}
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
              Register
            </Text>
          </View>
          {/* Name */}
          <View style={styles.inputContainer}>
            <Entypo name="user" size={18} color={"#C6C6C6"} />
            <TextInput
              onChangeText={handleChange("displayName")}
              onBlur={handleBlur("displayName")}
              value={values.displayName}
              style={styles.input}
              placeholder="Full Name"
            />
            {touched.fullName && errors.fullName && (
              <Text style={styles.errorText}>{errors.fullName}</Text>
            )}
          </View>
          {/* Email */}
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
          {/* Password */}
          <View
            style={{
              flexDirection: "row",
              borderColor: "#C6C6C6",
              borderBottomWidth: 2,
              marginBottom: 30,
            }}
          >
            <Entypo name="lock" size={18} color={"#C6C6C6"} />
            <TextInput
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              secureTextEntry={true}
              style={styles.input}
              placeholder="Password"
            />
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
          </View>
          {/* ConfirmPassword */}
          {/* <View
            style={{
              flexDirection: "row",
              borderColor: "#C6C6C6",
              borderBottomWidth: 2,
              marginBottom: 30,
            }}
          >
            <Entypo name="lock" size={18} color={"#C6C6C6"} />
            <TextInput
              onChangeText={handleChange("confirmPassword")}
              onBlur={handleBlur("confirmPassword")}
              value={values.confirmPassword}
              secureTextEntry={true}
              style={styles.input}
              placeholder="Confirm Password"
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <Text style={styles.errorText}>{errors.confirmPassword}</Text>
            )}
          </View> */}
          {/* date of birth  */}
          {/* <TouchableOpacity
            onPress={() => setShowDatePicker(true)}
            style={styles.inputContainer}
          >
            <Entypo name="calendar" size={18} color={"#C6C6C6"} />
            <TextInput
              onChangeText={handleChange("birthDate")}
              onBlur={handleBlur("birthDate")}
              style={styles.input}
              editable={false}
              placeholder="Date of birth"
              value={formatDate(dateOfBirth)}
            />
          </TouchableOpacity> */}

          {/* {showDatePicker && (
            <DateTimePicker
              value={dateOfBirth}
              mode="date"
              display="spinner"
              onChange={handleDateChange}
              maximumDate={new Date("2005-01-01")}
              minimumDate={new Date("1980-01-01")}
            />
          )} */}

          <View>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={handleSubmit}
            >
              <Text style={{ color: "#fff", fontSize: 16, fontWeight: "500" }}>
                Register
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 15 }}>Already registered?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Text
                style={{ color: "purple", fontWeight: "600", fontSize: 16 }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </Formik>
  );
};

export default RegisterScreen;

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

import * as React from "react";
import { Text, StyleSheet, Pressable, View, TextInput } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

// unidade de saude
const SignUp = () => {
  const navigation = useNavigation();
  const [hidePassword, setHidePassword] = React.useState(true);

  return (
    <View style={styles.signUp}>
      <View style={styles.pageHeader}>
        <Pressable
          style={styles.login}
          onPress={() => navigation.navigate("LogIn")}
        >
          <Text style={[styles.login1, styles.show2Clr]}>Login</Text>
        </Pressable>
        <Text style={[styles.signUp1, styles.signTypo]}>Criar Conta</Text>
        <Image
          style={styles.iconx}
          contentFit="cover"
          source={require("../assets/iconx.png")}
        />
        <Text style={[styles.right, styles.showClr]}>Right</Text>
      </View>
      <View style={[styles.inputtext, styles.inputtextPosition]}>
        <Image
          style={[styles.bgIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/bg.png")}
        />
        <TextInput
          style={[styles.email, styles.showPosition]}
          placeholder="Nome "
        />
        <Text style={[styles.show, styles.showPosition]}>Show</Text>
      </View>
      <View style={[styles.inputtext1, styles.inputtextPosition]}>
        <Image
          style={[styles.bgIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/bg.png")}
        />
        <TextInput
          style={[styles.email, styles.showPosition]}
          textContentType="emailAddress"
          placeholder="Email "
        />
        <Text style={[styles.show, styles.showPosition]}>Show</Text>
      </View>
      <View style={[styles.inputtext2, styles.inputtextPosition]}>
        <Image
          style={[styles.bgIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/bg.png")}
        />
        <TextInput
          style={[styles.email, styles.showPosition]}
          textContentType="password"
          secureTextEntry={hidePassword}
          placeholder="Senha "
        />
        <Pressable
          style={[styles.show2, styles.showPosition]}
          onPress={() => {
            setHidePassword((oldState) => !oldState);
          }}
        >
          <Text style={[styles.mostrar]}>Mostrar</Text>
        </Pressable>
      </View>
      <Pressable
        style={[styles.buttonprimary, styles.buttonprimaryLayout]}
        onPress={() => alert("Conta criada com sucesso!")}
      >
        <Text style={[styles.signUp2, styles.signTypo]}>Criar Conta</Text>
      </Pressable>
      <Pressable
        style={styles.signUpChild}
        onPress={() => navigation.navigate("LogIn")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  email: {
    paddingLeft: 16,
    width: "100%",
  },
  mostrar: {
    color: Color.mediumseagreen,
  },
  show2Clr: {
    color: Color.mediumseagreen,
    textAlign: "right",
  },
  signTypo: {
    textAlign: "center",
    fontFamily: FontFamily.uI30Semi,
    fontWeight: "600",
  },
  showClr: {
    display: "none",
    color: Color.mediumseagreen,
  },
  inputtextPosition: {
    height: 50,
    left: 16,
    right: 16,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  showPosition: {
    marginTop: -9,
    top: "50%",
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Medium_size,
    position: "absolute",
  },
  backgroundPosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  buttonprimaryLayout: {
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  viewPosition: {
    bottom: "21.24%",
    top: "62.55%",
    height: "16.22%",
    position: "absolute",
  },
  labelTypo: {
    fontFamily: FontFamily.uI16Medium,
    lineHeight: 21,
    letterSpacing: 0,
    top: "26.19%",
    left: 0,
    textAlign: "center",
    color: Color.black,
    fontSize: FontSize.uI16Medium_size,
    position: "absolute",
  },
  shiftPosition: {
    bottom: "42.08%",
    top: "41.7%",
    width: "11.38%",
    height: "16.22%",
    position: "absolute",
  },
  symbolTypo: {
    letterSpacing: -1,
    fontSize: FontSize.size_3xl_5,
    marginTop: -13,
    fontFamily: FontFamily.uI16Medium,
    top: "50%",
    textAlign: "center",
    color: Color.black,
    position: "absolute",
  },
  mPosition: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  nPosition: {
    left: "66.12%",
    right: "25.2%",
  },
  bPosition: {
    left: "55.83%",
    right: "35.5%",
  },
  vPosition: {
    left: "45.8%",
    right: "45.53%",
  },
  cPosition: {
    left: "35.5%",
    right: "55.83%",
  },
  xPosition: {
    left: "25.47%",
    right: "65.85%",
  },
  zPosition: {
    left: "15.18%",
    right: "76.15%",
  },
  lPosition: {
    bottom: "62.93%",
    top: "20.85%",
    width: "8.67%",
    height: "16.22%",
    position: "absolute",
  },
  pPosition: {
    bottom: "83.78%",
    width: "8.67%",
    height: "16.22%",
    top: "0%",
    position: "absolute",
  },
  login1: {
    textAlign: "right",
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Medium_size,
    color: Color.mediumseagreen,
  },
  login: {
    top: 8,
    right: 0,
    position: "absolute",
  },
  signUp1: {
    marginLeft: -81.5,
    fontSize: FontSize.uI30Semi_size,
    color: Color.black,
    top: 0,
    textAlign: "center",
    fontFamily: FontFamily.uI30Semi,
    fontWeight: "600",
    left: "50%",
    position: "absolute",
  },
  iconx: {
    top: 5,
    height: 23,
    width: 23,
    left: 0,
    position: "absolute",
  },
  right: {
    marginTop: -10,
    textAlign: "left",
    top: "50%",
    display: "none",
    left: 0,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Medium_size,
    position: "absolute",
  },
  pageHeader: {
    top: 60,
    height: 36,
    left: 16,
    right: 16,
    position: "absolute",
  },
  bgIcon: {
    borderRadius: Border.br_5xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    top: "0%",
    height: "100%",
  },
  name: {
    color: Color.gray03,
    textAlign: "left",
    left: 16,
  },
  show: {
    display: "none",
    color: Color.mediumseagreen,
    textAlign: "right",
    right: 16,
  },
  inputtext: {
    top: 128,
  },
  inputtext1: {
    top: 194,
  },
  show2: {
    textAlign: "right",
    color: Color.mediumseagreen,
    right: 16,
  },
  inputtext2: {
    top: 260,
  },
  background1: {
    backgroundColor: Color.lightgray_100,
    left: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    position: "absolute",
  },
  background: {
    left: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    position: "absolute",
  },
  homeIndicator1: {
    marginLeft: -66.5,
    bottom: 8,
    backgroundColor: Color.black,
    width: 134,
    height: 5,
    left: "50%",
    borderRadius: Border.br_81xl,
  },
  homeIndicator: {
    height: "11.68%",
    top: "88.32%",
    left: "0%",
    position: "absolute",
  },
  dictationIcon: {
    width: 15,
    height: 25,
  },
  emojiIcon: {
    width: 27,
    height: 27,
  },
  rectangleIcon: {
    bottom: -1,
    borderRadius: Border.br_8xs_6,
    maxHeight: "100%",
    maxWidth: "100%",
    left: 0,
    top: 0,
    right: 0,
    position: "absolute",
    overflow: "hidden",
  },
  label: {
    width: 88,
  },
  return: {
    width: "23.85%",
    left: "76.15%",
    right: "0%",
  },
  label1: {
    width: 182,
  },
  space: {
    width: "49.32%",
    right: "25.47%",
    left: "25.2%",
  },
  label2: {
    width: 87,
  },
  view: {
    width: "23.58%",
    right: "76.42%",
    left: "0%",
  },
  label3: {
    width: 42,
  },
  deleteButtonIcon: {
    height: 17,
    width: 23,
  },
  delete: {
    left: "88.62%",
    right: "0%",
  },
  rectangleShadowBox: {
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "#898a8d",
    backgroundColor: Color.gray,
    borderRadius: Border.br_8xs_6,
    bottom: 0,
    left: 0,
    top: 0,
    right: 0,
    position: "absolute",
  },
  symbol: {
    left: "48.07%",
  },
  shiftIcon: {
    height: "39.18%",
    width: "44.95%",
    top: "29.05%",
    right: "27.29%",
    bottom: "31.77%",
    left: "27.76%",
  },
  shift: {
    right: "88.62%",
    left: "0%",
  },
  symbol1: {
    left: "18.75%",
  },
  m: {
    right: "14.91%",
    left: "76.42%",
  },
  symbol2: {
    left: "25%",
  },
  n: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  symbol3: {
    left: "28.13%",
  },
  b: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  v: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  c: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  x: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  z: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  symbol8: {
    left: "31.25%",
  },
  l: {
    right: "4.88%",
    left: "86.45%",
  },
  k: {
    right: "15.18%",
    left: "76.15%",
  },
  j: {
    left: "66.12%",
    right: "25.2%",
  },
  h: {
    left: "55.83%",
    right: "35.5%",
  },
  g: {
    left: "45.8%",
    right: "45.53%",
  },
  f: {
    left: "35.5%",
    right: "55.83%",
  },
  d: {
    left: "25.47%",
    right: "65.85%",
  },
  s: {
    left: "15.18%",
    right: "76.15%",
  },
  a: {
    right: "86.18%",
    left: "5.15%",
  },
  p: {
    left: "91.33%",
    right: "0%",
  },
  symbol18: {
    left: "21.88%",
  },
  o: {
    right: "10.03%",
    left: "81.3%",
  },
  symbol19: {
    left: "40.63%",
  },
  i: {
    right: "20.33%",
    left: "71%",
  },
  u: {
    right: "30.35%",
    left: "60.98%",
  },
  y: {
    right: "40.65%",
    left: "50.68%",
  },
  t: {
    right: "50.68%",
    left: "40.65%",
  },
  r: {
    right: "60.98%",
    left: "30.35%",
  },
  e: {
    right: "71%",
    left: "20.33%",
  },
  symbol25: {
    left: "15.63%",
  },
  w: {
    right: "81.3%",
    left: "10.03%",
  },
  q: {
    right: "91.33%",
    left: "0%",
  },
  keys: {
    height: "89%",
    width: "98.4%",
    top: "2.75%",
    right: "0.8%",
    bottom: "8.25%",
    left: "0.8%",
    position: "absolute",
  },
  ioskeyboardlightalphabetic: {
    marginLeft: -187.5,
    backgroundColor: Color.lightgray_200,
    width: 375,
    height: 291,
    bottom: 0,
    left: "50%",
    position: "absolute",
  },
  signUp2: {
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.uI30Semi,
    fontWeight: "600",
    fontSize: FontSize.uI16Medium_size,
  },
  buttonprimary: {
    top: 340,
    backgroundColor: Color.mediumseagreen,
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_base,
    alignItems: "center",
    left: 16,
    right: 16,
  },
  signUpChild: {
    top: 16,
    left: 21,
    width: 100,
    height: 100,
    position: "absolute",
    overflow: "hidden",
  },
  signUp: {
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default SignUp;

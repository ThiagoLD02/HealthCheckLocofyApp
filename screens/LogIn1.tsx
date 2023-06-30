import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const LogIn1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.logIn}>
      <Image
        style={styles.iosstatusBarblackIcon}
        contentFit="cover"
        source={require("../assets/iosstatus-barblack1.png")}
      />
      <View style={styles.pageHeader}>
        <Text style={[styles.login, styles.showFlexBox]}>Login</Text>
        <Text style={[styles.logIn1, styles.logTypo]}>Log In</Text>
        <Image
          style={styles.iconx}
          contentFit="cover"
          source={require("../assets/iconx.png")}
        />
        <Text style={styles.right}>Right</Text>
      </View>
      <View style={[styles.inputtext, styles.inputtextPosition]}>
        <Image
          style={[styles.bgIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/bg.png")}
        />
        <Text style={[styles.email, styles.showPosition]}>Email</Text>
        <Text style={[styles.show, styles.showPosition]}>Show</Text>
      </View>
      <View style={[styles.inputtext1, styles.inputtextPosition]}>
        <Image
          style={[styles.bgIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/bg.png")}
        />
        <Text style={[styles.email, styles.showPosition]}>Senha</Text>
        <Text style={[styles.show1, styles.showPosition]}>Mostrar</Text>
      </View>
      <Pressable
        style={[styles.buttonprimary, styles.buttonprimarySpaceBlock]}
        onPress={() => navigation.navigate("PainelDoPaciente")}
      >
        <Text style={[styles.logIn2, styles.logTypo]}>Log In</Text>
      </Pressable>
      <Text style={styles.esqueceuSuaSenha}>Esqueceu sua senha?</Text>
      <View style={styles.ioskeyboardlightalphabetic}>
        <View style={[styles.background, styles.backgroundPosition]}>
          <View style={[styles.background1, styles.backgroundPosition]} />
        </View>
        <View style={[styles.homeIndicator, styles.backgroundPosition]}>
          <View style={styles.homeIndicator1} />
        </View>
        <View style={styles.keys}>
          <Image
            style={styles.dictationIcon}
            contentFit="cover"
            source={require("../assets/dictation.png")}
          />
          <Image
            style={styles.emojiIcon}
            contentFit="cover"
            source={require("../assets/emoji.png")}
          />
          <View style={[styles.return, styles.viewPosition]}>
            <Image
              style={styles.rectangleIcon}
              contentFit="cover"
              source={require("../assets/rectangle.png")}
            />
            <Text style={[styles.label, styles.labelTypo]}>Go</Text>
          </View>
          <View style={[styles.space, styles.viewPosition]}>
            <Image
              style={styles.rectangleIcon}
              contentFit="cover"
              source={require("../assets/rectangle1.png")}
            />
            <Text style={[styles.label1, styles.labelTypo]}>space</Text>
          </View>
          <View style={[styles.view, styles.viewPosition]}>
            <Image
              style={styles.rectangleIcon}
              contentFit="cover"
              source={require("../assets/rectangle2.png")}
            />
            <Text style={[styles.label2, styles.labelTypo]}>123</Text>
          </View>
          <View style={[styles.delete, styles.shiftPosition]}>
            <View style={[styles.background, styles.backgroundPosition]}>
              <Image
                style={styles.rectangleIcon}
                contentFit="cover"
                source={require("../assets/rectangle3.png")}
              />
              <Text style={[styles.label3, styles.labelTypo]}>{` `}</Text>
            </View>
            <Image
              style={styles.deleteButtonIcon}
              contentFit="cover"
              source={require("../assets/delete-button.png")}
            />
          </View>
          <View style={[styles.shift, styles.shiftPosition]}>
            <View style={[styles.background, styles.backgroundPosition]}>
              <View style={styles.rectangleShadowBox} />
              <Text style={[styles.symbol, styles.symbolTypo]}>{` `}</Text>
            </View>
            <Image
              style={[styles.shiftIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/shift.png")}
            />
          </View>
          <View style={[styles.m, styles.mPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol1, styles.symbolTypo]}>M</Text>
          </View>
          <View style={[styles.n, styles.nPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>N</Text>
          </View>
          <View style={[styles.b, styles.bPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>B</Text>
          </View>
          <View style={[styles.v, styles.vPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>V</Text>
          </View>
          <View style={[styles.c, styles.cPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>C</Text>
          </View>
          <View style={[styles.x, styles.xPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>X</Text>
          </View>
          <View style={[styles.z, styles.zPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>Z</Text>
          </View>
          <View style={[styles.l, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol8, styles.symbolTypo]}>L</Text>
          </View>
          <View style={[styles.k, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>K</Text>
          </View>
          <View style={[styles.j, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol8, styles.symbolTypo]}>J</Text>
          </View>
          <View style={[styles.h, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>H</Text>
          </View>
          <View style={[styles.g, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>G</Text>
          </View>
          <View style={[styles.f, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol8, styles.symbolTypo]}>F</Text>
          </View>
          <View style={[styles.d, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>D</Text>
          </View>
          <View style={[styles.s, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>S</Text>
          </View>
          <View style={[styles.a, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>A</Text>
          </View>
          <View style={[styles.p, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>P</Text>
          </View>
          <View style={[styles.o, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol18, styles.symbolTypo]}>O</Text>
          </View>
          <View style={[styles.i, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol19, styles.symbolTypo]}>I</Text>
          </View>
          <View style={[styles.u, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>U</Text>
          </View>
          <View style={[styles.y, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>Y</Text>
          </View>
          <View style={[styles.t, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>T</Text>
          </View>
          <View style={[styles.r, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>R</Text>
          </View>
          <View style={[styles.e, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>E</Text>
          </View>
          <View style={[styles.w, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol25, styles.symbolTypo]}>W</Text>
          </View>
          <View style={[styles.q, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol18, styles.symbolTypo]}>Q</Text>
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.buttonprimary1, styles.buttonprimarySpaceBlock]}
        onPress={() => navigation.navigate("SignUp1")}
      >
        <Text style={[styles.logIn2, styles.logTypo]}>Criar Conta</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  showFlexBox: {
    textAlign: "right",
    color: Color.mediumseagreen,
  },
  logTypo: {
    textAlign: "center",
    fontFamily: FontFamily.uI30Semi,
    fontWeight: "600",
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
  buttonprimarySpaceBlock: {
    alignItems: "center",
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_13xl,
    backgroundColor: Color.mediumseagreen,
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  backgroundPosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  viewPosition: {
    bottom: "21.24%",
    top: "62.55%",
    height: "16.22%",
    position: "absolute",
  },
  labelTypo: {
    fontFamily: FontFamily.sFProTextRegular,
    lineHeight: 21,
    letterSpacing: 0,
    top: "26.19%",
    textAlign: "center",
    color: Color.black,
    fontSize: FontSize.uI16Medium_size,
    left: 0,
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
    fontFamily: FontFamily.sFProTextRegular,
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
  iosstatusBarblackIcon: {
    height: 44,
    maxWidth: "100%",
    right: 0,
    top: 0,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  login: {
    top: 8,
    display: "none",
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    color: Color.mediumseagreen,
    fontSize: FontSize.uI16Medium_size,
    right: 0,
    position: "absolute",
  },
  logIn1: {
    marginLeft: -42.5,
    fontSize: FontSize.uI30Semi_size,
    color: Color.black,
    textAlign: "center",
    left: "50%",
    top: 0,
    position: "absolute",
  },
  iconx: {
    top: 16,
    width: 16,
    height: 16,
    display: "none",
    left: 0,
    position: "absolute",
  },
  right: {
    marginTop: -10,
    textAlign: "left",
    top: "50%",
    display: "none",
    color: Color.mediumseagreen,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Medium_size,
    left: 0,
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
  email: {
    color: Color.gray03,
    textAlign: "left",
    left: 16,
  },
  show: {
    display: "none",
    textAlign: "right",
    color: Color.mediumseagreen,
    right: 16,
  },
  inputtext: {
    top: 128,
  },
  show1: {
    textAlign: "right",
    color: Color.mediumseagreen,
    right: 16,
  },
  inputtext1: {
    top: 194,
  },
  logIn2: {
    color: Color.white,
    textAlign: "center",
    fontSize: FontSize.uI16Medium_size,
  },
  buttonprimary: {
    bottom: 425,
    left: 16,
    right: 16,
  },
  esqueceuSuaSenha: {
    marginLeft: -88.5,
    bottom: 315,
    textAlign: "left",
    fontFamily: FontFamily.uI30Semi,
    fontWeight: "600",
    left: "50%",
    color: Color.mediumseagreen,
    fontSize: FontSize.uI16Medium_size,
    position: "absolute",
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
    borderRadius: Border.br_81xl,
    left: "50%",
    position: "absolute",
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
    right: 0,
    top: 0,
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
    width: 23,
    height: 17,
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
    right: 0,
    top: 0,
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
  buttonprimary1: {
    right: 15,
    bottom: 358,
    left: 17,
  },
  logIn: {
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default LogIn1;

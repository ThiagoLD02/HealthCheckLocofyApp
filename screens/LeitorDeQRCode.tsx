import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const GeradorDeQRCode = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.geradorDeQrCode}>
      <View style={[styles.geradorDeQrCodeChild, styles.geradorLayout]} />
      <View style={[styles.scanQrCodeParent, styles.codeParentPosition]}>
        <Text style={styles.scanQrCode}>Scan QR Code</Text>
        <Image
          style={[styles.vectorIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </View>
      <Image
        style={styles.geradorDeQrCodeItem}
        contentFit="cover"
        source={require("../assets/group-2.png")}
      />
      <Text style={styles.qrCode}>QR-Code</Text>
      <Pressable
        style={styles.voltar}
        onPress={() => {
          navigation.navigate("PainelDoPaciente");
        }}
      >
        <Text style={styles.voltar1}>Voltar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  geradorLayout: {
    height: 75,
    width: 284,
    borderRadius: Border.br_xl,
    left: 47,
    top: 668,
    position: "absolute",
  },
  codeParentPosition: {
    height: 33,
    left: 87,
    top: 687,
    position: "absolute",
  },
  iconPosition: {
    maxHeight: "100%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  showPosition: {
    marginTop: -9,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Medium_size,
    top: "50%",
    position: "absolute",
  },
  geradorDeQrCodeChild: {
    backgroundColor: Color.limegreen,
  },
  scanQrCode: {
    top: 2,
    left: 40,
    fontSize: FontSize.size_7xl,
    fontFamily: FontFamily.robotoRegular,
    color: Color.snow,
    textAlign: "left",
    position: "absolute",
  },
  vectorIcon: {
    width: "17.07%",
    right: "82.93%",
  },
  scanQrCodeParent: {
    width: 205,
  },
  geradorDeQrCodeItem: {
    top: 223,
    width: 346,
    height: 372,
    left: 15,
    position: "absolute",
  },
  qrCode: {
    top: 53,
    left: 126,
    fontSize: FontSize.uI30Semi_size,
    fontWeight: "900",
    fontFamily: FontFamily.robotoBlack,
    color: Color.gray01,
    textAlign: "left",
    position: "absolute",
  },
  vectorIcon1: {
    width: "16.13%",
    right: "83.87%",
  },
  gerarQrCodeParent: {
    width: 217,
  },
  voltar1: {
    marginLeft: 8,
    paddingLeft: 8,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Medium_size,
    color: Color.gray01,
    textAlign: "left",
  },
  voltar: {
    top: 60,
    height: 40,
    width: 80,
    left: 16,
    position: "absolute",
  },
  bgIcon: {
    right: "0%",
    borderRadius: Border.br_5xs,
    width: "100%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  email: {
    left: 16,
    color: Color.gray03,
    textAlign: "left",
  },
  show: {
    right: 16,
    color: Color.mediumseagreen,
    textAlign: "right",
    display: "none",
  },
  inputtext: {
    top: 130,
    right: 15,
    left: 17,
    height: 50,
    position: "absolute",
  },
  geradorDeQrCode: {
    backgroundColor: Color.mediumseagreen,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default GeradorDeQRCode;

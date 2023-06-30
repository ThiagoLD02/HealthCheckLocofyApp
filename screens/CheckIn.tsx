import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const CheckIn = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.checkIn}>
      <Image
        style={styles.iosstatusBarwhiteIcon}
        contentFit="cover"
        source={require("../assets/iosstatus-barwhite.png")}
      />
      <View style={[styles.checkInChild, styles.checkLayout]} />
      <View style={[styles.scanQrCodeParent, styles.codeParentPosition]}>
        <Text style={styles.scanQrCode}>Scan QR Code</Text>
        <Image
          style={[styles.vectorIcon, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </View>
      <Image
        style={[styles.checkInItem, styles.voltarPosition]}
        contentFit="cover"
        source={require("../assets/group-2.png")}
      />
      <Text style={[styles.checkIn1, styles.voltar1Clr]}>Check-In</Text>
      <View style={[styles.checkInInner, styles.checkLayout]} />
      <View style={[styles.lerQrCodeParent, styles.codeParentPosition]}>
        <Text style={styles.scanQrCode}> Ler QR Code</Text>
        <Image
          style={[styles.vectorIcon1, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </View>
      <Image
        style={[styles.checkInItem, styles.voltarPosition]}
        contentFit="cover"
        source={require("../assets/group-2.png")}
      />
      <Pressable
        style={[styles.voltar, styles.voltarPosition]}
        onPress={() => navigation.navigate("PainelDoPaciente")}
      >
        <Text style={[styles.voltar1, styles.voltar1Clr]}>Voltar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  checkLayout: {
    height: 75,
    width: 284,
    borderRadius: Border.br_xl,
    left: 46,
    top: 669,
    position: "absolute",
  },
  codeParentPosition: {
    height: 33,
    left: 86,
    top: 688,
    position: "absolute",
  },
  vectorIconPosition: {
    maxHeight: "100%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  voltarPosition: {
    left: 15,
    position: "absolute",
  },
  voltar1Clr: {
    color: Color.gray01,
    textAlign: "left",
  },
  iosstatusBarwhiteIcon: {
    top: 0,
    right: 0,
    left: 0,
    height: 44,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  checkInChild: {
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
  checkInItem: {
    top: 223,
    width: 346,
    height: 372,
  },
  checkIn1: {
    top: 54,
    left: 126,
    fontSize: FontSize.uI30Semi_size,
    fontWeight: "900",
    fontFamily: FontFamily.robotoBlack,
    position: "absolute",
    color: Color.gray01,
  },
  checkInInner: {
    backgroundColor: Color.gray04,
  },
  vectorIcon1: {
    width: "18.32%",
    right: "81.68%",
  },
  lerQrCodeParent: {
    width: 191,
  },
  voltar1: {
    marginTop: -344,
    fontSize: FontSize.uI16Medium_size,
    fontWeight: "500",
    fontFamily: FontFamily.uI16Medium,
  },
  voltar: {
    top: "50%",
  },
  checkIn: {
    backgroundColor: Color.mediumseagreen,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default CheckIn;

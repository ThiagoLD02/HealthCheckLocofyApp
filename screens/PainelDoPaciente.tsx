import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const PainelDoPaciente = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.painelDoPaciente}>
      <View style={[styles.pageHeader, styles.imagePosition]}>
        <Text style={[styles.feed, styles.feedTypo]}>
          Painel do{"\n"}Paciente
        </Text>
        <Pressable
          style={styles.back}
          onPress={() => navigation.navigate("LogIn")}
        >
          <Text style={[styles.voltar, styles.filterTypo]}>Voltar</Text>
        </Pressable>
      </View>
      <View style={[styles.image, styles.imagePosition]} />
      <Pressable
        style={[styles.buttonprimary, styles.buttonprimaryPosition]}
        onPress={() => navigation.navigate("PrRegistro")}
      >
        <Text style={[styles.logIn, styles.feedTypo]}>Pré-Registro</Text>
      </Pressable>
      <Pressable
        style={[styles.buttonprimary1, styles.buttonprimaryPosition]}
        onPress={() => navigation.navigate("PrFila")}
      >
        <Text style={[styles.logIn, styles.feedTypo]}>Pré-Filas</Text>
      </Pressable>
      <Pressable
        style={[styles.buttonprimary2, styles.buttonprimaryPosition]}
        onPress={() => navigation.navigate("CheckIn")}
      >
        <Text style={[styles.logIn, styles.feedTypo]}>Check-In</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  feedPosition: {
    top: 0,
    position: "absolute",
  },
  imagePosition: {
    left: 16,
    right: 16,
    position: "absolute",
  },
  iconxPosition: {
    display: "none",
    position: "absolute",
  },
  feedTypo: {
    textAlign: "center",
    fontFamily: FontFamily.uI30Semi,
    fontWeight: "600",
  },
  filterTypo: {
    color: Color.mediumseagreen,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Medium_size,
  },
  buttonprimaryPosition: {
    alignItems: "center",
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_13xl,
    backgroundColor: Color.mediumseagreen,
    borderRadius: Border.br_81xl,
    left: 18,
    right: 14,
    position: "absolute",
  },
  filter: {
    top: 8,
    textAlign: "right",
    color: Color.mediumseagreen,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Medium_size,
    right: 0,
  },
  feed: {
    marginLeft: -64.5,
    left: "50%",
    fontSize: FontSize.uI30Semi_size,
    textAlign: "center",
    color: Color.black,
    top: 0,
    position: "absolute",
  },
  iconx: {
    top: 16,
    width: 16,
    height: 16,
    left: 0,
  },
  voltar: {
    marginTop: 5,
    marginLeft: 6,
    textAlign: "left",
  },
  back: {
    height: 40,
    width: 60,
    top: "50%",
    left: 0,
    position: "absolute",
  },
  pageHeader: {
    top: 60,
    height: 36,
  },
  image: {
    top: 566,
    borderRadius: Border.br_5xs,
    height: 228,
  },
  logIn: {
    color: Color.white,
    fontSize: FontSize.uI16Medium_size,
    textAlign: "center",
    fontFamily: FontFamily.uI30Semi,
    fontWeight: "600",
  },
  buttonprimary: {
    bottom: 540,
  },
  buttonprimary1: {
    bottom: 473,
  },
  buttonprimary2: {
    bottom: 406,
  },
  painelDoPaciente: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default PainelDoPaciente;

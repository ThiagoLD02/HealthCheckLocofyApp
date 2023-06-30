import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const PainelDaUnidadeDeAtendimen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.painelDaUnidadeDeAtendimen}>
      <Image
        style={[styles.iosstatusBarblackIcon, styles.feedPosition]}
        contentFit="cover"
        source={require("../assets/iosstatus-barblack.png")}
      />
      <View style={[styles.pageHeader, styles.buttonprimaryPosition]}>
        <Text style={[styles.filter, styles.iconxPosition]}>Filter</Text>
        <Text style={[styles.feed, styles.feedTypo]}>Painel</Text>
        <Image
          style={[styles.iconx, styles.iconxPosition]}
          contentFit="cover"
          source={require("../assets/iconx.png")}
        />
        <Pressable
          style={styles.back}
          onPress={() => navigation.navigate("LogIn")}
        >
          <Text style={[styles.voltar, styles.filterTypo]}>Voltar</Text>
        </Pressable>
      </View>
      <View style={[styles.image, styles.buttonprimaryPosition]} />
      <Pressable
        style={[styles.buttonprimary, styles.buttonprimarySpaceBlock]}
        onPress={() => navigation.navigate("Formulrio")}
      >
        <Text style={[styles.logIn, styles.feedTypo]}>Formulários</Text>
      </Pressable>
      <Pressable
        style={[styles.buttonprimary1, styles.buttonprimarySpaceBlock]}
        onPress={() => navigation.navigate("FluxosDeTrabalho")}
      >
        <Text style={[styles.logIn, styles.feedTypo]}>Fluxos de Trabalho</Text>
      </Pressable>
      <Pressable
        style={[styles.buttonprimary2, styles.buttonprimarySpaceBlock]}
        onPress={() => navigation.navigate("Insights")}
      >
        <Text style={[styles.logIn, styles.feedTypo]}>Insights de Dados</Text>
      </Pressable>
      <Pressable
        style={[styles.buttonprimary3, styles.buttonprimarySpaceBlock]}
        onPress={() => navigation.navigate("PrFila")}
      >
        <Text style={[styles.logIn, styles.feedTypo]}>Pré-Fila</Text>
      </Pressable>
      <Pressable
        style={[styles.buttonsecondary, styles.buttonprimarySpaceBlock]}
        onPress={() => navigation.navigate("GeradorDeQRCode")}
      >
        <Text style={[styles.clickMe, styles.feedTypo]}>Gerar QR Code</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  feedPosition: {
    top: 0,
    position: "absolute",
  },
  buttonprimaryPosition: {
    left: 16,
    right: 16,
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
  buttonprimarySpaceBlock: {
    alignItems: "center",
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_13xl,
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  iosstatusBarblackIcon: {
    maxWidth: "100%",
    height: 44,
    left: 0,
    right: 0,
    overflow: "hidden",
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
    marginLeft: -42.5,
    left: "50%",
    fontSize: FontSize.uI30Semi_size,
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
    marginTop: -10,
    textAlign: "left",
  },
  back: {
    top: "50%",
    left: 0,
    position: "absolute",
  },
  pageHeader: {
    top: 60,
    height: 36,
    position: "absolute",
  },
  image: {
    top: 566,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.whitesmoke_200,
    height: 228,
    position: "absolute",
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
    backgroundColor: Color.mediumseagreen,
    alignItems: "center",
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_13xl,
    borderRadius: Border.br_81xl,
    left: 16,
    right: 16,
  },
  buttonprimary1: {
    bottom: 473,
    backgroundColor: Color.mediumseagreen,
    alignItems: "center",
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_13xl,
    borderRadius: Border.br_81xl,
    left: 16,
    right: 16,
  },
  buttonprimary2: {
    bottom: 406,
    backgroundColor: Color.mediumseagreen,
    alignItems: "center",
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_13xl,
    borderRadius: Border.br_81xl,
    left: 16,
    right: 16,
  },
  buttonprimary3: {
    right: 15,
    bottom: 339,
    left: 17,
    backgroundColor: Color.mediumseagreen,
    alignItems: "center",
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_13xl,
    borderRadius: Border.br_81xl,
  },
  clickMe: {
    color: Color.greenSecondary,
    fontSize: FontSize.uI16Medium_size,
    textAlign: "center",
    fontFamily: FontFamily.uI30Semi,
    fontWeight: "600",
  },
  buttonsecondary: {
    top: 494,
    left: 98,
    backgroundColor: Color.gray01,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_13xl,
    borderRadius: Border.br_81xl,
  },
  painelDaUnidadeDeAtendimen: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default PainelDaUnidadeDeAtendimen;

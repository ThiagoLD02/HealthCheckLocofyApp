import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const FluxosDeTrabalho = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.fluxosDeTrabalho}>
      <View style={styles.pageHeader}>
        <Text style={[styles.new, styles.newTypo]}>Novo</Text>
        <Text style={[styles.expenses, styles.logInTypo]}>
          Fluxos de {"\n"} Trabalho
        </Text>
        <Image
          style={[styles.iconx, styles.backPosition]}
          contentFit="cover"
          source={require("../assets/iconx.png")}
        />
        <Pressable
          style={[styles.back, styles.backPosition]}
          onPress={() => navigation.navigate("PainelDaUnidadeDeAtendimento")}
        >
          <Text style={[styles.voltar, styles.newTypo]}>Voltar</Text>
        </Pressable>
      </View>
      <View style={[styles.buttonprimary, styles.buttonprimarySpaceBlock]}>
        <Text style={[styles.logIn, styles.logInTypo]}>Triagem</Text>
      </View>
      <View style={[styles.buttonprimary1, styles.buttonprimarySpaceBlock]}>
        <Text style={[styles.logIn, styles.logInTypo]}>Consulta</Text>
      </View>
      <View style={[styles.buttonprimary2, styles.buttonprimarySpaceBlock]}>
        <Text style={[styles.logIn, styles.logInTypo]}>Exames</Text>
      </View>
      <View style={[styles.buttonsecondary, styles.buttonprimarySpaceBlock]}>
        <Text style={[styles.clickMe, styles.logInTypo]}>Novo Fluxo</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backPosition: {
    left: 0,
    position: "absolute",
  },
  newTypo: {
    color: Color.mediumseagreen,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Medium_size,
  },
  logInTypo: {
    textAlign: "center",
    fontFamily: FontFamily.uI30Semi,
    fontWeight: "600",
  },
  buttonprimarySpaceBlock: {
    alignItems: "center",
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_13xl,
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  new: {
    top: 8,
    textAlign: "right",
    right: 0,
    position: "absolute",
  },
  expenses: {
    marginLeft: -67.5,
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
    display: "none",
  },
  voltar: {
    marginTop: -10,
    textAlign: "left",
  },
  back: {
    top: "50%",
  },
  pageHeader: {
    top: 60,
    height: 36,
    left: 16,
    right: 16,
    position: "absolute",
  },
  logIn: {
    color: Color.white,
    fontSize: FontSize.uI16Medium_size,
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
  clickMe: {
    color: Color.greenSecondary,
    fontSize: FontSize.uI16Medium_size,
    fontFamily: FontFamily.uI30Semi,
    fontWeight: "600",
  },
  buttonsecondary: {
    top: 453,
    left: 113,
    backgroundColor: Color.gray01,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_13xl,
    borderRadius: Border.br_81xl,
  },
  fluxosDeTrabalho: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default FluxosDeTrabalho;

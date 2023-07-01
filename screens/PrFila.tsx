import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, Color, FontFamily, Padding } from "../GlobalStyles";

const PrFila = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.prFila}>
      <View style={[styles.pageHeader, styles.headerPosition]}>
        <Text style={[styles.filter, styles.iconxPosition]}>Filter</Text>
        <Text style={styles.market}>Pré-Fila</Text>
        <Image
          style={[styles.iconx, styles.iconxPosition]}
          contentFit="cover"
          source={require("../assets/iconx.png")}
        />
        <Pressable
          style={styles.back}
          onPress={() => navigation.navigate("PainelDaUnidadeDeAtendimento")}
        >
          <Text style={styles.voltar}>Voltar</Text>
        </Pressable>
      </View>
      <View style={[styles.header, styles.headerLayout]}>
        <View style={styles.bg} />
        <Text style={[styles.checkmark, styles.checkmarkPosition]} />
        <Text style={[styles.interactions, styles.checkmarkPosition]} />
      </View>
      <View style={[styles.header, styles.headerLayout]}>
        <View style={styles.bg} />
        <Text style={[styles.checkmark, styles.checkmarkPosition]} />
        <Text style={[styles.interactions, styles.checkmarkPosition]} />
      </View>
      <View style={[styles.header2, styles.headerLayout]}>
        <View style={styles.bg} />
        <Text style={[styles.checkmark, styles.checkmarkPosition]} />
        <Text style={[styles.interactions, styles.checkmarkPosition]} />
      </View>
      <View style={[styles.header3, styles.headerLayout]}>
        <View style={styles.bg} />
        <Text style={[styles.checkmark, styles.checkmarkPosition]} />
        <Text style={[styles.interactions, styles.checkmarkPosition]} />
      </View>
      <Text
        style={[styles.lucasSouzaRodrigues, styles.lucasSouzaRodriguesTypo]}
      >{`Lucas Souza Rodrigues
`}</Text>
      <Text
        style={[styles.anaOliveiraPereira, styles.pedroDaSilvaTypo]}
      >{`Ana Oliveira Pereira
`}</Text>
      <Text style={[styles.pedroDaSilva, styles.pedroDaSilvaTypo]}>
        Pedro da Silva Santos
      </Text>
      <View style={[styles.date, styles.dateLayout]}>
        <Text style={styles.date1}>3º</Text>
      </View>
      <View style={[styles.header4, styles.headerLayout]}>
        <View style={styles.bg} />
        <Text style={[styles.checkmark, styles.checkmarkPosition]} />
        <Text style={[styles.interactions, styles.checkmarkPosition]} />
      </View>
      <View style={[styles.header4, styles.headerLayout]}>
        <View style={styles.bg} />
        <Text style={[styles.checkmark, styles.checkmarkPosition]} />
        <Text style={[styles.interactions, styles.checkmarkPosition]} />
      </View>
      <Text
        style={[styles.isabellaCostaAlmeida, styles.lucasSouzaRodriguesTypo]}
      >{`Isabella Costa Almeida
`}</Text>
      <View style={[styles.date2, styles.dateLayout]}>
        <Text style={styles.date1}>4º</Text>
      </View>
      <View style={[styles.header6, styles.headerLayout]}>
        <View style={styles.bg} />
        <Text style={[styles.checkmark, styles.checkmarkPosition]} />
        <Text style={[styles.interactions, styles.checkmarkPosition]} />
      </View>
      <View style={[styles.header6, styles.headerLayout]}>
        <View style={styles.bg} />
        <Text style={[styles.checkmark, styles.checkmarkPosition]} />
        <Text style={[styles.interactions, styles.checkmarkPosition]} />
      </View>
      <Text
        style={[styles.guilhermeFerreiraLima, styles.lucasSouzaRodriguesTypo]}
      >{`Guilherme Ferreira Lima

`}</Text>
      <View style={[styles.date4, styles.dateLayout]}>
        <Text style={styles.date1}>5º</Text>
      </View>
      <View style={[styles.date6, styles.dateLayout]}>
        <Text style={styles.date1}>1º</Text>
      </View>
      <View style={[styles.date8, styles.dateLayout]}>
        <Text style={styles.date1}>2º</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerPosition: {
    left: 16,
    right: 16,
  },
  iconxPosition: {
    display: "none",
    position: "absolute",
  },
  headerLayout: {
    height: 67,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  checkmarkPosition: {
    left: 32,
    textAlign: "left",
    position: "absolute",
  },
  lucasSouzaRodriguesTypo: {
    height: 26,
    width: 261,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    position: "absolute",
  },
  pedroDaSilvaTypo: {
    width: 228,
    height: 26,
    fontSize: FontSize.size_xl,
    left: 83,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    position: "absolute",
  },
  dateLayout: {
    justifyContent: "center",
    alignItems: "center",
    padding: Padding.p_3xs,
    height: 39,
    width: 38,
    backgroundColor: Color.greenSecondary,
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  filter: {
    top: 8,
    textAlign: "right",
    color: Color.mediumseagreen,
    display: "none",
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Medium_size,
    right: 0,
  },
  market: {
    marginLeft: -54.5,
    left: "50%",
    fontSize: FontSize.uI30Semi_size,
    fontWeight: "600",
    fontFamily: FontFamily.uI30Semi,
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
    marginTop: -10,
    textAlign: "left",
    color: Color.mediumseagreen,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Medium_size,
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
  bg: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.whitesmoke_100,
    borderRadius: Border.br_5xs,
    position: "absolute",
    width: "100%",
  },
  checkmark: {
    bottom: 32,
    fontSize: FontSize.uI30Medium_size,
    color: Color.black,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    left: 32,
  },
  interactions: {
    bottom: 69,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.uI14Regular,
    color: Color.gray04,
  },
  header: {
    top: 269,
    left: 16,
    right: 16,
  },
  header2: {
    top: 192,
    left: 16,
    right: 16,
  },
  header3: {
    top: 115,
    left: 16,
    right: 16,
  },
  lucasSouzaRodrigues: {
    top: 291,
    left: 83,
    height: 26,
    width: 261,
    fontSize: FontSize.size_xl,
  },
  anaOliveiraPereira: {
    top: 212,
  },
  pedroDaSilva: {
    top: 136,
  },
  date1: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.white,
    textAlign: "center",
    fontSize: FontSize.uI16Medium_size,
  },
  date: {
    top: 283,
    left: 33,
    justifyContent: "center",
    alignItems: "center",
    padding: Padding.p_3xs,
    height: 39,
    width: 38,
    backgroundColor: Color.greenSecondary,
    borderRadius: Border.br_81xl,
  },
  header4: {
    top: 346,
    right: 15,
    left: 17,
  },
  isabellaCostaAlmeida: {
    top: 368,
    left: 84,
  },
  date2: {
    top: 360,
    left: 34,
  },
  header6: {
    top: 423,
    right: 14,
    left: 18,
  },
  guilhermeFerreiraLima: {
    top: 445,
    left: 85,
  },
  date4: {
    top: 437,
    left: 35,
  },
  date6: {
    top: 129,
    left: 33,
    justifyContent: "center",
    alignItems: "center",
    padding: Padding.p_3xs,
    height: 39,
    width: 38,
    backgroundColor: Color.greenSecondary,
    borderRadius: Border.br_81xl,
  },
  date8: {
    top: 206,
    left: 33,
    justifyContent: "center",
    alignItems: "center",
    padding: Padding.p_3xs,
    height: 39,
    width: 38,
    backgroundColor: Color.greenSecondary,
    borderRadius: Border.br_81xl,
  },
  prFila: {
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default PrFila;

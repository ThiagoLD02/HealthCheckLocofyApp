import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const PrRegistro = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.prRegistro}>
      <View style={styles.pageHeader}>
        <Text style={[styles.filter, styles.showFlexBox]}>Filter</Text>
        <Text style={styles.content}>Pré-Registro</Text>
        <Image
          style={[styles.iconx, styles.iconxLayout]}
          contentFit="cover"
          source={require("../assets/iconx.png")}
        />
        <Pressable
          style={styles.back}
          onPress={() => navigation.navigate("PainelDoPaciente")}
        >
          <Text style={styles.voltar}>Voltar</Text>
        </Pressable>
      </View>
      <View style={[styles.checkboxOptionempty, styles.checkboxLayout3]}>
        <Text style={styles.sexo}>Sexo</Text>
        <View style={[styles.checkboxOptionempty1, styles.checkboxLayout2]}>
          <View style={styles.checkboxemptyPosition}>
            <View style={[styles.bg, styles.bgBorder]} />
            <Image
              style={[styles.iconcheckmark, styles.iconcheckmarkPosition]}
              contentFit="cover"
              source={require("../assets/iconcheckmark.png")}
            />
          </View>
          <Text style={[styles.textHere, styles.textTypo]}>Feminino</Text>
        </View>
        <View style={[styles.checkboxOptionempty2, styles.checkboxLayout2]}>
          <View style={styles.checkboxemptyPosition}>
            <View style={[styles.bg, styles.bgBorder]} />
            <Image
              style={[styles.iconcheckmark, styles.iconcheckmarkPosition]}
              contentFit="cover"
              source={require("../assets/iconcheckmark.png")}
            />
          </View>
          <Text style={[styles.textHere, styles.textTypo]}>Outro</Text>
        </View>
      </View>
      <View style={[styles.checkboxOptionfilled, styles.checkboxLayout1]}>
        <View style={[styles.checkboxOptionfilled1, styles.checkboxLayout1]}>
          <View style={styles.checkboxemptyPosition}>
            <View style={[styles.bg2, styles.bgBorder]} />
            <Image
              style={styles.iconcheckmark2}
              contentFit="cover"
              source={require("../assets/iconcheckmark.png")}
            />
          </View>
          <Text style={[styles.textHere2, styles.textTypo]}>Masculino</Text>
        </View>
      </View>
      <View style={[styles.checkboxOptionempty3, styles.checkboxPosition]}>
        <Text style={styles.sexo}>Check Box</Text>
        <View style={[styles.checkboxOptionempty1, styles.checkboxLayout2]}>
          <View style={styles.checkboxemptyPosition}>
            <View style={[styles.bg, styles.bgBorder]} />
            <Image
              style={[styles.iconcheckmark, styles.iconcheckmarkPosition]}
              contentFit="cover"
              source={require("../assets/iconcheckmark.png")}
            />
          </View>
          <Text style={[styles.textHere, styles.textTypo]}>Opção 2</Text>
        </View>
        <View style={[styles.checkboxOptionempty2, styles.checkboxLayout2]}>
          <View style={styles.checkboxemptyPosition}>
            <View style={[styles.bg, styles.bgBorder]} />
            <Image
              style={[styles.iconcheckmark, styles.iconcheckmarkPosition]}
              contentFit="cover"
              source={require("../assets/iconcheckmark.png")}
            />
          </View>
          <Text style={[styles.textHere, styles.textTypo]}>Opção 3</Text>
        </View>
      </View>
      <View style={[styles.checkboxOptionfilled2, styles.checkboxPosition]}>
        <View style={[styles.checkboxOptionfilled1, styles.checkboxLayout1]}>
          <View style={styles.checkboxemptyPosition}>
            <View style={[styles.bg2, styles.bgBorder]} />
            <Image
              style={styles.iconcheckmark2}
              contentFit="cover"
              source={require("../assets/iconcheckmark.png")}
            />
          </View>
          <Text style={[styles.textHere2, styles.textTypo]}>Opção 1</Text>
        </View>
      </View>
      <View style={[styles.checkboxOptionempty6, styles.checkboxLayout3]}>
        <Text style={styles.sexo}>Check Box</Text>
        <View style={[styles.checkboxOptionempty1, styles.checkboxLayout2]}>
          <View style={styles.checkboxemptyPosition}>
            <View style={[styles.bg, styles.bgBorder]} />
            <Image
              style={[styles.iconcheckmark, styles.iconcheckmarkPosition]}
              contentFit="cover"
              source={require("../assets/iconcheckmark.png")}
            />
          </View>
          <Text style={[styles.textHere, styles.textTypo]}>Opção 2</Text>
        </View>
        <View style={[styles.checkboxfilled2, styles.iconxLayout]}>
          <View style={[styles.bg2, styles.bgBorder]} />
          <Image
            style={styles.iconcheckmark2}
            contentFit="cover"
            source={require("../assets/iconcheckmark1.png")}
          />
        </View>
        <View style={[styles.checkboxOptionempty2, styles.checkboxLayout2]}>
          <View style={styles.checkboxemptyPosition}>
            <View style={[styles.bg, styles.bgBorder]} />
            <Image
              style={[styles.iconcheckmark, styles.iconcheckmarkPosition]}
              contentFit="cover"
              source={require("../assets/iconcheckmark.png")}
            />
          </View>
          <Text style={[styles.textHere, styles.textTypo]}>Opção 3</Text>
        </View>
        <View style={[styles.bg9, styles.bgBorder]} />
      </View>
      <View style={[styles.checkboxOptionfilled4, styles.checkboxLayout]}>
        <View style={[styles.checkboxOptionfilled5, styles.checkboxLayout]}>
          <View style={[styles.checkboxfilled3, styles.checkboxemptyPosition]}>
            <View style={[styles.bg2, styles.bgBorder]} />
            <Image
              style={styles.iconcheckmarkPosition}
              contentFit="cover"
              source={require("../assets/iconcheckmark.png")}
            />
          </View>
          <Text style={[styles.textHere8, styles.textTypo]}>Opção 1</Text>
        </View>
      </View>
      <View style={[styles.inputtext, styles.inputtextPosition1]}>
        <Image
          style={[styles.bgIcon, styles.bgPosition]}
          contentFit="cover"
          source={require("../assets/bg.png")}
        />
        <Text style={[styles.email, styles.showPosition]}>Nome</Text>
        <Text style={[styles.show, styles.showPosition]}>Show</Text>
      </View>
      <View style={[styles.inputtext1, styles.inputtextPosition]}>
        <Image
          style={[styles.bgIcon, styles.bgPosition]}
          contentFit="cover"
          source={require("../assets/bg.png")}
        />
        <Text style={[styles.email, styles.showPosition]}>Text Input</Text>
        <Text style={[styles.show, styles.showPosition]}>Show</Text>
      </View>
      <View style={[styles.inputtext2, styles.inputtextPosition]}>
        <Image
          style={[styles.bgIcon, styles.bgPosition]}
          contentFit="cover"
          source={require("../assets/bg.png")}
        />
        <Text style={[styles.email, styles.showPosition]}>Text Input</Text>
        <Text style={[styles.show, styles.showPosition]}>Show</Text>
      </View>
      <View style={[styles.inputtext3, styles.inputtextPosition]}>
        <Image
          style={[styles.bgIcon, styles.bgPosition]}
          contentFit="cover"
          source={require("../assets/bg.png")}
        />
        <Text style={[styles.email, styles.showPosition]}>Text Input</Text>
        <Text style={[styles.show, styles.showPosition]}>Show</Text>
      </View>
      <View style={[styles.inputtext4, styles.inputtextPosition]}>
        <Image
          style={[styles.bgIcon, styles.bgPosition]}
          contentFit="cover"
          source={require("../assets/bg.png")}
        />
        <Text style={[styles.email, styles.showPosition]}>Text Input</Text>
        <Text style={[styles.show, styles.showPosition]}>Show</Text>
      </View>
      <View style={[styles.inputtext5, styles.inputtextPosition]}>
        <Image
          style={[styles.bgIcon, styles.bgPosition]}
          contentFit="cover"
          source={require("../assets/bg.png")}
        />
        <Text style={[styles.email, styles.showPosition]}>Text Input</Text>
        <Text style={[styles.show, styles.showPosition]}>Show</Text>
      </View>
      <View style={[styles.inputtext6, styles.inputtextPosition1]}>
        <Image
          style={[styles.bgIcon, styles.bgPosition]}
          contentFit="cover"
          source={require("../assets/bg.png")}
        />
        <Text style={[styles.email, styles.showPosition]}>CPF</Text>
        <Text style={[styles.show, styles.showPosition]}>Show</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  showFlexBox: {
    textAlign: "right",
    display: "none",
    color: Color.mediumseagreen,
  },
  iconxLayout: {
    height: 16,
    width: 16,
    position: "absolute",
  },
  checkboxLayout3: {
    height: 60,
    width: 339,
  },
  checkboxLayout2: {
    height: 25,
    width: 97,
    top: 35,
    position: "absolute",
  },
  bgBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
    position: "absolute",
  },
  iconcheckmarkPosition: {
    height: 7,
    width: 8,
    left: 4,
    top: 4,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.uI14Regular_size,
    left: 24,
    color: Color.gray04,
    fontFamily: FontFamily.uI14Regular,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  checkboxLayout1: {
    width: 132,
    height: 25,
  },
  checkboxPosition: {
    left: 18,
    position: "absolute",
  },
  checkboxLayout: {
    width: 121,
    height: 25,
    position: "absolute",
  },
  checkboxemptyPosition: {
    top: 1,
    height: 16,
    width: 16,
    left: 0,
    position: "absolute",
  },
  inputtextPosition1: {
    height: 50,
    left: 16,
    right: 16,
    position: "absolute",
  },
  bgPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  showPosition: {
    marginTop: -9,
    top: "50%",
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Medium_size,
    position: "absolute",
  },
  inputtextPosition: {
    left: 13,
    right: 19,
    height: 50,
    position: "absolute",
  },
  filter: {
    top: 8,
    display: "none",
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Medium_size,
    textAlign: "right",
    right: 0,
    position: "absolute",
  },
  content: {
    marginLeft: -90.5,
    left: "50%",
    fontSize: FontSize.uI30Semi_size,
    fontWeight: "600",
    fontFamily: FontFamily.uI30Semi,
    color: Color.black,
    textAlign: "center",
    top: 0,
    position: "absolute",
  },
  iconx: {
    top: 16,
    display: "none",
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
    left: 16,
    right: 16,
    position: "absolute",
  },
  sexo: {
    fontSize: FontSize.size_xs,
    display: "flex",
    alignItems: "flex-end",
    width: 237,
    height: 22,
    color: Color.gray04,
    fontFamily: FontFamily.uI14Regular,
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  bg: {
    borderColor: "#e8e8e8",
    backgroundColor: Color.gray01,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  iconcheckmark: {
    display: "none",
  },
  textHere: {
    width: 74,
  },
  checkboxOptionempty1: {
    left: 121,
  },
  checkboxOptionempty2: {
    left: 242,
  },
  checkboxOptionempty: {
    top: 253,
    left: 21,
    position: "absolute",
  },
  bg2: {
    backgroundColor: Color.mediumseagreen,
    borderColor: "#4b9460",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  iconcheckmark2: {
    width: 9,
    height: 8,
    left: 4,
    top: 4,
    position: "absolute",
  },
  textHere2: {
    width: 109,
  },
  checkboxOptionfilled1: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  checkboxOptionfilled: {
    top: 288,
    left: 21,
    position: "absolute",
  },
  checkboxOptionempty3: {
    top: 527,
    height: 60,
    width: 339,
  },
  checkboxOptionfilled2: {
    top: 562,
    width: 132,
    height: 25,
  },
  checkboxfilled2: {
    top: 36,
    left: 122,
  },
  bg9: {
    height: "26.67%",
    width: "4.72%",
    top: "60%",
    right: "94.69%",
    bottom: "13.33%",
    left: "0.59%",
    borderColor: "#e8e8e8",
    backgroundColor: Color.gray01,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
  },
  checkboxOptionempty6: {
    top: 603,
    left: 17,
    position: "absolute",
  },
  checkboxfilled3: {
    display: "none",
  },
  textHere8: {
    width: 98,
  },
  checkboxOptionfilled5: {
    left: 0,
    top: 0,
  },
  checkboxOptionfilled4: {
    top: 638,
    left: 19,
  },
  bgIcon: {
    borderRadius: Border.br_5xs,
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
    top: 126,
  },
  inputtext1: {
    top: 329,
  },
  inputtext2: {
    top: 395,
  },
  inputtext3: {
    top: 461,
  },
  inputtext4: {
    top: 745,
  },
  inputtext5: {
    top: 679,
  },
  inputtext6: {
    top: 192,
  },
  prRegistro: {
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default PrRegistro;

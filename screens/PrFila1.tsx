import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const PrFila1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.prFila}>
      <Image
        style={[styles.iosstatusBarblackIcon, styles.marketPosition]}
        contentFit="cover"
        source={require("../assets/iosstatus-barblack.png")}
      />
      <View style={styles.pageHeader}>
        <Text style={[styles.filter, styles.iconxPosition]}>Filter</Text>
        <Text style={[styles.market, styles.domFlexBox]}>Pré-Fila</Text>
        <Image
          style={[styles.iconx, styles.iconxPosition]}
          contentFit="cover"
          source={require("../assets/iconx.png")}
        />
        <Pressable
          style={styles.back}
          onPress={() => navigation.navigate("PainelDoPaciente")}
        >
          <Text style={[styles.voltar, styles.filterTypo]}>Voltar</Text>
        </Pressable>
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <View style={[styles.bg, styles.bgPosition]} />
        <Text style={styles.checkmark} />
        <Text style={styles.interactions} />
      </View>
      <View style={[styles.header1, styles.headerPosition]}>
        <View style={[styles.bg, styles.bgPosition]} />
        <Text style={styles.checkmark} />
        <Text style={styles.interactions} />
      </View>
      <View style={[styles.header2, styles.headerPosition]}>
        <View style={[styles.bg, styles.bgPosition]} />
        <Text style={styles.checkmark} />
        <Text style={styles.interactions} />
      </View>
      <View style={styles.calendrio}>
        <View style={[styles.calendrio1, styles.calendrio1FlexBox]}>
          <View style={styles.monthYear}>
            <Text style={[styles.janeiro2022, styles.domFlexBox]}>
              Janeiro 2022
            </Text>
          </View>
          <View style={[styles.navigation, styles.calendrio1FlexBox]}>
            <Image
              style={styles.chevronLeftBlack24dpIcon}
              contentFit="cover"
              source={require("../assets/chevron-left-black-24dp.png")}
            />
            <Image
              style={styles.chevronLeftBlack24dpIcon}
              contentFit="cover"
              source={require("../assets/chevron-right-black-24dp.png")}
            />
          </View>
        </View>
        <View style={[styles.dia, styles.bgPosition]}>
          <View style={styles.sunday}>
            <Text style={[styles.dom, styles.domFlexBox]}>Dom</Text>
          </View>
          <View style={styles.sunday}>
            <Text style={[styles.dom, styles.domFlexBox]}>Seg</Text>
          </View>
          <View style={styles.sunday}>
            <Text style={[styles.dom, styles.domFlexBox]}>Ter</Text>
          </View>
          <View style={styles.sunday}>
            <Text style={[styles.dom, styles.domFlexBox]}>Qua</Text>
          </View>
          <View style={styles.sunday}>
            <Text style={[styles.dom, styles.domFlexBox]}>Qui</Text>
          </View>
          <View style={styles.sunday}>
            <Text style={[styles.dom, styles.domFlexBox]}>Sex</Text>
          </View>
          <View style={styles.sunday}>
            <Text style={[styles.dom, styles.domFlexBox]}>Sab</Text>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={[styles.data, styles.bgPosition]}>
          <View style={styles.monthYear}>
            <View style={[styles.date, styles.dateLayout1]}>
              <Text style={[styles.date1, styles.dateTypo]}>26</Text>
            </View>
            <View style={[styles.date2, styles.dateLayout1]}>
              <Text style={[styles.date1, styles.dateTypo]}>27</Text>
            </View>
            <View style={[styles.date2, styles.dateLayout1]}>
              <Text style={[styles.date1, styles.dateTypo]}>28</Text>
            </View>
            <View style={[styles.date2, styles.dateLayout1]}>
              <Text style={[styles.date1, styles.dateTypo]}>29</Text>
            </View>
            <View style={[styles.date2, styles.dateLayout1]}>
              <Text style={[styles.date1, styles.dateTypo]}>30</Text>
            </View>
            <View style={[styles.date2, styles.dateLayout1]}>
              <Text style={[styles.date1, styles.dateTypo]}>31</Text>
            </View>
            <View style={[styles.date12, styles.dateLayout1]}>
              <Text style={[styles.date13, styles.dateTypo]}>1</Text>
            </View>
          </View>
          <View style={styles.monthYear}>
            <View style={[styles.date, styles.dateLayout1]}>
              <Text style={[styles.date13, styles.dateTypo]}>2</Text>
            </View>
            <View style={[styles.date2, styles.dateLayout1]}>
              <Text style={[styles.date13, styles.dateTypo]}>3</Text>
            </View>
            <View style={[styles.date2, styles.dateLayout1]}>
              <Text style={[styles.date13, styles.dateTypo]}>4</Text>
            </View>
            <View style={[styles.date2, styles.dateLayout1]}>
              <Text style={[styles.date13, styles.dateTypo]}>5</Text>
            </View>
            <View style={[styles.date2, styles.dateLayout1]}>
              <Text style={[styles.date13, styles.dateTypo]}>6</Text>
            </View>
            <View style={[styles.date2, styles.dateLayout1]}>
              <Text style={[styles.date13, styles.dateTypo]}>7</Text>
            </View>
            <View style={[styles.date12, styles.dateLayout1]}>
              <Text style={[styles.date13, styles.dateTypo]}>8</Text>
            </View>
          </View>
          <View style={styles.monthYear}>
            <View style={[styles.date, styles.dateLayout1]}>
              <Text style={[styles.date13, styles.dateTypo]}>9</Text>
            </View>
            <View style={[styles.date2, styles.dateLayout1]}>
              <Text style={[styles.date13, styles.dateTypo]}>10</Text>
            </View>
            <View style={[styles.date2, styles.dateLayout1]}>
              <Text style={[styles.date13, styles.dateTypo]}>11</Text>
            </View>
            <View style={[styles.date2, styles.dateLayout1]}>
              <Text style={[styles.date13, styles.dateTypo]}>12</Text>
            </View>
            <View style={[styles.date2, styles.dateLayout1]}>
              <Text style={[styles.date13, styles.dateTypo]}>13</Text>
            </View>
            <View style={[styles.date2, styles.dateLayout1]}>
              <Text style={[styles.date13, styles.dateTypo]}>14</Text>
            </View>
            <View style={[styles.date12, styles.dateLayout1]}>
              <Text style={[styles.date13, styles.dateTypo]}>15</Text>
            </View>
          </View>
          <View style={styles.monthYear}>
            <View style={[styles.date, styles.dateLayout1]}>
              <Text style={[styles.date13, styles.dateTypo]}>16</Text>
            </View>
            <View style={[styles.date2, styles.dateLayout1]}>
              <Text style={[styles.date13, styles.dateTypo]}>17</Text>
            </View>
            <View style={[styles.date2, styles.dateLayout1]}>
              <Text style={[styles.date13, styles.dateTypo]}>18</Text>
            </View>
            <View style={[styles.date2, styles.dateLayout1]}>
              <Text style={[styles.date13, styles.dateTypo]}>19</Text>
            </View>
            <View style={[styles.date50, styles.dateLayout]}>
              <Text style={[styles.date51, styles.dateTypo]}>20</Text>
            </View>
            <View style={[styles.date2, styles.dateLayout1]}>
              <Text style={[styles.date13, styles.dateTypo]}>21</Text>
            </View>
            <View style={[styles.date12, styles.dateLayout1]}>
              <Text style={[styles.date13, styles.dateTypo]}>22</Text>
            </View>
          </View>
          <View style={styles.monthYear}>
            <View style={[styles.date, styles.dateLayout1]}>
              <Text style={[styles.date13, styles.dateTypo]}>23</Text>
            </View>
            <View style={[styles.date2, styles.dateLayout1]}>
              <Text style={[styles.date13, styles.dateTypo]}>24</Text>
            </View>
            <View style={[styles.date2, styles.dateLayout1]}>
              <Text style={[styles.date13, styles.dateTypo]}>25</Text>
            </View>
            <View style={[styles.date2, styles.dateLayout1]}>
              <Text style={[styles.date13, styles.dateTypo]}>26</Text>
            </View>
            <View style={[styles.date2, styles.dateLayout1]}>
              <Text style={[styles.date13, styles.dateTypo]}>27</Text>
            </View>
            <View style={[styles.date2, styles.dateLayout1]}>
              <Text style={[styles.date13, styles.dateTypo]}>28</Text>
            </View>
            <View style={[styles.date12, styles.dateLayout1]}>
              <Text style={[styles.date13, styles.dateTypo]}>29</Text>
            </View>
          </View>
          <View style={styles.monthYear}>
            <View style={[styles.date, styles.dateLayout1]}>
              <Text style={[styles.date13, styles.dateTypo]}>31</Text>
            </View>
            <View style={[styles.date2, styles.dateLayout1]}>
              <Text style={[styles.date1, styles.dateTypo]}>1</Text>
            </View>
            <View style={[styles.date2, styles.dateLayout1]}>
              <Text style={[styles.date1, styles.dateTypo]}>2</Text>
            </View>
            <View style={[styles.date2, styles.dateLayout1]}>
              <Text style={[styles.date1, styles.dateTypo]}>3</Text>
            </View>
            <View style={[styles.date2, styles.dateLayout1]}>
              <Text style={[styles.date1, styles.dateTypo]}>4</Text>
            </View>
            <View style={[styles.date2, styles.dateLayout1]}>
              <Text style={[styles.date1, styles.dateTypo]}>5</Text>
            </View>
            <View style={[styles.date12, styles.dateLayout1]}>
              <Text style={[styles.date1, styles.dateTypo]}>6</Text>
            </View>
          </View>
        </View>
      </View>
      <Text style={[styles.tempoDeEspera, styles.minutosTypo]}>
        Tempo de espera:
      </Text>
      <Text
        style={[styles.vocEstNa, styles.vocEstNaTypo]}
      >{`Você está na `}</Text>
      <Text style={[styles.posioDaFila, styles.vocEstNaTypo]}>
        posição da fila
      </Text>
      <Text style={[styles.suaConsultaSer, styles.janTypo]}>
        Sua consulta será em:
      </Text>
      <Text style={[styles.minutos, styles.minutosTypo]}>minutos</Text>
      <Text style={[styles.jan, styles.janTypo]}>JAN</Text>
      <View style={[styles.date84, styles.dateLayout]}>
        <Text style={[styles.date51, styles.dateTypo]}>40</Text>
      </View>
      <View style={[styles.date86, styles.dateLayout]}>
        <Text style={[styles.date51, styles.dateTypo]}>20</Text>
      </View>
      <View style={[styles.date88, styles.dateLayout]}>
        <Text style={[styles.date51, styles.dateTypo]}>3ª</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  marketPosition: {
    top: 0,
    position: "absolute",
  },
  iconxPosition: {
    display: "none",
    position: "absolute",
  },
  domFlexBox: {
    textAlign: "center",
    color: Color.black,
  },
  filterTypo: {
    color: Color.mediumseagreen,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Medium_size,
  },
  headerPosition: {
    height: 67,
    borderRadius: Border.br_5xs,
    left: 16,
    right: 16,
    position: "absolute",
  },
  bgPosition: {
    left: "0%",
    position: "absolute",
  },
  calendrio1FlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  dateLayout1: {
    padding: Padding.p_3xs,
    height: 39,
    borderRadius: Border.br_81xl,
    width: 38,
    alignItems: "center",
  },
  dateTypo: {
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
    fontSize: FontSize.uI16Medium_size,
  },
  dateLayout: {
    backgroundColor: Color.greenSecondary,
    padding: Padding.p_3xs,
    height: 39,
    borderRadius: Border.br_81xl,
    width: 38,
    justifyContent: "center",
    alignItems: "center",
  },
  minutosTypo: {
    height: 26,
    fontSize: FontSize.size_xl,
    top: 291,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    position: "absolute",
  },
  vocEstNaTypo: {
    top: 212,
    height: 26,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    position: "absolute",
  },
  janTypo: {
    top: 135,
    height: 26,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
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
  market: {
    marginLeft: -54.5,
    left: "50%",
    fontSize: FontSize.uI30Semi_size,
    fontFamily: FontFamily.uI30Semi,
    fontWeight: "600",
    textAlign: "center",
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
    left: 16,
    right: 16,
    position: "absolute",
  },
  bg: {
    height: "100%",
    backgroundColor: Color.whitesmoke_100,
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
    top: "0%",
    borderRadius: Border.br_5xs,
  },
  checkmark: {
    bottom: 32,
    fontSize: FontSize.uI30Medium_size,
    left: 32,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    position: "absolute",
  },
  interactions: {
    bottom: 69,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.uI14Regular,
    color: Color.gray04,
    left: 32,
    textAlign: "left",
    position: "absolute",
  },
  header: {
    top: 269,
  },
  header1: {
    top: 192,
  },
  header2: {
    top: 115,
  },
  janeiro2022: {
    fontSize: 18,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    textAlign: "center",
  },
  monthYear: {
    flexDirection: "row",
  },
  chevronLeftBlack24dpIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  navigation: {
    width: 58,
    marginLeft: 144,
    justifyContent: "space-between",
  },
  calendrio1: {
    height: "6.55%",
    width: "97.85%",
    right: "2.15%",
    bottom: "93.45%",
    justifyContent: "center",
    left: "0%",
    position: "absolute",
    top: "0%",
  },
  dom: {
    fontFamily: FontFamily.poppinsMedium,
    textAlign: "center",
    fontWeight: "500",
    fontSize: FontSize.uI16Medium_size,
  },
  sunday: {
    width: 38,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  dia: {
    height: "5.83%",
    top: "17.96%",
    bottom: "76.21%",
    justifyContent: "space-between",
    flexDirection: "row",
    right: "0%",
    left: "0%",
    width: "100%",
  },
  divider: {
    height: "0.12%",
    width: "100.15%",
    top: "27.37%",
    right: "-0.08%",
    bottom: "72.51%",
    left: "-0.08%",
    borderStyle: "solid",
    borderColor: "#e5e5e5",
    borderTopWidth: 0.5,
    position: "absolute",
  },
  date1: {
    color: Color.gainsboro,
  },
  date: {
    justifyContent: "center",
  },
  date2: {
    marginLeft: 10,
    justifyContent: "center",
  },
  date13: {
    color: Color.black,
  },
  date12: {
    marginLeft: 10,
    justifyContent: "space-between",
  },
  date51: {
    color: Color.white,
  },
  date50: {
    marginLeft: 10,
  },
  data: {
    height: "68.93%",
    top: "31.07%",
    justifyContent: "space-between",
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  calendrio: {
    top: 370,
    left: 25,
    width: 326,
    height: 412,
    position: "absolute",
  },
  tempoDeEspera: {
    width: 215,
    left: 33,
  },
  vocEstNa: {
    width: 128,
    left: 32,
  },
  posioDaFila: {
    left: 210,
    width: 139,
  },
  suaConsultaSer: {
    width: 215,
    left: 33,
  },
  minutos: {
    left: 265,
    width: 83,
  },
  jan: {
    left: 300,
    width: 46,
  },
  date84: {
    top: 282,
    left: 217,
    position: "absolute",
  },
  date86: {
    top: 129,
    left: 255,
    position: "absolute",
  },
  date88: {
    top: 206,
    left: 165,
    position: "absolute",
  },
  prFila: {
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default PrFila1;

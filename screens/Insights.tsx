import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const Insights = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.insights}>
      <Image
        style={styles.iosstatusBarblackIcon}
        contentFit="cover"
        source={require("../assets/iosstatus-barblack.png")}
      />
      <View style={[styles.pageHeader, styles.pageHeaderPosition]}>
        <Text style={styles.next}>Next</Text>
        <Text style={[styles.insights1, styles.textPosition]}>Insights</Text>
        <Image
          style={[styles.iconx, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconx.png")}
        />
        <Pressable
          style={styles.back}
          onPress={() => navigation.navigate("PainelDaUnidadeDeAtendimento")}
        >
          <Text style={[styles.voltar, styles.item8Typo]}>Voltar</Text>
        </Pressable>
      </View>
      <View style={[styles.circularGraph, styles.circularGraphLayout]}>
        <Image
          style={[styles.innerCircleIcon, styles.circularGraphLayout]}
          contentFit="cover"
          source={require("../assets/inner-circle.png")}
        />
        <Text style={[styles.text, styles.textPosition]}>18/26</Text>
        <Text style={[styles.pacientesAtendidos, styles.statisticTypo]}>
          Pacientes atendidos
        </Text>
        <Image
          style={[styles.innerCircleIcon, styles.circularGraphLayout]}
          contentFit="cover"
          source={require("../assets/outer-circle.png")}
        />
      </View>
      <View style={[styles.datamobileGraph, styles.pageHeaderPosition]}>
        <Image
          style={[styles.backgroundIcon, styles.backgroundIconLayout]}
          contentFit="cover"
          source={require("../assets/background.png")}
        />
        <View style={styles.bars}>
          <View style={[styles.barLine, styles.barLayout]}>
            <View style={[styles.barLine, styles.barLayout]}>
              <Image
                style={[styles.backgroundIcon1, styles.backgroundIconLayout]}
                contentFit="cover"
                source={require("../assets/background1.png")}
              />
              <Text style={styles.itemPosition}>Fluxo</Text>
            </View>
            <View style={[styles.databarChartfill, styles.databarPosition]}>
              <View style={[styles.background, styles.backgroundPosition]} />
            </View>
          </View>
          <View style={[styles.barLine1, styles.barLayout]}>
            <View style={[styles.barLine, styles.barLayout]}>
              <Image
                style={[styles.backgroundIcon1, styles.backgroundIconLayout]}
                contentFit="cover"
                source={require("../assets/background1.png")}
              />
              <Text style={styles.itemPosition}>Fluxo</Text>
            </View>
            <View style={[styles.databarChartfill1, styles.databarPosition]}>
              <View style={[styles.background1, styles.backgroundPosition]} />
            </View>
          </View>
          <View style={[styles.barLine2, styles.barLayout]}>
            <View style={[styles.barLine, styles.barLayout]}>
              <Image
                style={[styles.backgroundIcon1, styles.backgroundIconLayout]}
                contentFit="cover"
                source={require("../assets/background1.png")}
              />
              <Text style={styles.itemPosition}>Fluxo</Text>
            </View>
            <View style={[styles.databarChartfill, styles.databarPosition]}>
              <View style={[styles.background, styles.backgroundPosition]} />
            </View>
          </View>
          <View style={[styles.barLine3, styles.barLayout]}>
            <View style={[styles.barLine, styles.barLayout]}>
              <Image
                style={[styles.backgroundIcon1, styles.backgroundIconLayout]}
                contentFit="cover"
                source={require("../assets/background1.png")}
              />
              <Text style={styles.itemPosition}>Fluxo</Text>
            </View>
            <View style={[styles.databarChartfill1, styles.databarPosition]}>
              <View style={[styles.background1, styles.backgroundPosition]} />
            </View>
          </View>
          <View style={[styles.barLine4, styles.barLayout]}>
            <View style={[styles.barLine, styles.barLayout]}>
              <Image
                style={[styles.backgroundIcon1, styles.backgroundIconLayout]}
                contentFit="cover"
                source={require("../assets/background1.png")}
              />
              <Text style={styles.itemPosition}>Fluxo</Text>
            </View>
            <View style={[styles.databarChartfill, styles.databarPosition]}>
              <View style={[styles.background, styles.backgroundPosition]} />
            </View>
          </View>
          <View style={[styles.barLine5, styles.barLayout]}>
            <View style={[styles.barLine, styles.barLayout]}>
              <Image
                style={[styles.backgroundIcon1, styles.backgroundIconLayout]}
                contentFit="cover"
                source={require("../assets/background1.png")}
              />
              <Text style={styles.itemPosition}>Fluxo</Text>
            </View>
            <View style={[styles.databarChartfill1, styles.databarPosition]}>
              <View style={[styles.background1, styles.backgroundPosition]} />
            </View>
          </View>
          <View style={[styles.barLine6, styles.barLayout]}>
            <View style={[styles.barLine, styles.barLayout]}>
              <Image
                style={[styles.backgroundIcon1, styles.backgroundIconLayout]}
                contentFit="cover"
                source={require("../assets/background1.png")}
              />
              <Text style={styles.itemPosition}>Fluxo</Text>
            </View>
            <View style={[styles.databarChartfill, styles.databarPosition]}>
              <View style={[styles.background, styles.backgroundPosition]} />
            </View>
          </View>
          <View style={[styles.barLine7, styles.barLayout]}>
            <View style={[styles.barLine, styles.barLayout]}>
              <Image
                style={[styles.backgroundIcon1, styles.backgroundIconLayout]}
                contentFit="cover"
                source={require("../assets/background1.png")}
              />
              <Text style={styles.itemPosition}>Fluxo</Text>
            </View>
            <View style={[styles.databarChartfill1, styles.databarPosition]}>
              <View style={[styles.background1, styles.backgroundPosition]} />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.contentsearchResult, styles.resultLayout]}>
        <View style={[styles.datagraphResult, styles.resultLayout]}>
          <Text style={[styles.item8, styles.item8Typo]}>Fluxo 1</Text>
          <Text style={[styles.statistic, styles.statisticTypo]}>Info</Text>
          <View style={styles.divider} />
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon.png")}
          />
        </View>
      </View>
      <View style={[styles.contentsearchResult1, styles.resultLayout]}>
        <View style={[styles.datagraphResult, styles.resultLayout]}>
          <Text style={[styles.item8, styles.item8Typo]}>Fluxo 4</Text>
          <Text style={[styles.statistic, styles.statisticTypo]}>Info</Text>
          <View style={styles.divider} />
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon.png")}
          />
        </View>
      </View>
      <View style={[styles.contentsearchResult2, styles.resultLayout]}>
        <View style={[styles.datagraphResult, styles.resultLayout]}>
          <Text style={[styles.item8, styles.item8Typo]}>Fluxo 3</Text>
          <Text style={[styles.statistic, styles.statisticTypo]}>Info</Text>
          <View style={styles.divider} />
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon.png")}
          />
        </View>
      </View>
      <View style={[styles.contentsearchResult3, styles.resultLayout]}>
        <View style={[styles.datagraphResult, styles.resultLayout]}>
          <Text style={[styles.item8, styles.item8Typo]}>Fluxo 2</Text>
          <Text style={[styles.statistic, styles.statisticTypo]}>Info</Text>
          <View style={styles.divider} />
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageHeaderPosition: {
    left: 16,
    position: "absolute",
  },
  textPosition: {
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    height: 16,
    width: 16,
    left: 0,
    position: "absolute",
  },
  item8Typo: {
    textAlign: "left",
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Medium_size,
  },
  circularGraphLayout: {
    height: 196,
    width: 196,
    position: "absolute",
  },
  statisticTypo: {
    fontFamily: FontFamily.uI14Regular,
    position: "absolute",
  },
  backgroundIconLayout: {
    maxHeight: "100%",
    position: "absolute",
  },
  barLayout: {
    width: 30,
    height: 202,
    top: 0,
    position: "absolute",
  },
  databarPosition: {
    left: 14,
    width: 16,
    position: "absolute",
  },
  backgroundPosition: {
    borderRadius: Border.br_5xs,
    bottom: 0,
    left: "0%",
    right: "0%",
    top: 0,
    position: "absolute",
    width: "100%",
  },
  resultLayout: {
    height: 35,
    width: 336,
    position: "absolute",
  },
  iosstatusBarblackIcon: {
    height: 44,
    maxWidth: "100%",
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  next: {
    top: 8,
    display: "none",
    fontSize: FontSize.uI16Medium_size,
    textAlign: "right",
    color: Color.mediumseagreen,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    right: 0,
    position: "absolute",
  },
  insights1: {
    marginLeft: -56.5,
    fontSize: FontSize.uI30Semi_size,
    fontWeight: "600",
    fontFamily: FontFamily.uI30Semi,
    color: Color.black,
    top: 0,
  },
  iconx: {
    top: 16,
    height: 16,
    display: "none",
  },
  voltar: {
    marginTop: -10,
    color: Color.mediumseagreen,
  },
  back: {
    top: "50%",
    left: 0,
    position: "absolute",
  },
  pageHeader: {
    top: 60,
    right: 16,
    height: 36,
  },
  innerCircleIcon: {
    left: 0,
    top: 0,
  },
  text: {
    marginLeft: -34,
    top: 80,
    fontSize: FontSize.uI30Medium_size,
    color: Color.mediumseagreen,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    left: "50%",
  },
  pacientesAtendidos: {
    marginLeft: -49,
    top: 117,
    color: Color.gray03,
    fontSize: FontSize.uI10Regular_size,
    fontFamily: FontFamily.uI14Regular,
    textAlign: "center",
    left: "50%",
  },
  circularGraph: {
    top: 579,
    left: 95,
  },
  backgroundIcon: {
    height: "100.43%",
    top: "0%",
    bottom: "-0.43%",
    borderRadius: Border.br_xl,
    left: "0%",
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  backgroundIcon1: {
    marginLeft: -1,
    bottom: 43,
    borderRadius: Border.br_181xl,
    maxHeight: "100%",
    width: 16,
    left: "50%",
    top: 0,
  },
  itemPosition: {
    transform: [
      {
        rotate: "-45deg",
      },
    ],
    color: Color.gray04,
    bottom: 5,
    marginLeft: -11.32,
    fontFamily: FontFamily.uI14Regular,
    fontSize: FontSize.uI10Regular_size,
    left: "50%",
    textAlign: "right",
    position: "absolute",
  },
  barLine: {
    left: 0,
  },
  background: {
    backgroundColor: Color.mediumseagreen,
  },
  databarChartfill: {
    top: 49,
    height: 117,
  },
  background1: {
    backgroundColor: Color.greenSecondary,
  },
  databarChartfill1: {
    top: 89,
    height: 77,
  },
  barLine1: {
    left: 40,
  },
  barLine2: {
    left: 80,
  },
  barLine3: {
    left: 120,
  },
  barLine4: {
    left: 160,
  },
  barLine5: {
    left: 200,
  },
  barLine6: {
    left: 240,
  },
  barLine7: {
    left: 280,
  },
  bars: {
    left: 10,
    width: 310,
    height: 202,
    top: 16,
    position: "absolute",
  },
  datamobileGraph: {
    top: 112,
    width: 343,
    height: 231,
  },
  item8: {
    left: 32,
    color: Color.black,
    top: 0,
    position: "absolute",
  },
  statistic: {
    fontSize: FontSize.uI14Regular_size,
    color: Color.black,
    top: 0,
    fontFamily: FontFamily.uI14Regular,
    textAlign: "right",
    right: 0,
  },
  divider: {
    top: 35,
    borderStyle: "solid",
    borderColor: "#e8e8e8",
    borderTopWidth: 1,
    height: 1,
    left: 0,
    right: 0,
    position: "absolute",
  },
  icon: {
    top: 2,
  },
  datagraphResult: {
    left: 0,
    top: 0,
  },
  contentsearchResult: {
    top: 382,
    left: 20,
    width: 336,
  },
  contentsearchResult1: {
    top: 514,
    left: 20,
    width: 336,
  },
  contentsearchResult2: {
    top: 470,
    left: 20,
    width: 336,
  },
  contentsearchResult3: {
    top: 426,
    left: 20,
    width: 336,
  },
  insights: {
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Insights;

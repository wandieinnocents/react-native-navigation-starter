import React from "react";
import { StyleSheet, Text, View, Button, ImageBackground,SafeAreaView, ScrollView,} from "react-native";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
  
  <View style={styles.mainContainer}>
    {/* Curved shape */}
    <View style={styles.mainTopBannerShape}>
      <ImageBackground
        style={styles.imgBackground}
        resizeMode="cover"
        source={require("../assets/images/bike.jpg")}
      ></ImageBackground>
    </View>
    {/* End of curved shape */}

    {/* Card container section  */}
    <View style={styles.mainCardContainerSection}>
      {/* Card Container 1 */}

      <View style={styles.cardRowContainerOne}>
        {/* Row card  */}
        <View style={styles.cardItemOne} >
          <ImageBackground
            style={styles.imgBackground}
            resizeMode="cover"
            source={require("../assets/images/1.png")}
          ></ImageBackground>

          <View style={styles.cardDetails} >
            <Text >REPAIR </Text>
          </View>
        </View>
        <View style={styles.cardItemTwo}>
          <ImageBackground
            style={styles.imgBackground}
            resizeMode="cover"
            source={require("../assets/images/2.png")}
          ></ImageBackground>

          <View style={styles.cardDetails}>
            <Text>PROFILE </Text>
          </View>
        </View>
      </View>
      {/* End of card container 1 */}

      {/* Card container 2 */}

      <View style={styles.cardRowContainerTwo}>
        {/* Row card  */}
        <View style={styles.cardItemThree}>
          <ImageBackground
            style={styles.imgBackground}
            resizeMode="cover"
            source={require("../assets/images/3.png")}
          ></ImageBackground>

          <View style={styles.cardDetails}>
            <Text>SERVICES </Text>
          </View>
        </View>
        <View style={styles.cardItemFour}>
          <ImageBackground
            style={styles.imgBackground}
            resizeMode="cover"
            source={require("../assets/images/6.png")}
          ></ImageBackground>

          <View style={styles.cardDetails}>
            <Text>ACCOUNT </Text>
          </View>
        </View>
      </View>

      
      {/* End of card container 2 */}
    </View>
    {/* End of card container section */}
  </View>
  </ScrollView>
  </SafeAreaView>

 
);
};

// stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    
  },
  scrollView: {
    backgroundColor: '#fff',
    
  },

  // image background
  imgBackground: {
    width: "100%",
    height: "100%",
    flex: 1,
  },

  // curvedShape
  mainTopBannerShape: {
    backgroundColor: "brown",
    height: 300,
    // paddingTop: 10,
    alignItems: "center",
    // borderBottomLeftRadius:500,
    // borderBottomRightRadius:500
  },
  //General  Card Section Container
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },

  //mainCardContainerSection
  mainCardContainerSection: {
    flex: 1,
    marginTop: -25,
    paddingTop: 40,
    // transform: [{ rotate: "-10deg" }],
    backgroundColor: "#fff",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
  },
  // card container 1
  cardRowContainerOne: {
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    // backgroundColor: "red",

    // justifyContent: "center",
  },

  // card container 2
  cardRowContainerTwo: {
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 5,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    // backgroundColor: "#fff",

    // justifyContent: "center",
  },

  // card item 1
  cardItemOne: {
    flex: 1,
    borderRadius: 10,
    elevation: 3,
    height: 120,
    marginRight: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "black",
    shadowOpacity: 100,
    shadowRadius: 30,
    marginHorizontal: 4,
    marginVertical: 6,
  },

  // card item 2
  cardItemTwo: {
    flex: 1,
    borderRadius: 10,
    elevation: 3,
    height: 120,
    marginRight: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "black",
    shadowOpacity: 100,
    shadowRadius: 30,
    marginHorizontal: 4,
    marginVertical: 6,
  },

  // card item 3
  cardItemThree: {
    flex: 1,
    borderRadius: 10,
    elevation: 3,
    height: 120,
    marginRight: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "black",
    shadowOpacity: 100,
    shadowRadius: 30,
    marginHorizontal: 4,
    marginVertical: 6,
  },

  // card item 4
  cardItemFour: {
    flex: 1,
    borderRadius: 10,
    elevation: 3,
    height: 120,
    marginRight: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "black",
    shadowOpacity: 100,
    shadowRadius: 30,
    marginHorizontal: 4,
    marginVertical: 6,
  },

  // cardDetails
  cardDetails: {
    padding: 3,
  },

});

export default Home;
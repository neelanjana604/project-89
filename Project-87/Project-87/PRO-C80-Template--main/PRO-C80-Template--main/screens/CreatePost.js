import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./screens/Home";
import StartMapScreen from "./screens/StarMap";
import DailyPicScreen from "./screens/DailyPic";
import SpaceCraftScreen from "./screens/SpaceCraft";
import { SafeAreaView, ScrollView, TextInput } from 'react-native';

const Stack = createStackNavigator();

function App() {

  return (
  
  <View style={styles.container}>

      <SafeAreaView style={styles.droidSafeArea} />

      <View style={styles.appTitle}>

          <View style={styles.appIcon}>

              <Image
                  source={require("../assets/logo.png")}
                  style ={styles.iconImage}
                  ></Image>

          </View>
          <View style={styles.appTitleTextContainer}>

             <Text style={styles.appTitleText}>New Post</Text>

          </View>

      </View>

      <View style={styles.fieldsContainer}>

          <ScrollView>

              <Image

                 source={preview_image[this.state.previewImage]}

                 style={styles.previewImage}

                 ></Image>

                 <View style={{height:
                    RFValue(this.state.dropdownHeight)}}>

                        <DropDownPicker

                          items={[
                              {label:"Image 1",value: "image_1"},
                              {label:"Image2", value:"image_2"},
                              {label:"Image3", value:"image_3"},
                              {label:"Image4", value:"image_4"},
                              {label:"Image5", value:"image_5"},
                              {label:"Image6", value:"image_6"},
                              {label:"Image7", value:"image_7"},
                          ]}

                          defaultValue={this.state.previewImage}

                          containerStyle={{
                              height: 40,
                              borderRadius: 20,
                              marginBottom: 10
                          }}

                          onOpen={() => {

                            this.setState({dropdownHeight:170});
                          }}

                          onClose={() =>{
                              this.setState({ dropdownHeight: 40});
                          }}
                          style={{ backgroundColor: "transparent"}}
                          itemStyle={{
                              justifyContent: "flex-start"
                             }}

                             dropDownStyle={{ backgroundColor: "#2a2a2a"}}

                             labelStyle={{
                                 color: "white"
                             }}

                             arrowStyle={{

                                color:"white"
                             }}

                             onChangeItem={item=>
                            
                                this.setState({
                                    previewImage: item.value
                                })
                            }
                            />

                              </View>
                              <TextInput

                              style={style.inputFont}
                              onChangeText={caption => this.setState({ caption })}
                              placeholder={"Caption"}
                              placeholderTextColor="white"
                              />
          </ScrollView>
      </View>
          <View style={{ flex:0.08}} />
          </View>
  
  )
};
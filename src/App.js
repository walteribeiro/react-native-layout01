import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import Header from './components/header';
import SubHeader from './components/subheader';
import Comments from './components/comments';
import CircleButton from './components/circlebutton';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header/>
        <SubHeader/>
        <ScrollView>
          <Comments/>
        </ScrollView>
        <CircleButton/>
      </View>
    );
  }
}

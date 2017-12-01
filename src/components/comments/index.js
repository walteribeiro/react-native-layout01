import React, { Component } from 'react';
import { View } from 'react-native';
import Comment from './comment';

import styles from './styles';

export default class Comments extends Component<{}> {
  state = {
    comments: [
      {
        id: 1,
        name: 'Andy brown',
        comment: 'Andrea nappa dusty pink',
        attached: false,
        datetime: '1:45 PM',
        star: false,
        highlighter: 'Work',
      },
      {
        id: 2,
        name: 'Keri Anderson',
        comment: 'Lain pop sky blue',
        attached: true,
        datetime: '1:39 PM',
        star: false,
        highlighter: '',
      },
      {
        id: 3,
        name: 'Regis, Peter, Rachel 3',
        comment: 'Andrea nappa dusty pink',
        attached: false,
        datetime: 'Sep 29',
        star: true,
        highlighter: 'Fun',
      },
      {
        id: 4,
        name: 'Aruna Knight',
        comment: 'Lain pop sky blue',
        attached: false,
        datetime: 'Sep 17',
        star: true,
        highlighter: 'Family',
      },
      {
        id: 5,
        name: 'Walter Ribeiro',
        comment: 'Lain pop sky blue',
        attached: false,
        datetime: 'Sep 07',
        star: false,
        highlighter: '',
      },
    ],
  };
  render() {
    return (
      <View>
        { this.state.comments.map(comment => <Comment key={comment.id} comment={comment} />) }
      </View>
    );
  }
}

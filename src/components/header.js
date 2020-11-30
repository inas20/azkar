/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {Header} from 'react-native-elements';
import { colors } from '../constants/colors';

export const AppHeader = (props) => (
  <Header
    placement="left"
    leftComponent={{icon: 'chevron-left', color: '#fff', size: 35, style:{fontWeight:'bold'}}}
    rightComponent={{text: props.title, style: {color: '#fff', fontSize: 28 , fontWeight:'bold'}}}
    containerStyle={{
        backgroundColor: colors.primary,
      }}
  />
);

import React, { ReactNode, useState } from "react";
import { TouchableOpacity, Text, TouchableOpacityProps, StyleSheet, ImageSourcePropType, Image } from 'react-native';

export interface TimesProps {
  children?: ReactNode;
  id: number;
}

export interface BoxProps {
  children?: ReactNode;
  tittle?: string;
}

export interface CustomButtonProps extends TouchableOpacityProps {
    title: string,
    img_source?: ImageSourcePropType;
  }

  export interface FetchLogsProps {
    id: number;
    food_liberation: boolean;
    portions: number;
    food_level: string;
    created_at: string;
  }
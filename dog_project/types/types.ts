import React, { ReactNode, useState } from "react";

import { StackNavigationProp } from "@react-navigation/stack";

export interface TimesProps {
  children?: ReactNode;
  id: number;
}


export interface FetchLogsProps {
  id: number;
  food_liberation: boolean;
  portions: number;
  food_level: string;
  created_at: string;
}

export interface Hour {
  id: number;
  times: string;
}

type RootStackParamList = {
  Index: undefined;
  Log: undefined;
};

export type IndexProps = {
  navigation: StackNavigationProp<RootStackParamList, "Index">;
};

type RootStackParamList2 = {
  Index: undefined;
  Log: undefined;
};

export type LogProps = {
  navigation: StackNavigationProp<RootStackParamList2, "Log">;
};


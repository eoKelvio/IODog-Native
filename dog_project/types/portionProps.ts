import { TouchableOpacityProps } from 'react-native';
import { ReactNode } from "react";

export interface portionProps extends TouchableOpacityProps {
  children?: ReactNode;
}
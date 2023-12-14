import { ReactNode } from "react";

export default interface boardProps {
    children?: ReactNode;
    direction: "row" | "column"; // Define o tipo específico para direction
    tittle?: string;
  }
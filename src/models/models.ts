import { ReactNode } from "react";

export interface ITool {
    id: number,
    name: string,
    order: number,
    icon: ReactNode,
    element: string
}
export interface IOptions {
    width: string
    height: string
    bgColor: string
    deg: string
  }
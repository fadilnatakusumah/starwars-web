import { ReactNode } from "react";
import { ContentStyled } from "./index.styled";
interface IContent {
  children: ReactNode;
}
export function Content({ children }: IContent) {
  return <ContentStyled>{children}</ContentStyled>;
}

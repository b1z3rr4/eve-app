import { HTMLProps, PropsWithChildren } from "react";

interface ParagraphProps extends HTMLProps<HTMLParagraphElement> {
  className?: string;
}

export const Paragraph = ({
  children,
  ...attributes
}: PropsWithChildren<ParagraphProps>) => {
  return <p {...attributes}>{children}</p>;
};

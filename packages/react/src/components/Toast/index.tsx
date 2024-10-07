import { ComponentProps, ReactNode } from "react";
import { Title, ToastContainer } from "./styles";
import { X } from "phosphor-react";

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  children: string;
  title: string;
}

export function Toast({ title, children }: ToastProps) {
  return (
    <ToastContainer>
      <div>
        <Title>{title}</Title>
        {children}
      </div>
      <X weight="bold" size={20}/>
    </ToastContainer>
  );
}

Toast.displayName = "Toast";

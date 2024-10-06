import { ComponentProps, ReactNode } from "react";
import { Title, ToastContainer } from "./styles";
import { X } from "phosphor-react";

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  children: string;
  title: ReactNode;
}

export function Toast({ title }: ToastProps) {
  return (
    <ToastContainer>
      <div>
      <Title>{title}</Title>
      <Schedule>
        
      </Schedule>
      </div>

      <X weight="bold" />
    </ToastContainer>
  );
}

Toast.displayName = "Toast";

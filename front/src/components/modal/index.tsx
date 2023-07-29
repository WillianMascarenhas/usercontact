import { ReactNode } from "react";
import { Container } from "./style";
import { useRef, useEffect } from "react";

interface ModalProps {
  toggleModal: () => void;
  children: ReactNode;
  blockModal?: boolean;
}

export const Modal = ({ children, toggleModal }: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!ref.current) {
        return;
      }

      if (!event.target) {
        return;
      }

      const clickedElement = event.target as HTMLElement;
      if (!ref.current.contains(clickedElement) && !clickedElement.closest('.modal-content')) {
        toggleModal();
      }
    };

    window.addEventListener("mousedown", handleClick);

    return () => {
      window.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <Container>
      <div ref={ref} className="modal-content">
        {children}
      </div>
    </Container>
  );
};


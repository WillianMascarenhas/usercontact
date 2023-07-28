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
    // Função que é chamada quando ocorre um clique no documento (fora do modal)
    const handleClick = (e: MouseEvent) => {
      //   console.log("Evento de clique detectado");

      // Verifica se a referência 'ref' é válida e não está nula
      if (!ref.current) {
        // console.log("Ref atual é nula ou não foi definida.");
        return; // Se não estiver definida, sai da função
      }

      // Verifica se o evento 'target' (elemento clicado) não é nulo
      if (!e.target) {
        // console.log("Elemento clicado é nulo.");
        return; // Se o elemento clicado for nulo, sai da função
      }

      // Verifica se o elemento clicado está dentro do elemento referenciado por 'ref'
      if (ref.current.contains(e.target as HTMLElement)) {
        // console.log("Clique dentro do modal, não fecha.");
        return; // Se sim, não faz nada, pois o clique foi dentro do modal
      }

      //   console.log("Clique fora do modal, fechando o modal...");
      toggleModal(); // Se não, chama a função 'toggleModal' para fechar o modal
    };

    // Adiciona um ouvinte de evento de clique ao objeto 'window'
    window.addEventListener("mousedown", handleClick);

    // Função de limpeza que é executada quando o componente é desmontado
    return () => {
      window.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <Container>
      <div ref={ref}>{children}</div>
    </Container>
  );
};

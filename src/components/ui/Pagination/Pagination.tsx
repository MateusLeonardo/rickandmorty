import { ButtonWithProps } from "../ButtonWithProps/ButtonWithProps";
import { PaginationContainer } from "./Styles";

interface PaginationProps {
  pages: number;
  next: string | null;
  prev: string | null;
  page: number;
  onPrevious: () => void;
  onNext: () => void;
}
export const Pagination = ({
  pages,
  next,
  prev,
  page,
  onPrevious,
  onNext,
}: PaginationProps) => {
  return (
    <PaginationContainer>
      <ButtonWithProps disabled={!prev} onClick={onPrevious}>
        Anterior
      </ButtonWithProps>
      <p className="pagination-info">
        Página <span>{page}</span> de {pages}
      </p>
      <ButtonWithProps disabled={!next} onClick={onNext}>
        Próximo
      </ButtonWithProps>
    </PaginationContainer>
  );
};

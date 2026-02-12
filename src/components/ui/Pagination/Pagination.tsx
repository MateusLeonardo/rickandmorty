import { Button } from "@/components/ui/Button/index.ts";
import * as S from "./Pagination.styles.ts";

interface PaginationProps {
  pages: number;
  next: string | null;
  prev: string | null;
  page: number;
  onPrevious: () => void;
  onNext: () => void;
}

export function Pagination({
  pages,
  next,
  prev,
  page,
  onPrevious,
  onNext,
}: PaginationProps) {
  return (
    <S.PaginationContainer>
      <Button disabled={!prev} onClick={onPrevious}>
        Anterior
      </Button>
      <p className="pagination-info">
        Página <span>{page}</span> de {pages}
      </p>
      <Button disabled={!next} onClick={onNext}>
        Próximo
      </Button>
    </S.PaginationContainer>
  );
}

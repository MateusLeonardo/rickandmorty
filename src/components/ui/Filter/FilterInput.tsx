import * as S from "./Filter.styles.ts";

export interface FilterInputProps {
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  inputRef?: React.RefObject<HTMLInputElement | null>;
}

export function FilterInput({
  value = "",
  onChange,
  placeholder = "Pesquisar",
  inputRef,
}: FilterInputProps) {
  return (
    <S.FilterContainer>
      <S.StyledInput
        ref={inputRef}
        type="text"
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        value={value}
      />
    </S.FilterContainer>
  );
}

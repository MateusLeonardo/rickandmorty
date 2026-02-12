import * as S from "./Filter.styles.ts";

export interface FilterSelectProps {
  options: string[];
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function FilterSelect({
  options,
  value = "",
  onChange,
  placeholder = "Selecione uma opção",
}: FilterSelectProps) {
  if (!options.length) {
    return (
      <S.FilterContainer>
        <S.FilterEmptyMessage>Nenhum filtro disponível</S.FilterEmptyMessage>
      </S.FilterContainer>
    );
  }

  return (
    <S.FilterContainer>
      <S.StyledSelect value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </S.StyledSelect>
    </S.FilterContainer>
  );
}

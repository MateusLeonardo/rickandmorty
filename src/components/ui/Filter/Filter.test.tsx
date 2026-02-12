import { render, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import "@testing-library/jest-dom/vitest";
import { FilterSelect } from "./FilterSelect.tsx";
import { FilterInput } from "./FilterInput.tsx";

describe("FilterSelect", () => {
  const defaultProps = {
    options: ["Alive", "Dead", "Unknown"],
    onChange: vi.fn(),
    placeholder: "Status",
  };

  it("Deve renderizar o select com placeholder e opções", () => {
    const { container } = render(<FilterSelect {...defaultProps} />);
    const scope = within(container);

    expect(scope.getByRole("combobox")).toBeInTheDocument();
    expect(scope.getByText("Status")).toBeInTheDocument();
    expect(scope.getByRole("option", { name: "Alive" })).toBeInTheDocument();
    expect(scope.getByRole("option", { name: "Dead" })).toBeInTheDocument();
    expect(scope.getByRole("option", { name: "Unknown" })).toBeInTheDocument();
  });

  it("Deve exibir o valor selecionado quando value é passado", () => {
    const { container } = render(
      <FilterSelect {...defaultProps} value="Dead" />,
    );
    const select = within(container).getByRole("combobox");
    expect(select).toHaveValue("Dead");
  });

  it("Deve chamar onChange ao selecionar uma opção", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const { container } = render(
      <FilterSelect {...defaultProps} onChange={onChange} />,
    );
    const select = within(container).getByRole("combobox");
    await user.selectOptions(select, "Alive");

    expect(onChange).toHaveBeenCalledWith("Alive");
  });

  it('Deve exibir "Nenhum filtro disponível" quando options está vazio', () => {
    const { container } = render(
      <FilterSelect options={[]} onChange={() => {}} placeholder="Status" />,
    );
    const scope = within(container);

    expect(scope.getByText("Nenhum filtro disponível")).toBeInTheDocument();
    expect(scope.queryByRole("combobox")).not.toBeInTheDocument();
  });
});

describe("FilterInput", () => {
  it("Deve renderizar o input", () => {
    const onChange = vi.fn();
    const { container } = render(<FilterInput onChange={onChange} />);
    const input = within(container).getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  it("Deve chamar onChange ao digitar no input", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const { container } = render(<FilterInput onChange={onChange} />);
    const input = within(container).getByRole("textbox");
    await user.type(input, "R");

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenLastCalledWith("R");
  });
});

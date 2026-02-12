import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import { CharacterCard } from "./CharacterCard.tsx";
import { charactersMock } from "@/test/mocks/characters.mock.ts";

describe("CharacterCard", () => {
  it("Deve renderizar o card corretamente", () => {
    render(<CharacterCard character={charactersMock[0]} onClick={() => {}} />);

    expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
    expect(screen.getByText("Human")).toBeInTheDocument();

    const image = screen.getByAltText("Rick Sanchez");
    expect(image).toBeInTheDocument();
    expect(image.getAttribute("src")).toBe(charactersMock[0].image);

    expect(screen.getByText("Vivo")).toBeInTheDocument();
  });
});

import type { Meta, StoryObj } from "@storybook/react-vite";
import { Header } from "./Header";

const meta = {
  title: "RickAndMorty/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
    viewport: {
      viewports: {
        mobile: {
          name: "Mobile",
          styles: {
            width: "375px",
            height: "667px",
          },
        },
        tablet: {
          name: "Tablet",
          styles: {
            width: "768px",
            height: "1024px",
          },
        },
        desktop: {
          name: "Desktop",
          styles: {
            width: "1280px",
            height: "800px",
          },
        },
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Story padrão - Header completo com logo e navegação
 * Em desktop mostra menu horizontal, em mobile mostra botão hambúrguer
 */
export const Default: Story = {};

#!/usr/bin/env node

import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Obter o nome do componente do argumento da linha de comando
const componentName = process.argv[2];

if (!componentName) {
  console.error("❌ Erro: Nome do componente é obrigatório");
  console.log("Uso: npm run create-component <NomeDoComponente>");
  process.exit(1);
}

// Converter para PascalCase se necessário
const toPascalCase = (str) => {
  return str
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .split(/[\s_-]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
};

const ComponentName = toPascalCase(componentName);
const componentPath = join(__dirname, "..", "src", "stories", ComponentName);

// Criar diretório se não existir
if (!existsSync(componentPath)) {
  mkdirSync(componentPath, { recursive: true });
  console.log(`✅ Diretório criado: ${componentPath}`);
} else {
  console.log(`⚠️  Diretório já existe: ${componentPath}`);
}

// Template do componente
const componentTemplate = `import React from "react";
import * as S from "./Styles";

export interface ${ComponentName}Props {
  // Adicione suas props aqui
  children?: React.ReactNode;
}

export const ${ComponentName} = ({ children }: ${ComponentName}Props) => {
  return (
    <S.${ComponentName}Container>
      {children}
    </S.${ComponentName}Container>
  );
};
`;

// Template do componente Skeleton
const skeletonTemplate = `import React from "react";
import * as S from "./Styles";

export const ${ComponentName}Skeleton = () => {
  return (
    <S.${ComponentName}SkeletonContainer>
      {/* Adicione elementos skeleton aqui */}
      <S.SkeletonElement />
    </S.${ComponentName}SkeletonContainer>
  );
};
`;

// Template do arquivo de estilos
const stylesTemplate = `import styled, { keyframes } from "styled-components";

export const ${ComponentName}Container = styled.div\`
  // Adicione seus estilos aqui
\`;

// Animação de shimmer para o skeleton
const shimmer = keyframes\`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
\`;

export const ${ComponentName}SkeletonContainer = styled.div\`
  // Estilos do container do skeleton
\`;

export const SkeletonElement = styled.div\`
  background: linear-gradient(
    90deg,
    #f0f0f0 25%,
    #e0e0e0 50%,
    #f0f0f0 75%
  );
  background-size: 2000px 100%;
  animation: \${shimmer} 1.5s infinite;
  border-radius: 4px;
  height: 20px;
  width: 100%;
\`;
`;

// Template do arquivo de stories
const storiesTemplate = `import type { Meta, StoryObj } from "@storybook/react-vite";
import { ${ComponentName} } from "./${ComponentName}";
import { ${ComponentName}Skeleton } from "./${ComponentName}Skeleton";
import { INITIAL_VIEWPORTS } from "storybook/viewport";

const meta = {
  title: "RickAndMorty/${ComponentName}",
  component: ${ComponentName},
  parameters: {
    layout: "centered",
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ${ComponentName}>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Conteúdo do componente",
  },
};

export const Skeleton: Story = {
  render: () => <${ComponentName}Skeleton />,
};
`;

// Criar arquivos
const files = [
  { name: `${ComponentName}.tsx`, content: componentTemplate },
  { name: `${ComponentName}Skeleton.tsx`, content: skeletonTemplate },
  { name: "Styles.ts", content: stylesTemplate },
  { name: `${ComponentName}.stories.ts`, content: storiesTemplate },
];

files.forEach(({ name, content }) => {
  const filePath = join(componentPath, name);
  if (!existsSync(filePath)) {
    writeFileSync(filePath, content, "utf-8");
    console.log(`✅ Arquivo criado: ${name}`);
  } else {
    console.log(`⚠️  Arquivo já existe: ${name}`);
  }
});

console.log(`\n✨ Componente ${ComponentName} criado com sucesso!`);
console.log(`📁 Localização: src/stories/${ComponentName}/`);

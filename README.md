# Desafio Shakers - Semana 3: Dados Avançados
**Metafields + Metaobjetos + Slider Dinâmico**

Este projeto foi desenvolvido como parte do desafio técnico da Semana 3, focado na manipulação de dados complexos dentro da plataforma Shopify utilizando Liquid.

## 🚀 O que são Metafields e Metaobjetos?

- **Metafields:** São campos personalizados que permitem guardar informações adicionais que não existem nativamente nos objetos da Shopify (como Produtos, Coleções ou Clientes).
- **Metaobjetos:** São estruturas de dados personalizadas. Funcionam como "tabelas" onde podemos definir vários campos (ex: imagem + produto) e criar várias entradas reutilizáveis.

## 🛠️ O que foi implementado

Neste desafio, criei uma Section dinâmica de Slider que consome dados de um Metaobjeto através de um Metafield de lista no produto.

1.  **Metaobjeto `product_with_banner`**: Contém um campo de referência de produto e um campo de ficheiro (imagem).
2.  **Metafield de Produto**: Criado o campo `custom.related_products_with_banner`, que armazena uma **lista de entradas** do Metaobjeto acima.
3.  **Section Liquid**: Desenvolvimento do ficheiro `metaobject-slider.liquid` utilizando:
    - `all_products`: Para transformar o handle do schema num objeto real.
    - `.value`: Para aceder aos dados das referências dos Metaobjetos.
    - **Swiper.js**: Para a funcionalidade do slider.

## ⚙️ Como configurar o projeto

### 1. Criar o Metaobjeto
- Vá a **Definições > Dados Personalizados > Metaobjetos**.
- Nome: `product_with_banner`.
- Campos: `produto` (Product) e `banner` (File/Image).

### 2. Criar o Metafield no Produto
- Vá a **Definições > Dados Personalizados > Produtos**.
- Nome: `Related Products with Banner`.
- Namespace/Key: `custom.related_products_with_banner`.
- Tipo: **Metaobject** (selecionar "Lista de entradas").

### 3. Associar Dados
- No Admin, escolha um produto (ex: Fresh Skin 3).
- No final da página, adicione as entradas de Metaobjeto criadas ao campo de Metafield.

## 💻 Tecnologias Utilizadas
- **Shopify Liquid**
- **CSS3** (Variáveis e Flexbox)
- **JavaScript** (Swiper.js para o slider)
- **Git** (Fluxo de branches e Conventional Commits)

## 🔗 Link do Projeto
- **Vídeo de Demonstração:** [COLOCA_AQUI_O_LINK_DO_TEU_VIDEO]

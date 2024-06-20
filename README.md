# Projeto: Frontend do Gerenciador de Máquinas Teóricas

Este projeto é o frontend da aplicação para gerenciar máquinas teóricas, especificamente voltada para estudantes e entusiastas de máquinas universais, permitindo a criação, programação, execução e salvamento dessas máquinas.

## Índice

- [Instalação](#instalação)
- [Configuração](#configuração)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Dependências](#dependências)
- [Rotas](#rotas)
- [Estilos](#estilos)
- [Gerenciamento de Estado](#gerenciamento-de-estado)
- [Licença](#licença)

## Instalação

Para começar, clone o repositório e instale as dependências:

```bash
git clone https://github.com/FelipeESchmidt/computing-theory-forge.git
cd computing-theory-forge
npm install
```

## Configuração

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis de ambiente:

```env
VITE_BASE_URL=http://localhost:8080
```

## Estrutura do Projeto

O projeto segue uma estrutura organizada para manter o código limpo e fácil de entender:

```bash
src/
  assets/
  components/
  contexts/
  hooks/
  pages/
  redux/
  routes/
  services/
  types/
  utils/
  main.tsx
```

## Dependências

As principais dependências do projeto incluem:

- React
- TypeScript
- Redux
- Redux Toolkit
- React Router DOM
- Axios
- StyledComponents
- react-icons
- jwt-decode
- Vite (para o processo de build)

## Rotas

As rotas da aplicação são gerenciadas pela biblioteca `react-router-dom`, proporcionando uma navegação intuitiva para o usuário. As principais rotas incluem:

#### Não autorizado

- `/`: Página de login e cadastro.

#### Autorizado

- `/`: Página inicial das máquinas teóricas, exibindo as máquinas do usuário.
- `/theoretical-machine`: Página para a criação de uma nova máquina.

## Estilos

Para o desenvolvimento dos estilos dos componentes, utilizamos a biblioteca `StyledComponents`. Essa abordagem permite a criação de componentes estilizados sem a necessidade de classes CSS separadas, facilitando a manutenção e a leitura do código.

## Gerenciamento de Estado

O gerenciamento de estado global é feito com `Redux` e `Redux Toolkit`, centralizando as lógicas e informações pertinentes em um único local de fácil acesso. A biblioteca `redux-persist` é usada para persistir o estado entre sessões.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

Esperamos que esta aplicação seja útil para estudantes e entusiastas da teoria da computação, proporcionando uma plataforma prática e acessível para o estudo de máquinas teóricas.

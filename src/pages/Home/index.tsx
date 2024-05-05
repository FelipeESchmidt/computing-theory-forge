import { Container } from "@components/Container";
import { Header } from "@components/Header";

import { products } from "./constants";
import * as S from "./styles";

export const Home: React.FC = () => {
  return (
    <S.StyledContainer>
      <Header />
      <Container>
        <S.StyledProductsContainer>
          {products.map((product) => (
            <S.StyledProductContainer key={product.id}>
              <S.StyledProductTitle>{product.name}</S.StyledProductTitle>
              <S.StyledProductDescription>
                {product.description}
              </S.StyledProductDescription>
              {product.cardsRender(product)}
            </S.StyledProductContainer>
          ))}
        </S.StyledProductsContainer>
      </Container>
    </S.StyledContainer>
  );
};

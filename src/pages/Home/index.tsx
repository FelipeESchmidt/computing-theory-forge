import { Container } from "@components/Container";
import { Header } from "@components/Header";
import { useHeaderController } from "@contexts/HeaderProvider";
import { useEffect } from "react";

import { products } from "./constants";
import * as S from "./styles";

export const Home: React.FC = () => {
  const { setSteps } = useHeaderController();

  useEffect(() => {
    setSteps([]);
  }, []);

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

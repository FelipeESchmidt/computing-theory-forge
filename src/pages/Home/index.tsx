import { Container } from "@components/Container";
import { Header } from "@components/Header";
import { useHeaderController } from "@contexts/HeaderProvider";
import { selectLanguage } from "@redux/Language/selectors";
import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";

import { getProducts } from "./constants";
import * as S from "./styles";

export const Home: React.FC = () => {
  const { setSteps } = useHeaderController();
  const { texts } = useSelector(selectLanguage);

  const products = useMemo(() => getProducts(texts), [texts]);

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

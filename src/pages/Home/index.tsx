import { Card } from "@components/Card";
import { Container } from "@components/Container";
import { Header } from "@components/Header";
import { FaPlusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { products } from "./constants";
import * as S from "./styles";

export const Home: React.FC = () => {
  const navigate = useNavigate();

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
              <S.StyledProductCards>
                <Card onClick={() => navigate(product.path)}>
                  <S.StyledCardContainer>
                    <S.StyledNewIcon>
                      <FaPlusCircle />
                    </S.StyledNewIcon>
                    <S.StyledProductTitle>Nova</S.StyledProductTitle>
                  </S.StyledCardContainer>
                </Card>
              </S.StyledProductCards>
            </S.StyledProductContainer>
          ))}
        </S.StyledProductsContainer>
      </Container>
    </S.StyledContainer>
  );
};

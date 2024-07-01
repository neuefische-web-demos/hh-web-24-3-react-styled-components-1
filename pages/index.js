import styled from "styled-components";
import Link from "next/link";

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  padding: 2rem;
`;

const Button = styled.button`
  border: none;
  cursor: pointer;
  padding: 1rem;
  color: white;
  background-color: var(--primary-color);
  font-family: var(--font-electrolize);

  &:hover {
    color: black;
    background-color: var(--primary-background);
  }
`;

const StyledLink = styled(Link)`
  font-weight: 700;
  text-decoration: none;
  color: var(--primary-color);
  font-family: var(--font-roboto);

  &:hover {
    color: var(--secondary-color);
  }
`;

export default function HomePage() {
  return (
    <Wrapper>
      <Button>Click me</Button>
      <Button>Or me</Button>
      <p>
        This is a <StyledLink href="/">styled link</StyledLink>.
      </p>
    </Wrapper>
  );
}

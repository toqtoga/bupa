import styled from "styled-components";

export const Button = styled.button`
  padding: 0.5rem;
  font-size: 0.9rem;
  font-weight: bold;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  @media (max-width: 600px) {
    width: 200px;
    margin-bottom: 0.5rem;
  }
`;
export const ButtonBlue = styled(Button)`
  background-color: var(--color-primary);
  color: white;
  border: none;
`;

export const ButtonPlain = styled(Button)`
  padding: 0;
  background-color: transparent;
  color: var(--color-primary);
  text-decoration: underline;
`;

export const ButtonError = styled(Button)`
  padding: 0;
  background-color: transparent;
  color: var(--color-primary);
  text-decoration: underline;
  width: fit-content;
`;

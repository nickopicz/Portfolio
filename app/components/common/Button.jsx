import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.accentBlue};
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-transform: uppercase;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentCoral};
  }
`;

export default function HomePage() {
    return (
        <div style={{ backgroundColor: theme.colors.neutralLight, color: theme.colors.neutralDark }}>
            <h1 style={{ color: theme.colors.accentBlue }}>Welcome to My Portfolio</h1>
            <Button>Call to Action</Button>
        </div>
    );
}

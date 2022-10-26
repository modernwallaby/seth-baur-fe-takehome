import styled from "styled-components";
import Header from "./components/Header";
import Container from "./components/Container";

const PageContent = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
  font-family: Verdana, sans-serif;
`;

function App() {
  return (
    <PageContent>
      <Header />
      <Container bgColor="rgb(240, 242, 248)">
        <p>Page content</p>
      </Container>
    </PageContent>
  );
}

export default App;
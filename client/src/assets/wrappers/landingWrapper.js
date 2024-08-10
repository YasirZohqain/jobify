import styled from 'styled-components';

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: var(--nav-height);
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -5rem;
  }
  h1 {
    font-weight: 700;
  }
  span{
    color: var(--grey-600)
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
  .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3;
  }
  .main-img {
    display: block;
  }

  }

`;


export default Wrapper
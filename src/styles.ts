import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#FFFFFF',
  rose: '#E66767',
  bege: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
  text-decoration: none;
  list-style: none;
  font-family: 'Roboto', sans-serif;
}


body {
  background-color: ${cores.branca};
  color: ${cores.rose};
}

.container {
width: 100%;
margin: 0 auto;
overflow-x: hidden;

}

.ContainerBotao {
  padding: 8px;
}
`

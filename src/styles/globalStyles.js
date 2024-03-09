import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        /* margin: 0; */
        box-sizing: border-box; 
        /*
        content-box (padrão): Neste modelo, o tamanho total do elemento é calculado considerando apenas o conteúdo (content). 
        Ou seja, o tamanho definido para o elemento não inclui o preenchimento (padding) e a borda (border). 
        Qualquer padding ou border adicionado ao elemento aumentará o seu tamanho total.
        
        border-box: Neste modelo, o tamanho total do elemento é calculado incluindo o preenchimento (padding) e a borda (border). 
        Ou seja, o tamanho definido para o elemento já inclui o espaço ocupado pelo preenchimento e pela borda. 
        Dessa forma, o tamanho do conteúdo é ajustado automaticamente para caber dentro do espaço disponível após a aplicação do preenchimento e da borda.
        */
        font-family: 'Roboto', sans-serif;
    }
    `;

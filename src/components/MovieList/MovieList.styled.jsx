import styled from 'styled-components';


export const Wraper = styled.div`
width: 250px;
transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
      transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
:hover{
    transform: scale(1.035);
      box-shadow: 2px 2px 3px 3px rgb(255 107 8 / 50%);
      
}
`;

export const Title = styled.h3`
    padding: 5px;
`
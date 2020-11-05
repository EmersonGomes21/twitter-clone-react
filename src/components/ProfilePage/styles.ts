import styled, {css} from 'styled-components';
import {LocationOn, Cake} from '../../styles/Icons';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  overflow-y: auto;
  scrollbar-width:none; /* Firefox */
  ::-webkit-scrollbar{
   display: none; /* Chrome */
  }
`;


    export const Banner  = styled.div`
    flex-shrink: 0;
    width: 100%;
    height: min(33vw, 199px);
    background:  var(--twitter);
    position: relative;
    `;
    export const Avatar  = styled.div`
    width: max(45px,min(135px, 22vw) );
    height: max(45px,min(135px, 22vw) );
    border: 3.75px solid var(--primary);
    background: var(--gray); 
    border-radius: 50%;
    position: absolute; /*Só funciona se o pai tiver  relative */
    bottom: max(-60px, -10vh);
    left: 15px;

    `;
    export const ProfileData  = styled.div`
    padding: min(calc(10vw + 7px), 67px) 16px 0;
    display: flex;
    flex-direction: column;
    position: relative;
    >h1{
      font-weight: bold;
      font-size: 19px;
    }

    > h2 {
      font-weight: normal;
      font-size: 15px;
      color: var(--gray);
    }
    > p {
      font-size: 15px;
      margin-top: 11px;
    }

    > a {
      text-decoration: none;
      color: var(--twitter);
    }

    `;

    const iconCss = css`
    width: 20px;
    height: 20px;
    color: var(--gray);
    `;
    export const LocationIcon  = styled(LocationOn)`
    ${iconCss}
    `;
    export const  CakeIcon  = styled(Cake)`
    ${iconCss}
    `;
    export const Followage  = styled.div`
    `;
       
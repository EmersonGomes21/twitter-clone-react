import styled from 'styled-components';
import Button from '../Button';

export const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;


>div {
  display: flex;
  align-items: center;
}
`;


  export const Avatar  = styled.div`
  width: 49px;
  height: 49px;
  background: var(--gray);
  border-radius: 50%;
  margin-right: 10px;

  
  `;
  export const  Info  = styled.div`
  display: flex;
  flex-direction: column;
  transition: all ease-in-out 2s;
  cursor: pointer;
  
  > strong{
    font-size: 14px;
    color: var(--gray);

    &:hover{
    font-size: 15px;
}

  }

   > span{
    font-size: 14px;
    color: var(--gray);

    &:hover{
      color: var(--twitter);
    }

  }


 
  
  `;


  export const  FollowButton  = styled(Button)`
  padding: 6px 17px;

  &:hover{
    background: var(--twitter-dark-hover);
  }
  
  `;

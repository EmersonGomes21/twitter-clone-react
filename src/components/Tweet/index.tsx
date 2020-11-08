import React from 'react';

import { 
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
 } from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar >
        <img src="https://raw.githubusercontent.com/EmersonGomes21/keepalive-challenge-uol/master/public/faviconUol.png"/>
        </Avatar>
        <Content>
          <Header>
            <strong>Compasso UOL</strong>
            <span>@compassouol</span>
            <Dot />
            <time>27 de jun</time>
          </Header>

          <Description>Foguete não tem ré 🚀</Description>

          <ImageContent />
          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>

            <Status>
              <RetweetIcon />
              18
            </Status>

            <Status>
              <LikeIcon />
              999
            </Status>

          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;

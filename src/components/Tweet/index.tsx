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
        <Avatar />

        <Content>
          <Header>
            <strong>Gabriel Gigante</strong>
            <span>@gagigante</span>
            <Dot />
            <time>15 de jul</time>
          </Header>

          <Description>Loren ipsum</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              99
            </Status>
            <Status>
              <RetweetIcon />
              99
            </Status>
            <Status>
              <LikeIcon />
              99
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;
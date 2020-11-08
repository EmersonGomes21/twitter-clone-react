import React from 'react';
import Button from '../Button';
import {
  Container,
  TopSide,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  BotSide,
  Avatar,
  ProfileData,
  ExitIcon
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <TopSide>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButton>

        <MenuButton className="active">
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <Button>
          <span>Tweetar</span>
        </Button>

      </TopSide>

      <BotSide>

        <Avatar>

        <img src="https://avatars0.githubusercontent.com/u/58889400?s=100&u=68963b922b8152428624ffd8ffd461193f72582d&v=4" alt="image profile"/>
        </Avatar>

        <ProfileData>
          <strong>Emerson Gomes</strong>
          <span> @emerson_gomes </span>
        </ProfileData>

        <ExitIcon/>

      </BotSide>
    </Container>
  );
};

export default MenuBar;

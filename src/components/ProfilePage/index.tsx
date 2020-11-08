import React from 'react';
import Feed from '../Feed';
import { Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton

  
  } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
      <Avatar>
        <img src="https://avatars0.githubusercontent.com/u/58889400?s=100&u=68963b922b8152428624ffd8ffd461193f72582d&v=4" alt="image profile"/>
      </Avatar>
      </Banner>
        

        <ProfileData>
          <EditButton outlined>Editar perfil</EditButton>

          <h1>Emerson Gomes</h1>
          <h2>@emersongr7</h2>
          <p>
            Developer Front-End - React.js{' '}
            <a href="https://compasso.com.br">@compassouol</a>
          </p>

          <ul>
            <li>
              <LocationIcon />
              Augusto Corrêa, PA, BR
            </li>

            <li>
              <CakeIcon />
              Nascido(a) em 29 de dezembro de 1998 
            </li>
          </ul>

          <Followage>
            <span>
              seguindo <strong>94 </strong>
            </span>

            <span>
             
              <strong> 1000 </strong> seguidores
            </span>
          </Followage>
        </ProfileData>

        <Feed/>
      
    </Container>
  );
};

export default ProfilePage;

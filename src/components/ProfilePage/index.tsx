import React from 'react';

import { Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage

  
  } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
      <Avatar />
      </Banner>
        

        <ProfileData>
          {/* <EditButton outlined>Editar perfil</EditButton> */}

          <h1>Emerson Gomes</h1>
          <h2>@emersongr7</h2>
          <p>
            Developer Front-End - React.js{' '}
            <a href="https://comapasso.com.br">Compasso UOL</a>
          </p>

          <ul>
            <li>
              <LocationIcon />
              Augusto Corrêa, PA, BR
            </li>

            <li>
              <CakeIcon />
              Nascido(a) em 21 de junho de 2001
            </li>
          </ul>

          <Followage>
            <span>
              seguindo <strong>94 </strong>
            </span>

            <span>
              {' '}
              <strong> 1000 </strong> seguindo{' '}
            </span>
          </Followage>
        </ProfileData>
      
    </Container>
  );
};

export default ProfilePage;

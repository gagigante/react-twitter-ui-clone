import React from 'react';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles';

import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Gabriel Gigante</h1>
        <h2>@gagigante</h2>

        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brazil
          </li>

          <li>
            <CakeIcon />
            Nascido(a) em 29 de maio de 2001
          </li>
        </ul>

        <Followage>
          <span>
            Seguindo <strong>99</strong>
          </span>
          <span>
            <strong>99 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}

export default ProfilePage;
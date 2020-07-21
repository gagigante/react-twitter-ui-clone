import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSugestions from '../FollowSugestions';
import News from '../News';

import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from './styles';

const Sidebar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>


      <StickyBox>
        <Body>
          <List title="Talvez você curta" elements={[
            <FollowSugestions 
              name="Gabriel Gigante"
              nickname="@gagigante"
            />,
            <FollowSugestions 
              name="Gabriel Gigante"
              nickname="@gagigante"
            />,
            <FollowSugestions 
              name="Gabriel Gigante"
              nickname="@gagigante"
            />,
            <FollowSugestions 
              name="Gabriel Gigante"
              nickname="@gagigante"
            />
          ]}/>

          <List title="Talvez você curta" elements={[
            <News />,
            <News />,
            <News />
          ]}/>
        </Body>
      </StickyBox>
    </Container>
  );
}

export default Sidebar;
import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import { useAuth } from '../../../hooks/auth';

import logoImg from '../../../assets/images/logo.svg';
import { Container, HeaderContent, Profile } from './styles';

const Header: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <HeaderContent>
        <img src={logoImg} alt="GoBarber" />

        <Profile>
          <img src={user.avatar_url} alt="Felipe Decome" />

          <div>
            <span>Bem-vindo,</span>
            <Link to="/profile" title="Ver meu perfil">
              <strong>{user.name}</strong>
            </Link>
          </div>
        </Profile>

        <button title="Sair" type="button" onClick={signOut}>
          <FiPower />
        </button>
      </HeaderContent>
    </Container>
  );
};

export default Header;

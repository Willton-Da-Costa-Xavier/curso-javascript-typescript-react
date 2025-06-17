import styled from 'styled-components';
import * as colors from '../../config/colors';

export const AlunoContainer = styled.div`
margin-top:20px;

div{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0px;
}

div + div{
  border-top: 1px solid #eee;
}

a{
  color: ${colors.primaryDarkColor};
}

`;

export const ProfilePicture = styled.div`

img{
  width: 36px;
  height: 36px;
  border-radius: 50%;
}

`;

import styled from 'styled-components';
import { Delete } from '@styled-icons/fluentui-system-filled/Delete';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 16px;
  border-radius: 50px;
  border: 10px solid transparent;
  background: linear-gradient(190deg, #9c9f9a, #804fb2) border-box;
  border-radius: 30px;
`;

export const Image = styled.img`
  margin-top: 50px;
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8%;
  padding: 15px;
`;

export const TitleDate = styled.h4`
  color: #4b3461;
  margin: 18px;
`;

export const Description = styled.h1`
  color: #4b3461;
  margin: 18px;
  font-weight: 900;
`;

export const ButtonContainer = styled.button`
  display: flex;
  margin: 10px;
  background: none;
  background-size: cover;
  border: none;
  cursor: pointer;
`;

export const DeleteButton = styled(Delete)`
  margin-left: auto;
  margin-right: 0;
  width: 35px;
  height: 30px;
  color: #fff;
  &:hover {
    color: #8b00ff;
  }
`;

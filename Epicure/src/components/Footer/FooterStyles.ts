import styled from "styled-components";
import colors from "../../data/colors";

export const MidFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  padding: 20px;
  @media (min-width: 1200px) {
    width: 100%;
    padding-left: 132px;
    margin-bottom: 0;
  }
`;

export const FooterContainer = styled.div`
  width: 100%;
  background: ${colors.lightGray};
  //border: 5px solid darkblue;
  @media (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const SepContainer = styled.div`
  @media (min-width: 1200px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ContentContainer = styled.div`
  @media (min-width: 1200px) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
  }
`;

export const LogoContainer = styled.div`
  padding-bottom: 20px;
  @media (min-width: 1200px) {
    padding-left: 350px;
    padding-top: 300px;
    order: 2;
    width: 178.22px;
    height: 166px;
    display: flex;
    align-items: flex-end;
  }
`;

export const Logo = styled.img`
  width: 102px;
  height: 95px;
  @media (min-width: 1200px) {
    position: static;
    left: 1133px;
    order: 4;
    width: 178.22px;
    height: 166px;
    margin-right: 20px;
  }
`;

export const DownLoadContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  @media (min-width: 1200px) {
    order: 3;
  }
`;

export const DownLoad = styled.img`
  width: 180px;
  height: 52px;
`;

export const DownLoadButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0px;
  margin: 0px;
  width: 180px;
`;

export const Title = styled.h3`
  font-family: Helvetica Neue;
  font-size: 18px;
  font-weight: 200;
  line-height: 35px;
  letter-spacing: 1.25px;
  text-align: left;
  margin-top: 20px;
  @media (min-width: 1200px) {
    font-size: 30px;
    order: 1;
    width: auto;
  }
`;

export const Description = styled.p`
  font-family: Helvetica Neue;
  font-size: 18px;
  font-weight: 200;
  line-height: 28px;
  letter-spacing: 2.14px;
  text-align: left;
  width: 306px;
  height: auto;

  @media (min-width: 1200px) {
    order: 2;
    font-size: 20px;
    width: 569px;
    height: auto;
  }
`;

export const MenuContainer = styled.div`
  width: 100%;
  height: 202px;
  background: ${colors.white};
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: auto;
    margin-top: 0;
    gap: 30px;
    padding: 20px;
  }
`;
export const MenuItem = styled.button`
  font-family: Helvetica Neue;
  font-size: 18px;
  font-weight: 200;
  line-height: 21.76px;
  letter-spacing: 1.9199999570846558px;
  text-align: left;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

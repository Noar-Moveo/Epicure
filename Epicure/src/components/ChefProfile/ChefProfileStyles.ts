import styled from "styled-components";
import colors from "../../data/colors";

export const ChefProfileContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 98px;
  //border: 5px solid red;
  justify-content: center;
  align-items: center;
  @media (min-width: 1200px) {
    margin-top: 80px;
    align-items: center;
    padding-left: 127px;
    padding-right: 127px;
    align-self: center;
  }
`;

export const ChefBio = styled.p`
  padding-top: 20px;
  font-family: "Helvetica Neue", sans-serif;
  font-size: 18px;
  font-weight: 200;
  line-height: 28px;
  letter-spacing: 1.25px;

  @media (min-width: 1300px) {
    padding-top: 17px;
    width: 642px;
    height: 255px;
    font-size: 24px;
    line-height: 35px;
  }
`;
export const Title = styled.h2`
  position: absolute;
  font-family: "Helvetica Neue", sans-serif;
  font-size: 18px;
  font-weight: 200;
  line-height: 35px;
  letter-spacing: 1.25px;
  align-self: flex-start;
  left: 50%;
  transform: translateX(-166px);
  margin-bottom: 950px;
  //border: 5px solid pink;
  @media (min-width: 900px) {
    position: relative;
    transform: translateX(0);

    left: 0%;
    font-size: 30px;
    line-height: 35px;
    text-align: center;
    align-self: center;
    margin-bottom: 40px;
  }
`;

export const ChefInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 335px;
  height: auto;
  //border: 5px solid pink;
  margin-bottom: 48px;

  @media (min-width: 900px) {
    width: auto;
    flex-direction: row;
    padding-bottom: 45px;
    justify-content: center;
  }
`;

export const CardImageContainer = styled.div`
  position: relative;
  height: 262px;
  width: 335px;
  display: flex;
  justify-content: center;

  @media (min-width: 900px) {
    height: 372px;
    width: 478px;
    margin-right: 63.5px;
  }
`;

export const CardImage = styled.img`
  height: auto;
  width: 335px;
  object-fit: cover;
  filter: grayscale(100%);
  @media (min-width: 900px) {
    height: 372px;
    width: 478px;
  }
`;

export const NameOnImage = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 51px;
  //border: 5px solid darkblue;
  background: ${colors.white}cc;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.black};
  font-family: "Helvetica Neue", sans-serif;
  font-size: 18px;
  letter-spacing: 2.67px;
  font-weight: 400;
  text-align: center;
  @media (min-width: 900px) {
    height: 78px;
    font-size: 40px;
  }
`;

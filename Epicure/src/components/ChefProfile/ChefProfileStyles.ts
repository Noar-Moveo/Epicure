import styled from "styled-components";
import colors from "../../data/colors";

export const ChefProfileContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  align-items: center;
  //border: 5px solid red;
  padding-bottom: 1150px;
  @media (max-width: 1200px) {
    padding-bottom: 1030px;
  }
`;

export const ChefBio = styled.p`
  padding-top: 20px;
  width: 335px;
  height: 252px;
  font-family: "Helvetica Neue", sans-serif;
  font-size: 18px;
  font-weight: 200;
  line-height: 28px;
  letter-spacing: 1.25px;
  text-align: justify;
  margin-bottom: 52px;
  @media (min-width: 1200px) {
    width: 642px;
    height: 255px;
    font-size: 24px;
    line-height: 35px;
  }
`;

export const Title = styled.h2`
  font-family: "Helvetica Neue", sans-serif;
  font-size: 18px;
  font-weight: 200;
  line-height: 35px;
  letter-spacing: 1.25px;
  align-self: flex-start;
  margin-bottom: 17px;
  //border: 5px solid pink;
  padding-left: 20px;
  @media (min-width: 900px) {
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
  width: 100%;
  justify-content: center;
  //border: 5px solid pink;
  align-items: center;
  @media (min-width: 900px) {
    flex-direction: row;
    padding-bottom: 60px;
  }
`;

export const CardImageContainer = styled.div`
  position: relative;
  height: 262px;
  width: 335px;
  display: flex;
  justify-content: center;
  align-items: center;
  //border: 5px solid darkblue;
  @media (min-width: 900px) {
    height: 372px;
    width: 478px;
    margin-right: 63.5px;
  }
`;

export const CardImage = styled.img`
  height: 262px;
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
  background: ${colors.white}cc;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.black};
  font-family: "Helvetica Neue", sans-serif;
  font-size: 18px;
  font-weight: 400px;
  text-align: center;
`;

export const CaoruselChef = styled.div`
  @media (min-width: 1200px) {
    height: 472px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    padding-left: 145px;
  }
`;

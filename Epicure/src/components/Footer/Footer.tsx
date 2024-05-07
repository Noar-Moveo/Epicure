import {
  FooterContainer,
  Logo,
  Title,
  Description,
  DownLoad,
  DownLoadContainer,
  MenuItem,
  MenuContainer,
  MidFooterContainer,
  ContentContainer,
  LogoContainer,
  SepContainer,
  DownLoadButton,
} from "./FooterStyles";
import { DescriptionTest } from "../../data/resources";
import LogoImg from "../../assets/Icons/LogoFooter.svg";
import DownloadGoogle from "../../assets/Icons/DownloadGoogle.png";
import DownloadApp from "../../assets/Icons/DownloadApp.png";
import { menuItems } from "../../data/Menu";

const Footer = () => {
  return (
    <FooterContainer>
      <MidFooterContainer>
        <SepContainer>
          <LogoContainer>
            <Logo src={LogoImg} alt="Logo" />
          </LogoContainer>
          <ContentContainer>
            <DownLoadContainer>
              <DownLoadButton>
                <DownLoad src={DownloadGoogle} />
              </DownLoadButton>
              <DownLoadButton>
                <DownLoad src={DownloadApp} />
              </DownLoadButton>
            </DownLoadContainer>
            <Title>ABOUT US:</Title>
            <Description>{DescriptionTest}</Description>
          </ContentContainer>
        </SepContainer>
      </MidFooterContainer>
      <MenuContainer>
        {menuItems.map((item, index) => (
          <MenuItem key={index}>{item}</MenuItem>
        ))}
      </MenuContainer>
    </FooterContainer>
  );
};

export default Footer;

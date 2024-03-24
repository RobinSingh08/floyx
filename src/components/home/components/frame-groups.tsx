import type { NextPage } from "next";
import styled from '@emotion/styled'
  ;

const FrameGroupsChild = styled.div`
  height: 383px;
  width: 1440px;
  position: relative;
  background-color: #0b081e;
  display: none;
  max-width: 100%;
`;
const GroupIcon = styled.img`
  height: 37.6px;
  width: 32.4px;
  position: relative;
`;
const GroupIcon1 = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
`;
const SocialFiMarketplace = styled.img`
  position: absolute;
  top: 0.2px;
  left: 111.2px;
  width: 12.2px;
  height: 11.4px;
  z-index: 1;
`;
const LinksColumn = styled.div`
  align-self: stretch;
  height: 27.2px;
  position: relative;
`;
const VectorInstance = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 3.2000000000007276px 0px;
`;
const Group = styled.div`
  width: 168.9px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 13.2px;
  z-index: 5;
`;
const Products = styled.div`
  position: relative;
  line-height: 18.72px;
  text-transform: uppercase;
  font-weight: 500;
`;
const Launchpad = styled.p`
  margin: 0;
`;
const LaunchpadSocialfiMarketplaceContainer = styled.div`
  position: relative;
  font-size: 15px;
  line-height: 30px;
  color: #848895;
`;
const ProductMenu = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 13px 0px;
  min-width: 95px;
  max-width: 97px;
`;
const CompanyHub = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 13px 0px;
  min-width: 100px;
  max-width: 102px;
`;
const BlogFaqSupportContainer = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 15px;
  line-height: 30px;
  color: #848895;
`;
const RegisterWithEmailOnlyMains = styled.div`
  width: 825px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0px 80px;
  max-width: 100%;
  z-index: 5;
  @media screen and (max-width: 1150px) {
    gap: 0px 40px;
  }
  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 450px) {
    gap: 0px 20px;
  }
`;
const FrameGroupsRoot = styled.footer`
  align-self: stretch;
  background-color: #0b081e;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 68px 117px 73px 141px;
  box-sizing: border-box;
  max-width: 100%;
  gap: 20px;
  z-index: 4;
  text-align: left;
  font-size: 16px;
  color: #fff;
  font-family: Poppins;
  @media screen and (max-width: 1350px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 800px) {
    padding-left: 70px;
    padding-right: 58px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding: 44px 20px 47px;
    box-sizing: border-box;
  }
`;

const FrameGroups: NextPage = () => {
  return (
    <FrameGroupsRoot>
      <FrameGroupsChild />
      <Group>
        <GroupIcon loading="lazy" alt="" src="/group.svg" />
        <VectorInstance>
          <LinksColumn>
            <GroupIcon1 alt="" src="/group-1.svg" />
            <SocialFiMarketplace alt="" src="/vector-4.svg" />
          </LinksColumn>
        </VectorInstance>
      </Group>
      <RegisterWithEmailOnlyMains>
        <ProductMenu>
          <Products>Products</Products>
          <LaunchpadSocialfiMarketplaceContainer>
            <Launchpad>{`Launchpad `}</Launchpad>
            <Launchpad>{`SocialFi `}</Launchpad>
            <Launchpad>{`Marketplace `}</Launchpad>
            <Launchpad>NFT Airdrops</Launchpad>
            <Launchpad>{`DEX Buy `}</Launchpad>
            <Launchpad>Floyx Tokens</Launchpad>
          </LaunchpadSocialfiMarketplaceContainer>
        </ProductMenu>
        <CompanyHub>
          <Products>Company</Products>
          <LaunchpadSocialfiMarketplaceContainer>
            <Launchpad>Brand Assets</Launchpad>
            <Launchpad>Partners</Launchpad>
          </LaunchpadSocialfiMarketplaceContainer>
        </CompanyHub>
        <CompanyHub>
          <Products>Resources</Products>
          <BlogFaqSupportContainer>
            <Launchpad>Blog</Launchpad>
            <Launchpad>FAQ</Launchpad>
            <Launchpad>Support</Launchpad>
          </BlogFaqSupportContainer>
        </CompanyHub>
        <CompanyHub>
          <Products>Social</Products>
          <BlogFaqSupportContainer>
            <Launchpad>Twitter</Launchpad>
            <Launchpad>Telegram</Launchpad>
            <Launchpad>Discord</Launchpad>
            <Launchpad>Instagram</Launchpad>
            <Launchpad>Facebook</Launchpad>
            <Launchpad>TikTok</Launchpad>
            <Launchpad>YouTube</Launchpad>
          </BlogFaqSupportContainer>
        </CompanyHub>
        <CompanyHub>
          <Products>Legal</Products>
          <BlogFaqSupportContainer>
            <Launchpad>Terms</Launchpad>
            <Launchpad>Privacy</Launchpad>
            <Launchpad>Cookies</Launchpad>
          </BlogFaqSupportContainer>
        </CompanyHub>
      </RegisterWithEmailOnlyMains>
    </FrameGroupsRoot>
  );
};

export default FrameGroups;
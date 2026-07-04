import HeaderPortfolio from "@/layouts/headers/HeaderPortfolio";
import Wrapper from "@/layouts/Wrapper";
import HeroSection from "./HeroSection";
import FeatureStrip from "./FeatureStrip";
import AboutEnterprise from "./AboutEnterprise";
import ExpertiseGrid from "./ExpertiseGrid";
import FeaturedSoftwareSection from "./FeaturedSoftwareSection";
import EnterpriseProjects from "./EnterpriseProjects";
import ClientProjects from "./ClientProjects";
import ExperienceTimeline from "./ExperienceTimeline";
import SkillsGrid from "./SkillsGrid";
import FAQSection from "./FAQSection";
import CertificationSection from "./CertificationSection";
import CTASection from "./CTASection";
import FooterPortfolio from "./FooterPortfolio";
import PortfolioAnimationFix from "./PortfolioAnimationFix";

export default function HomeFour() {
  return (
    <Wrapper>
      <HeaderPortfolio />
      <PortfolioAnimationFix />
      <div id="smooth-wrapper">
        <div id="smooth-content" className="portfolio-dark">
          <HeroSection />
          <FeatureStrip />
          <AboutEnterprise />
          <ExpertiseGrid />
          <FeaturedSoftwareSection />
          <EnterpriseProjects />
          <ClientProjects />
          <ExperienceTimeline />
          <SkillsGrid />
          <FAQSection />
          <CertificationSection />
          <CTASection />
          <FooterPortfolio />
        </div>
      </div>
    </Wrapper>
  );
}

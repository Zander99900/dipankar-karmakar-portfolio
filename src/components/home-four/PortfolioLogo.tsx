import { profile } from "@/data/profile";

interface PortfolioLogoProps {
  className?: string;
}

export default function PortfolioLogo({ className = "" }: PortfolioLogoProps) {
  const [firstName, ...lastNameParts] = profile.name.split(" ");
  const lastName = lastNameParts.join(" ");

  return (
    <span className={`portfolio-text-logo ${className}`.trim()}>
      <span className="portfolio-text-logo-mark" aria-hidden="true">
        DK
      </span>
      <span className="portfolio-text-logo-name">
        {firstName}
        {lastName ? <span className="portfolio-text-logo-surname"> {lastName}</span> : null}
      </span>
    </span>
  );
}

interface PortfolioMenuItem {
  title: string;
  path: string;
  download?: boolean;
}

const portfolio_menu_data: PortfolioMenuItem[] = [
  { title: "Home", path: "#home" },
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Experience", path: "#experience" },
  // { title: "Skills", path: "#skills" },
  { title: "Resume", path: "/assets/images/dipankar_karmakar_resume.pdf", download: true },
  { title: "Contact", path: "#contact" },
];

export default portfolio_menu_data;

import { expertiseItems } from "@/data/portfolio-data";

const expertiseIcons = [
  <svg key="1" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 70 70" fill="none" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M35 8.70058L23.3333 0V23.3333H0L8.70058 35L1.01993e-06 46.6665H23.3333V23.3333H36.6665V0L35 8.70058ZM61.2994 35L70 23.3334H36.6665V46.6665H23.3333V70L35 61.2994L46.6665 70V46.6665H70L61.2994 35Z" fill="currentColor" />
  </svg>,
  <svg key="2" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 70 70" fill="none" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M0 55.4417C16.155 50.3359 19.6652 53.8457 14.5591 70C23.9937 53.8457 46.0065 53.8457 55.441 70C50.3384 53.8457 53.8489 50.3359 70 55.4417C53.8489 46.0075 53.8489 23.9961 70 14.5621C53.8489 19.6641 50.3384 16.1541 55.441 0C46.0065 16.1541 23.9937 16.1541 14.5591 0C19.6652 16.1541 16.155 19.6641 0 14.5621C16.155 23.9961 16.155 46.0075 0 55.4417ZM35 47.95C42.1522 47.95 47.95 42.1522 47.95 35C47.95 27.8479 42.1522 22.05 35 22.05C27.8479 22.05 22.05 27.8479 22.05 35C22.05 42.1522 27.8479 47.95 35 47.95Z" fill="currentColor" />
  </svg>,
  <svg key="3" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 70 70" fill="none" aria-hidden="true">
    <path d="M54.6224 50.3776L39.2444 35L54.6224 19.6223L70 35L54.6224 50.3776ZM15.3777 50.3776L0 35L15.3777 19.6223L30.7555 35L15.3777 50.3776ZM35 70L19.6223 54.6224L35 39.2444L50.3776 54.6224L35 70ZM35 30.7555L19.6223 15.3777L35 0L50.3776 15.3777L35 30.7555Z" fill="currentColor" />
  </svg>,
  <svg key="4" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 70 70" fill="none" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M20.5299 51.7242C20.0703 50.7306 19.2695 49.9298 18.2757 49.4699C10.5407 45.8923 4.42168 40.733 1.15547 37.639C-0.385161 36.1796 -0.385154 33.8204 1.15547 32.3609C4.42168 29.2668 10.5407 24.1076 18.2757 20.53C19.2695 20.0703 20.0703 19.2695 20.5299 18.2757C24.1076 10.5407 29.2668 4.42168 32.3609 1.15547C33.8204 -0.385159 36.1796 -0.385155 37.639 1.15547C40.733 4.42168 45.8923 10.5407 49.4699 18.2757C49.9298 19.2695 50.7306 20.0703 51.7242 20.5299C59.4594 24.1076 65.5784 29.2668 68.8445 32.3609C70.3852 33.8204 70.3852 36.1796 68.8445 37.639C65.5784 40.733 59.4594 45.8923 51.7242 49.4699C50.7306 49.9298 49.9298 50.7306 49.4699 51.7242C45.8923 59.4594 40.733 65.5784 37.639 68.8445C36.1796 70.3852 33.8204 70.3852 32.3609 68.8445C29.2668 65.5784 24.1076 59.4594 20.5299 51.7242ZM35.0001 47.8655C42.1053 47.8655 47.8655 42.1053 47.8655 35.0001C47.8655 27.8946 42.1053 22.1345 35.0001 22.1345C27.8946 22.1345 22.1346 27.8946 22.1346 35.0001C22.1346 42.1053 27.8946 47.8655 35.0001 47.8655Z" fill="currentColor" />
  </svg>,
  <svg key="5" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 70 70" fill="none" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M35 8.70058L23.3333 0V23.3333H0L8.70058 35L1.01993e-06 46.6665H23.3333V23.3333H36.6665V0L35 8.70058ZM61.2994 35L70 23.3334H36.6665V46.6665H23.3333V70L35 61.2994L46.6665 70V46.6665H70L61.2994 35Z" fill="currentColor" />
  </svg>,
  <svg key="6" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 70 70" fill="none" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M0 55.4417C16.155 50.3359 19.6652 53.8457 14.5591 70C23.9937 53.8457 46.0065 53.8457 55.441 70C50.3384 53.8457 53.8489 50.3359 70 55.4417C53.8489 46.0075 53.8489 23.9961 70 14.5621C53.8489 19.6641 50.3384 16.1541 55.441 0C46.0065 16.1541 23.9937 16.1541 14.5591 0C19.6652 16.1541 16.155 19.6641 0 14.5621C16.155 23.9961 16.155 46.0075 0 55.4417ZM35 47.95C42.1522 47.95 47.95 42.1522 47.95 35C47.95 27.8479 42.1522 22.05 35 22.05C27.8479 22.05 22.05 27.8479 22.05 35C22.05 42.1522 27.8479 47.95 35 47.95Z" fill="currentColor" />
  </svg>,
];

export default function ExpertiseGrid() {
  return (
    <section className="portfolio-section" aria-label="Technical expertise">
      <div className="container">
        <div className="portfolio-section-title" data-aos="fade-left" data-aos-delay="500">
          <h2>Technical Expertise</h2>
        </div>
        <div className="azzle-iconbox-wrapper portfolio-expertise-grid" data-aos="fade-up" data-aos-delay="700">
          <div className="azzle-iconbox-column">
            {expertiseItems.map((item) => (
              <div key={item.title} className="azzle-iconbox-wrap portfolio-card portfolio-expertise-card">
                <div className="azzle-iconbox-icon portfolio-expertise-icon">{expertiseIcons[item.iconIndex - 1]}</div>
                <div className="azzle-iconbox-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import styles from "./style";
import {
  CTA,
  Navbar,
  Billing,
  Business,
  Testimonials,
  CardDeal,
  Client,
  Hero,
  Stats,
  Footer,
} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden ">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className="xl:max-w-[1280px] w-full">
        <Navbar />
      </div>
    </div>
    <div className="flex justify-center items-start bg-primary">
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className="flex justify-center items-start bg-primary sm:px-16 p-6">
      <div className={`${styles.boxWidth} text-orange-600`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Client />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;

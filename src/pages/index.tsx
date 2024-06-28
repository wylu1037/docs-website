import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  const backgroundImage = '/img/blockchain-bg.jpg';
  const headerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "500px",
    color: "white",
  }
  return (
    <header style={headerStyle} className={clsx("", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={"flex text-7xl font-serif justify-center items-center gap-4"}>
          <img src='/img/blockchain.svg' className="h-16" alt='blockchain logo' />
          Blockchain
        </Heading>
        <p className={"text-2xl font-sans font-normal text-white"}>A Virtual Instrument Panel and Home Cockpit Builder for Microsoft Flight Simulator</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

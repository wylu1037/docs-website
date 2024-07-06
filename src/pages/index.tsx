import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import HomeFeature from "@site/src/components/HomeFeature";
import HomeHero from "@site/src/components/HomeHero";
import Footer from "@site/src/components/Footer";
import HomePricing from "@site/src/components/HomePricing";

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />"
        >
            <HomeHero/>
            <main>
                {/*<HomepageFeatures/>*/}
                <HomeFeature/>
                <HomePricing/>
            </main>

            <Footer/>
        </Layout>
    );
}

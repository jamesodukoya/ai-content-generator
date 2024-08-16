import { NextSeo } from 'next-seo';
import FeatureSection from "@/components/feature-section";
import Header from "@/components/header";
import Page from "@/components/page";

export default function Home() {
  return (
    <Page>
      {/* <NextSeo
        title="Ludwig - AI Content Generator"
        description="A TypeScript/Next.js theme that includes everything you need to build amazing landing page!"
      /> */}
        <Header />
        <FeatureSection />
    </Page>
  );
}

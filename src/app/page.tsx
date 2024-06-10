import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <div id="home">
        <Hero />
      </div>
      <div id="services">
        <SectionTitle
          preTitle="NELER YAPIYORUZ?"
          title="Genel Hizmetlerimiz"
        ></SectionTitle>

        <Benefits data={benefitOne} />
        <Benefits imgPos="right" data={benefitTwo} />

        <SectionTitle
          preTitle="VİDEOLU ANLATIM"
          title="Hizmetlerimizi kısa sürede keşifedin"
        ></SectionTitle>

        <Video videoId="tli6PxZZncQ" />
      </div>

      <div id="process">
        <SectionTitle preTitle="SSS" title="Sık Sorulan Sorular">
          Bu bölümde, en sık karşılaşılan sorulara ve cevaplara ulaşabilirsiniz.
          Hizmetlerimiz, ödeme yöntemleri, iade politikası ve daha fazlası
          hakkında detaylı bilgi için buraya göz atın.
        </SectionTitle>
        <Faq />
      </div>

      <div id="team">
        <Testimonials />
      </div>

      {/* <Cta /> */}
    </Container>
  );
}

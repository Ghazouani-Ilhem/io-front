import Banner from '@/components/Banner';
import About from '@/components/About';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Projects from '@/components/Projects';
import Team from '@/components/Team';
import Testimonial from '@/components/Testimonial';
import FAQ from '@/components/FAQ';
import Blog from '@/components/Blog';

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Services />
      <Process />
      <Projects />
      <Team />
      <Testimonial />
      <FAQ />
      <Blog />
    </>
  );
}

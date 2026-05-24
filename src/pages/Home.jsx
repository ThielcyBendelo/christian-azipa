// Assurez-vous que vos imports sont corrects en haut du fichier
import NavbarSecured from '../components/NavbarSecured'; // Ajustez le chemin selon votre projet
import Hero from '../components/Hero';                 // Ajustez le chemin selon votre projet
import FAQSection from '../components/FAQSection';     // Ajustez le chemin selon votre projet
import Footer from '../components/Footer';             // Ajustez le chemin selon votre projet

export default function Home() {
  return (
    <>
      <NavbarSecured />
      <Hero />
      <FAQSection />
      <Footer />
    </>
  );
}

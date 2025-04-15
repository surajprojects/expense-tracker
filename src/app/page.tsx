import Header from "@/components/header";
import Footer from "@/components/footer";
import FirstSection from "@/components/home/firstSection";
import SecondSection from "@/components/home/secondSection";
import ThirdSection from "@/components/home/thirdSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-16 flex-grow">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
      </main>
      <Footer />
    </>
  );
};
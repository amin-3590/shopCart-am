import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import ProductGrid from "@/components/ProductGrid";

export default function Home() {
  return (
    <Container>
      <HomeBanner />
      <div className="py-8">
        <ProductGrid />
      </div>
    </Container>
  );
}

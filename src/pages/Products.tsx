import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import ProductsSection from "@/components/ProductsSection";

const Products = () => {
    return (
        <PageLayout>
            <PageHero
                title="PRODUCTOS"
                subtitle="CUIDADO Y AFTERCARE"
                description="Productos seleccionados para el cuidado óptimo de tus tatuajes y merchandising exclusivo de SDARCK."
            />
            <div className="py-10">
                <ProductsSection />
            </div>
        </PageLayout>
    );
};

export default Products;

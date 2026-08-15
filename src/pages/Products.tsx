import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import ProductsSection from "@/components/ProductsSection";

const Products = () => {
    return (
        <PageLayout>
            <PageHero
                index="04"
                title="PRODUCTOS"
                subtitle="CUIDADO Y AFTERCARE"
                description="Productos seleccionados para el cuidado de tatuajes en blanco y negro, y merchandising exclusivo de Angelux Ink."
            />
            <div className="py-10">
                <ProductsSection />
            </div>
        </PageLayout>
    );
};

export default Products;

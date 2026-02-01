import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface PageLayoutProps {
    children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Header />
            <main className="pt-20">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default PageLayout;

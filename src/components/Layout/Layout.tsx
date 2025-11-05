import React from "react";
import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer";
import { TabProvider } from "../../pages/TabContext";

type LayoutProps = {
    children?: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    return (
        <TabProvider>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100vh",
                    overflow: "hidden",
                    backgroundColor: "black",
                }}
            >
                <Header />
                <main style={{ flex: 1}}>
                    {children}
                </main>
                <Footer />
            </div>
        </TabProvider>
    );
}

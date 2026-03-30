import Navbar from "../components/Navbar";
// Jika kamu punya Footer, import di sini:
// import Footer from "@/components/Footer";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar /> 
      {children}
      {/* <Footer /> */}
    </>
  );
}
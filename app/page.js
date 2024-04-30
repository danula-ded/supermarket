import { Header } from "./Components/Header/header.jsx";
import { MainHeader } from "./Components/MainHeader/main-header.jsx";

export default async function Home() {
  return (
    <main>
      <Header />
      <MainHeader />
    </main>
  );
}

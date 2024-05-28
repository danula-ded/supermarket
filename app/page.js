import { Header } from "./Components/Header/Header.jsx";
import { MainHeader } from "./Components/MainHeader/MainHeader.jsx";

export default async function Home() {
  return (
    <main>
      <Header />
      <MainHeader />
    </main>
  );
}

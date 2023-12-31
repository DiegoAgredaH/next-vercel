import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";



export default function HomePage() {
  return (
    <MainLayout>
      <h1>Home Page</h1>
      <h1 className={"title"}>
        <Link href="/about">Ir a About</Link>
      </h1>
      <p>
        Get started by editing&nbsp;
        <code className={"code"}>src/pages/index.js</code>
      </p>
    </MainLayout>
  );
}

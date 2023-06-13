import Link from "next/link";
import { MainLayout } from "../../components/layouts/MainLayout";

export default function ContactPage() {
  return (
    <MainLayout>
      <h1>Contact Page</h1>
      <h1 className={'title'}>
        <Link href="/">Ir a Home</Link>
      </h1>
      <p>
        Get started by editing&nbsp;
        <code className={'code'}>src/pages/contact.js</code>
      </p>
    </MainLayout>
  );
}
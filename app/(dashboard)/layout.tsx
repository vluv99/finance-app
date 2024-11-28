import Header from "@/components/header";
import { ReactNode, Suspense } from "react";

type Props = {
  children: ReactNode;
};

function DashboardLayout({ children }: Props) {
  return (
    <>
      <Suspense>
        <Header />
        <main className="px-3 lg:px-14">{children}</main>
      </Suspense>
    </>
  );
}
export default DashboardLayout;

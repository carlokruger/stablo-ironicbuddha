import { Suspense } from "react";
import Container from "@/components/container";
import Archive from "./archive";
import Loading from "@/components/loading";

export const dynamic = "force-dynamic";

export default async function ArchivePage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  return (
    <>
      <Container className="relative">
        <h1 className="text-center text-3xl font-semibold tracking-tight lg:text-4xl lg:leading-snug dark:text-white">
          music
        </h1>
        <div className="text-center">
          <p className="mt-2 text-lg">here is all my music</p>
        </div>
        <Suspense
          key={resolvedSearchParams.page || "1"}
          fallback={<Loading />}>
          <Archive searchParams={resolvedSearchParams} />
        </Suspense>
      </Container>
    </>
  );
}

export const revalidate = 60;

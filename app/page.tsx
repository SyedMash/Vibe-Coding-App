import { Suspense } from "react";

import { getQueryClient, trpc } from "@/trpc/server";
import { HydrationBoundary } from "@tanstack/react-query";

import Client from "@/components/Client";

export default async function Home() {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpc.createAi.queryOptions({ text: "Mashhood PREFETCH" })
  );

  return (
    <HydrationBoundary>
      <Suspense fallback={<p>Loading...</p>}>
        <Client />
      </Suspense>
    </HydrationBoundary>
  );
}

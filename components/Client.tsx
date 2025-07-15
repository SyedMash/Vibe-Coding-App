"use client";

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

const Client = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(
    trpc.createAi.queryOptions({ text: "Mashhood PREFETCH" })
  );

  return (
    <div className="h-screen bg-black text-red-500">{JSON.stringify(data)}</div>
  );
};

export default Client;

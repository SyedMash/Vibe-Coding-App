"use client";

import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Home() {
  const trpc = useTRPC();
  const invoke = useMutation(
    trpc.invoke.mutationOptions({
      onSuccess: () => {
        toast.success("Background job started", { position: "top-center" });
      },
    })
  );

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <Button
        className="cursor-pointer"
        disabled={invoke.isPending}
        onClick={() => invoke.mutate({ text: "Mashhood" })}
      >
        Invoke Background Job
      </Button>
    </div>
  );
}

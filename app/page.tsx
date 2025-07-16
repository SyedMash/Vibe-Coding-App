"use client";

import { useState } from "react";

import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [value, setValue] = useState("");

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
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <Button
        className="cursor-pointer"
        disabled={invoke.isPending}
        onClick={() => invoke.mutate({ value: value })}
      >
        Invoke Background Job
      </Button>
    </div>
  );
}

"use client";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";

type InvokeInput = {
  text: string;
};

const Page = () => {
  const trpc = useTRPC();
  
  // Using the mutation with TanStack Query
  const invoke = useMutation({
    mutationFn: async (input: InvokeInput) => {
      // Call the procedure directly with the input
      const result = await trpc.invoke(input);
      return result;
    },
    onSuccess: () => {
      toast.success("Background job invoked successfully");
    },
  });
  
  // Handler for the button click
  const handleInvoke = () => {
    invoke.mutate({ text: "hello" });
  };

  return (
    <div className="text-3xl font-bold underline">
      <Button disabled={invoke.isPending} onClick={() => invoke.mutate({ text: "hello" })}>
        Invoke background job
      </Button>
    </div>
  );
};

export default Page;

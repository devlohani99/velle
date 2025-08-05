import {getQueryClient,trpc} from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { text } from "stream/consumers";
import { client as Client } from "./client";
import { Suspense } from "react";


const page =async() => {

  const queryClient=getQueryClient();
  void queryClient.prefetchQuery(trpc.createAI.queryOptions({text:"Dev pre"}))

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<div>Loading...</div>}>
        <Client/>
      </Suspense>
    </HydrationBoundary>
      
   
  )
}

export default page
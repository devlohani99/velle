"use client";

import {useTRPC} from "@/trpc/client";
import {useSuspenseQuery} from "@tanstack/react-query";

export const client =()=>{
    const trpc=useTRPC();
  
    const {data}=useSuspenseQuery(trpc.createAI.queryOptions({text:"Dev pre"}));

    return(
        <div>{JSON.stringify(data)}</div>
    )
};
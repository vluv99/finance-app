"use client";

import { NewAccountSheet } from "@/features/accounts/components/new-account-sheet";
// import { useMountedState } from "react-use";

export function SheetProvider() {
  // There can be a hydration error coming from the use of the component both on server and client, to fix it comment out the code below
  // const isMounted = useMountedState();
  // if (!isMounted) return null;

  return (
    <>
      <NewAccountSheet />
    </>
  );
}

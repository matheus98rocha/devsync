"use client"

import { useElementsContext } from "@/context/elements.context";

export const postMessage = () => {
  const { text } = useElementsContext();
  return text;
};
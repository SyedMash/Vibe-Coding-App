import { twMerge } from "tailwind-merge";

import { clsx, type ClassValue } from "clsx";
import Sandbox from "@e2b/code-interpreter";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getSandbox = async (sandboxId: string) => {
  const sandbox = await Sandbox.connect(sandboxId);
  return sandbox;
};

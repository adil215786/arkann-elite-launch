import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function buildMailtoLink({
  to,
  subject,
  body,
}: {
  to: string;
  subject?: string;
  body?: string;
}) {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString();
  return query ? `mailto:${to}?${query}` : `mailto:${to}`;
}

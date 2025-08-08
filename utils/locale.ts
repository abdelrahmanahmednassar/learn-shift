import { useTrans } from "@/Providers/useTrans";

export function useLocalePath(path: string) {
  const locale = useTrans().lang;

  return toLocalePath(path, locale);
}

export function toLocalePath(path: string, locale: string) {
  const cleanPath = path.replace(/\/en|\/ar/ig,"") || "/";
  if (locale === "ar") {
    return cleanPath;
  }

  return `/${locale}${cleanPath}`;
}

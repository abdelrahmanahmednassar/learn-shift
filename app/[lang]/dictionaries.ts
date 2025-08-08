import "server-only";

const dictionaries = {
  ar: () => import("@/lang/ar.json").then((module) => module.default),
  en: () => import("@/lang/en.json").then((module) => module.default),
};

export const getDictionary = async (locale: "ar" | "en") =>
  dictionaries[locale]();

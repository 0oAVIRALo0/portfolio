import { PortableTextComponents } from "@portabletext/react";

export const CustomPortableText: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mb-4">{children}</p>,
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold mb-4">{children}</h2>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <a href={value?.href} className="underline hover:text-blue-500">
        {children}
      </a>
    ),
  },
};

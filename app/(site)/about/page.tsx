import Image from "next/image";
import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import { PortableText } from "@portabletext/react";
import { BiEnvelope, BiSolidDownload, BiLinkExternal } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { Slide } from "../animation/Slide";
import RefLink from "../components/shared/RefLink";
import { CustomPortableText } from "../components/shared/CustomPortableText";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Aviral Chauhan",
  metadataBase: new URL("http://localhost:3000/about"),
  description:
    "Learn more about my skills, experience and technical background",
  openGraph: {
    title: "About | Aviral Chauhan",
    url: "http://localhost:3000/about",
    description:
      "Learn more about my skills, experience and technical background",
  },
};

export default async function About() {
  const profile: ProfileType[] = await getProfile();

  return (
    <main className="relative lg:max-w-7xl mx-auto max-w-3xl md:px-16 px-6">
      {profile &&
        profile.map((data) => (
          <div key={data._id}>
            <section className="relative grid lg:grid-cols-custom grid-cols-1 gap-x-6 justify-items-center">
              <div className="order-2 lg:order-none">
                <Slide>
                  <h1 className="font-incognito font-semibold tracking-tight sm:text-5xl text-3xl lg:leading-tight basis-1/2 mb-8">
                    I&apos;m {data.fullName}. I live in {data.location}, where I
                    build the future.
                  </h1>

                  <div className="dark:text-zinc-400 text-zinc-600 leading-relaxed">
                    <PortableText
                      value={data.fullBio}
                      components={CustomPortableText}
                    />
                  </div>
                </Slide>
              </div>

              <aside className="flex flex-col lg:justify-self-center justify-self-start gap-y-8 lg:order-1 order-none mb-12">
                <Slide delay={0.1}>
                  <div className="sticky top-10">
                    <Image
                      className="rounded-2xl mb-4 object-cover max-h-96 min-h-96 bg-top"
                      src={data.profileImage.image}
                      width={420}
                      height={100}
                      quality={100}
                      alt={data.profileImage.alt}
                      placeholder="blur"
                      blurDataURL={data.profileImage.lqip}
                      priority
                    />

                    <div className="flex flex-col text-center gap-y-4">
                      <div className="flex items-center gap-x-3">
                        <RefLink
                          href="https://drive.google.com/file/d/1NoFBy1L9b10jQG9N1jgc4727qTH8eePA/view?usp=sharing"
                          className="flex items-center justify-center text-center gap-x-2 basis-[90%] dark:bg-primary-bg bg-zinc-100 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 rounded-md py-2 text-lg font-incognito font-semibold"
                        >
                          View Résumé <BiLinkExternal className="text-base" />
                        </RefLink>
                        <a
                          href={`${data.resumeURL}?dl=${data.fullName}-resume.pdf`}
                          className="flex items-center justify-center text-center dark:text-primary-color text-secondary-color hover:underline basis-[10%] dark:bg-primary-bg bg-zinc-100 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 rounded-md py-3 text-lg"
                          title="Download Resume"
                        >
                          <BiSolidDownload
                            className="text-lg"
                            aria-label="Download Resume"
                          />
                        </a>
                      </div>

                      <a
                        href={`mailto:${data.email}`}
                        className="flex items-center gap-x-2 hover:text-primary-color"
                        title={`Send an email to ${data.email}`}
                      >
                        <BiEnvelope className="text-lg" />
                        {data.email}
                      </a>
                    </div>
                  </div>
                </Slide>
              </aside>
            </section>

            <Slide delay={0.2}>
              <section className="mt-5 space-y-4">
                <h2 className="font-semibold text-4xl text-zinc-100 mb-4">
                  What I'm Currently Hacking On?
                </h2>
                <p className="text-zinc-400 max-w-lg leading-relaxed">
                  I&apos;m currently working on a project that combines my
                  skills and passions. It&apos;s a personal project that
                  I&apos;m thrilled to share with others. In this project, users
                  can connect and interact with people who share similar music
                  tastes.
                </p>
                <a
                  href="https://github.com/0oAVIRALo0/spotify-chat-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-2 text-zinc-300 hover:text-primary-color transition-colors"
                >
                  <FaGithub className="text-xl" />
                  <span>Check out the project on GitHub</span>
                </a>
              </section>
            </Slide>

            <Slide delay={0.3}>
              <section className="mt-24 max-w-2xl">
                <h2 className="font-semibold text-4xl mb-4">Expertise</h2>
                <p className="text-zinc-400 max-w-lg">
                  I&apos;ve spent few years working on my skills. In no
                  particular order, here are a few of them.
                </p>

                <ul className="flex flex-wrap items-center gap-3 mt-8">
                  {data.skills.map((skill, id) => (
                    <li
                      key={id}
                      className="bg-[#1d1d20] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </section>
            </Slide>
          </div>
        ))}
    </main>
  );
}

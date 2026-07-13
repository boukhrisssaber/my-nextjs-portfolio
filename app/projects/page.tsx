import Image from "next/image";
import { client } from "../lib/sanity";

interface Data {
  title: string;
  overview: string;
  link: string;
  _id: string;
  imageUrl: string;
}

async function getProjects() {
  const query = `*[_type == "project"] {
    title,
      overview,
      link,
      _id,
      "imageUrl": image.asset->url
  }`;

  const data = await client.fetch(query);

  return data;
}

export const revalidate = 60;

export default async function Projects() {
  const data: Data[] = await getProjects();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
          🛠️ Projects
        </h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Things I&apos;ve built and worked on.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((project) => (
          <a
            key={project._id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group overflow-hidden rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md hover:border-teal-200 dark:hover:border-teal-800 transition-all duration-200"
          >
            <div className="h-48 w-full relative bg-gray-100 dark:bg-gray-800">
              <Image
                fill
                src={project.imageUrl}
                alt={project.title}
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-teal-500 transition-colors">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 line-clamp-3 leading-relaxed">
                {project.overview}
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-teal-500">
                Learn more
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

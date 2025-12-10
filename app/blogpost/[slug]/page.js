import fs from 'fs';
import matter from "gray-matter";
import { notFound } from 'next/navigation';
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from '@rehype-pretty/transformers'
import OnThisPage from '@/components/onThisPage';
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

export default async function BlogPage({ params }) {
  
  // ⚠ Fix: await params
  const { slug } = await params;

  const filepath = `content/${slug}.md`;

  if (!fs.existsSync(filepath)) {
    notFound();
    return;
  }

  const fileContent = fs.readFileSync(filepath, "utf-8")
  const { content, data } = matter(fileContent)

  const processor = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypePrettyCode, {
      theme: "github-dark",
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3000
        })
      ]
    })
    .use(rehypeFormat)
    .use(rehypeStringify);

  const htmlContent = (await processor.process(content)).toString();

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 bg-card text-card-foreground rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-4">{data.title}</h1>

      <blockquote className="border-l-4 border-primary bg-muted pl-6 pr-4 py-4 italic text-lg text-muted-foreground my-6">
        {data.description}
      </blockquote>

      <div className="flex items-center gap-4 mb-8">
        <span className="flex items-center text-sm text-muted-foreground">
          <svg className="w-5 h-5 mr-1 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 01112 15c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {data.author}
        </span>
        <span className="text-xs text-muted-foreground">{data.date}</span>
      </div>

      <div
        className="prose dark:prose-invert max-w-none text-foreground"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      ></div>

      <OnThisPage htmlContent={htmlContent} />
    </div>
  )
}

import lume from "lume/mod.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import filter_pages from "lume/plugins/filter_pages.ts";
import jsx from "lume/plugins/jsx.ts";
import mdx from "lume/plugins/mdx.ts";
import metas from "lume/plugins/metas.ts";
import nav from "lume/plugins/nav.ts";
import postcss from "lume/plugins/postcss.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import remarkWikiLink from "npm:remark-wiki-link";
import typography from "npm:@tailwindcss/typography";

const site = lume();

site.use(jsx());
site.use(code_highlight());
site.use(
  filter_pages({
    fn: (page) => !page.data.draft,
  })
);
site.use(
  mdx({
    remarkPlugins: [remarkWikiLink],
  })
);
site.use(metas());
site.use(nav());
site.use(
  tailwindcss({
    extensions: [".mdx", ".tsx"],
    options: {
      plugins: [typography],
    },
  })
);
site.use(postcss());

export default site;

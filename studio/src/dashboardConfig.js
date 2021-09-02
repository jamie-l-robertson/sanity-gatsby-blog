export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6130af79e9212cc98d5fd68f",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-4am7o4rg",
                  apiId: "7a309fb3-37cd-48d8-81ab-40dd6d7cced9",
                },
                {
                  buildHookId: "6130af790a73a5b0ef2615aa",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-6o97oxba",
                  apiId: "1d0361f5-c211-427c-a010-91549c617bd4",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/jamie-l-robertson/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-6o97oxba.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};

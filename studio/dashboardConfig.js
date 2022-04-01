export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62470097e9940532a35e11ee',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-hoha8bno',
                  apiId: '5fe4a4fd-ffd8-4ec7-8fbb-c85c5809620a'
                },
                {
                  buildHookId: '624700971ff1d31608b66554',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ophf6ebn',
                  apiId: '35281c01-b2ef-4a1e-a8b8-b58da66ac637'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/OscarSandovalAppSpring/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ophf6ebn.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

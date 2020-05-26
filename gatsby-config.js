module.exports = {
	siteMetadata: {
		title: `Raghav Sai`,
		author: `Raghav Sai`,
		description: `Raghav Sai's personal site-portfolio-blog.`,
		siteUrl: `https://raghavsai.netlify.app/`,
		social: {
			twitter: `petgoldfish13`,
		},
	},
	plugins: [
		`gatsby-plugin-netlify-cms`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-offline`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-graphql-codegen`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/blog`,
				name: `blog`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/assets`,
				name: `assets`,
			},
		},
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				extensions: [".mdx", ".md"],
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590,
						},
					},
					{
						resolve: `gatsby-remark-responsive-iframe`,
						options: {
							wrapperStyle: `margin-bottom: 1.0725rem`,
						},
					},
					{
						resolve: `gatsby-remark-vscode`,
					},
					{
						resolve: `gatsby-remark-copy-linked-files`,
					},
					{
						resolve: `gatsby-remark-smartypants`,
					},
				],
			},
		},
		// {
		//   resolve: `gatsby-plugin-manifest`,
		//   options: {
		//     name: `Gatsby Starter Blog`,
		//     short_name: `GatsbyJS`,
		//     start_url: `/`,
		//     background_color: `#ffffff`,
		//     theme_color: `#663399`,
		//     display: `minimal-ui`,
		//     // edit below
		//     icon: `content/assets/gatsby-icon.png`,
		//   },
		// },
	],
};

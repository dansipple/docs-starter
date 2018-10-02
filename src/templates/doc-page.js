import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';

export default ({ data, location }) => {
  const page = data.markdownRemark;
  console.log(data.markdownRemark);
  return (
    <React.Fragment>
      <Helmet>
        <title>{page.frontmatter.title}</title>
        <meta name="description" content={page.excerpt} />
        <meta name="og:description" content={page.excerpt} />
        <meta name="twitter:description" content={page.excerpt} />
        <meta name="og:title" content={page.frontmatter.title} />
        <meta name="og:type" content="article" />
        <meta name="twitter.label1" content="Reading time" />
        <meta name="twitter:data1" content={`${page.timeToRead} min read`} />
      </Helmet>
      <Layout>
        <Sidebar location={location} />
        <div className="doc-body">
          <main>
            <div dangerouslySetInnerHTML={{ __html: page.html }} />
          </main>
        </div>
      </Layout>
    </React.Fragment>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
`;
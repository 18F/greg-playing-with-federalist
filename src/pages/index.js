import * as React from "react"
import {useStaticQuery,graphql} from "gatsby";
import Number from "../components/number"
import { highlighted } from '../styles/index.module.scss'

// markup
const IndexPage = () => {
  const {site:{siteMetadata:{title}},allMdx:{edges:pages}} = useStaticQuery(graphql`
    query SiteTitle {
      site {
        siteMetadata {
          title
        }
      }
      allMdx {
        edges {
          node {
            id
            frontmatter {
              date(formatString: "MMMM D, YYYY")
              title
            }
          }
        }
      }
    }`);

  console.log(pages);

  return (
    <main>
      <title>{title}</title>
      <h1>
        moop moop <Number className={highlighted}>334235</Number>
        <br />
        <span>— you just made a Gatsby site! </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      <ul>
        {pages.map(({node:{id,frontmatter:{date,title}}})=><li key={id}>{title} ({date})</li>)}
      </ul>
    </main>
  )
}

export default IndexPage

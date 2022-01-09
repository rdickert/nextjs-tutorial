import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData
    }
  }
}

// magic happening here. getStaticPaths appears to be mapping over the `paths` object to render pages
// paths contains { params: { id }} so far for each page to render.
export async function getStaticPaths() {
  const paths = getAllPostIds();
  console.log(JSON.stringify(paths, null, 2))
  return {
    paths,
    fallback: false,
  }
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

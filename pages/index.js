import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
      <Layout home>
	  <Head>
	      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
	      <title>{siteTitle}</title>
	  </Head>
	  <section className={utilStyles.headingMd}>
              <p>I am the dethroned emperor. My frail sickly hands wield a blackened sinful blade. Constantly coding, creating the new portal to emptiness. Making Blogging a threat again.</p>
	      <a href="https://github.com/nomadicamericanlabs"> <i class="fa fa-github-alt" aria-hidden="true"></i></a>
	      <a href="https://www.freecodecamp.org/bem0aned">  <i class="fa fa-free-code-camp" aria-hidden="true"></i></a>
	      <a href="https://codepen.io/jimb0h35"><i class="fa fa-codepen" aria-hidden="true"></i></a>
	      <a href="https://twitter.com/deethrownedemp1"> <i class="fa fa-twitter" aria-hidden="true"></i></a>
	      <a href="https://www.reddit.com/user/oathbreaker_sinkslow"> <i class="fa fa-reddit"></i></a>
	  </section>
	  <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
              <h2 className={utilStyles.headingLg}>Blog</h2>
              <ul className={utilStyles.list}>
		  {allPostsData.map(({ id, date, title }) => (
		      <li className={utilStyles.listItem} key={id}>
			  <Link href={`/posts/${id}`}>
			      <a>{title}</a>
			  </Link>
			  <br />
			  <small className={utilStyles.lightText}>
			      <Date dateString={date} />
			  </small>
		      </li>

		  ))}
	      </ul>
	  </section>
      </Layout>
  )
}

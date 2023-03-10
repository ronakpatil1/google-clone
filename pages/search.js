import Head from "next/head";
import Header from "../components/Header";
//import { API_KEY, CONTEXT_KEY } from "../keys";
//import Response from "../Response";
import SearchResults from "../components/SearchResults";
import { useRouter } from "next/router";

function Search({ results }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* Search results */}
      <SearchResults results={results} />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = false;
  const API_KEY = process.env.API_KEY;
  const CONTEXT_KEY = process.env.CONTEXT_KEY;
  const startIndex = context.query.start || "0";
  const data = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
  ).then((response) => response.json());

  //after the server has rendered .. pass the results to the client..
  return {
    props: {
      results: data,
    },
  };
}

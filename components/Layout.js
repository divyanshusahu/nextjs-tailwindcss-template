import Head from "next/head";

function Layout(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <div className="container mx-auto">{props.children}</div>
    </>
  );
}

export default Layout;

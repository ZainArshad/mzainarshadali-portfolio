import Head from 'next/head';

import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';
import { Guest } from 'src/components/Guest';
import HomePageComponent from 'src/content/Homepage';

function HomeReports() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <HomePageComponent />
    </>
  );
}

HomeReports.getLayout = (page) => (
  <Guest>
    <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
  </Guest>
);

export default HomeReports;

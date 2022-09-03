import Head from 'next/head';

import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';
import { Guest } from 'src/components/Guest';
import PortFolioPageComponent from 'src/content/PortFoliopage';

function PortFolioReports() {
  return (
    <>
      <Head>
        <title>PortFolio </title>
      </Head>
      <PortFolioPageComponent />
    </>
  );
}

PortFolioReports.getLayout = (page) => (
  <Guest>
    <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
  </Guest>
);

export default PortFolioReports;

import Head from 'next/head';

import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';
import { Guest } from 'src/components/Guest';
import EducationPageComponent from 'src/content/EducationPage';

function EducationReports() {
  return (
    <>
      <Head>
        <title>Education - Portfolio</title>
      </Head>
      <EducationPageComponent />
    </>
  );
}

EducationReports.getLayout = (page) => (
  <Guest>
    <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
  </Guest>
);

export default EducationReports;

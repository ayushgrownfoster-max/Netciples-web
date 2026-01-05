// import { CONFIG } from "@/global-config";
// import CaseStudyIdDetail from "@/sections/case-studies-page/case-studies-id-section";

// export const metadata = { title: `Case Studies - ${CONFIG.appName}` };

// export default function BlogsPage() {
//   return <CaseStudyIdDetail/>;
// }

import { CONFIG } from "@/global-config";
import { caseStudies } from "@/data/caseStudies";
import CaseStudyIdDetail from "@/sections/case-studies-page/case-studies-id-section";

export async function generateMetadata(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params; //  MUST AWAIT
  const caseId = Number(id);

  const study = caseStudies.find((c) => c.id === caseId);

  return {
    title: study
      ? `${study.title} - ${CONFIG.appName}`
      : `Case Studies - ${CONFIG.appName}`,
  };
}

export default function CaseStudyPage() {
  return <CaseStudyIdDetail />;
}



// import { CONFIG } from "@/global-config";
// import { caseStudies } from "@/data/caseStudies";
// import CaseStudyIdDetail from "@/sections/case-studies-page/case-studies-id-section"; 

// export async function generateMetadata({ params }: { params: { id: string } }) {
//   const caseId = Number(params.id);
//   const study = caseStudies.find((c) => c.id === caseId);

//   return {
//     title: study 
//       ? `${study.title} - ${CONFIG.appName}`
//       : `Case Studies - ${CONFIG.appName}`,
//   };
// }

// export default function CaseStudyPage() {
//   return <CaseStudyIdDetail />;
// }
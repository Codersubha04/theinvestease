import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Complaints Data | InvestEase Research Investor Transparency",
  description:
    "Access InvestEase Research complaints data for transparency on grievance records, reporting disclosures, and investor-facing compliance information.",
};

export default function ComplaintsData() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <section className="tf-section">
        <div className="tf-container">
          <h2 className="mb-4">Complaints Data</h2>
          <p>Write your content here...</p>
        </div>
      </section>
    </>
  );
}

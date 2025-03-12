import ServiceTabs from "./ServiceTabs";
import ServiceDescription from "./ServiceDescription";
import ServiceProcess from "./ServiceProcess";
import ServicePortfolio from "./ServicePortfolio";
import ServiceDesigner from "./ServiceDesigner";

export default function ServiceTabContent({ service, activeTab, setActiveTab }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
      <ServiceTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="p-6">
        {activeTab === 'description' && <ServiceDescription service={service} />}
        {activeTab === 'process' && <ServiceProcess service={service} />}
        {activeTab === 'portfolio' && <ServicePortfolio service={service} />}
        {activeTab === 'designer' && <ServiceDesigner service={service} />}
      </div>
    </div>
  );
}
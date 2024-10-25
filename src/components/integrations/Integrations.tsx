import * as React from "react";
import { IntegrationCard } from "./IntegrationCard";
import integrationData from "../../data/integrationData.json";

const Integrations: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3   gap-5 mt-[26px] text-neutral-900">
      {integrationData.map((integration, index) => (
        <IntegrationCard
          key={index}
          number={integration.number}
          title={integration.title}
          hoverColor={integration.hoverColor}
          items={integration.items}
        />
      ))}
    </div>
  );
}

export default Integrations;
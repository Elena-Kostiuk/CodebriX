import * as React from "react";
import { IntegrationCard } from "./IntegrationCard";
import integrationData from "../../data/integrationData.json";

const Integrations: React.FC = () => {
  return (
    <section className="relative z-[2] free-area mt-40 max-md:mt-20">
      <h2 className="inline-block">Connectors & Integrations</h2>
      <div className="free-area grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[26px]">
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
    </section>
  );
};

export default Integrations;

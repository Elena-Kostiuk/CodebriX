import React from "react";
import data from "../../data/pricingTable.json";
import PricingTable from "./PricingTable";

const PricingTableContainer: React.FC = () => {
  return (
    <div className="overflow-x-auto mt-[60px]">
      <div className="min-w-[960px]">
      <div className="label-text grid grid-cols-4   gap-5 text-center">
        {["", "[.1.]", "[.2.]", "[.3.]"].map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
      {data.tables.map((tableData, index) => (
        <PricingTable
          key={`table-${index}`}
          title={tableData.title}
          rows={tableData.rows}
          hoverStyle={index === 0}
        />
      ))}
      </div>
    </div>
  );
};

export default PricingTableContainer;


import * as React from "react";
import  MetricCard from "./MetricCard";
import metrics from "../../data/metrics.json";

const MetricsSection=() =>{
  return (
    <section
      aria-label="Key Metrics"
      className="free-area grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-40  max-md:mt-20 max-md:mr-0"
    >
      {metrics.map((metric, index) => (
          <MetricCard key={metric.id} {...metric} />
      ))}
    </section>
  );
}

export default MetricsSection

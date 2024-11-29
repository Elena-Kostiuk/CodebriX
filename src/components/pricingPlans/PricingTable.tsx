
import React from "react";

interface PricingTableProps {
  title: string[];
  rows: string[][];
  hoverStyle?: boolean;
}

const PricingTable: React.FC<PricingTableProps> = ({ title, rows, hoverStyle }) => {
  const images = {
    img1: "/images/checkYes.png",
    img2: "/images/checkNo.svg",
  };
  const hoverClass: { [key: number]: string } = {
    0:"",
    1:"hover-blue",
    2:"hover-green",
    3:"hover-orange"
  }

  const renderedRows = rows.map((rowData, rowIndex) => {
    const hasButton = rowData.some((cell) => cell.startsWith("btn"));
 return(
<tr key={`row-${rowIndex}`} className={`last:border-b border-black ${!hasButton ? "hover:bg-gray-100" : ""}`}>
  {rowData.map((cell, cellIndex) => (
    <td
      key={`cell-${rowIndex}-${cellIndex}`}
      className={`w-[25%]  border-r-2 border-dotted border-r-gray-300 last:border-r-0 px-4 pt-3 pb-8 ${
        cell.startsWith("img")
          ? "text-center"
          : cell.startsWith("btn")
          ? "text-center"
          : "text-left align-top"
      } max-xl:pb-5 max-lg:pb-4`}
    >
      {cell.startsWith("img") ? (
        <img
          src={cell === "img1" ? images.img1 : images.img2}
          alt={cell === "img1" ? "yes" : "no"}
          className="h-8 object-contain mx-auto max-xl:h-6 max-lg:h-5"
        />
      ) : cell.startsWith("btn") ? (
        <button
          className="text-nowrap text-center w-[8em] px-2 py-4 mt-auto font-ibm-plex-mono font-medium tracking-wide text-white uppercase rounded-lg bg-neutral-900 hover:bg-neutral-700 active:bg-neutral-700 max-xl:py-3"
        >
          {cell.replace("btn ", "")}
        </button>
      ) : (
        <span className="whitespace-pre-line">{cell}</span>
      )}
    </td>
  ))}
</tr>
  )});

  return (
    <div className="">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr>
            {title.map((titleItem, index) => (
              <th
                key={`title-${index}`}
                className={`border-r-2 border-dotted border-gray-300 last:border-r-0  px-4 py-5 text-left align-top ${hoverStyle ? hoverClass[index] : ""}`}
              >
                <h3>{titleItem}</h3>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{renderedRows}</tbody>
      </table>
    </div>
  );
};

export default PricingTable;
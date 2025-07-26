// components/MegaMenuTable.jsx
import Link from "next/link";


export default function MegaMenuTable({megaMenuData}) {
  return (
    <div className="w-screen px-6 ">
      <h2 className="text-2xl font-bold mb-6">{megaMenuData?.title}</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left">
          <thead>
            <tr className="border-b">
              {megaMenuData?.columns?.map((col, idx) => (
                <th key={idx} className="px-4 py-2 font-semibold text-lg text-gray-800">
                  {col.heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Find the longest list to determine row count */}
            {Array.from({
              length: Math.max(...megaMenuData.columns.map((c) => c.items.length)),
            }).map((_, rowIdx) => (
              <tr key={rowIdx}>
                {megaMenuData.columns.map((col, colIdx) => (
                  <td key={colIdx} className="px-4 py-2 text-gray-700">
                    {col.items[rowIdx] ? (
                      <Link href={col.items[rowIdx].link} className="hover:underline">
                        {col.items[rowIdx].label}
                      </Link>
                    ) : null}
                  </td>
                ))}
              </tr>
            ))}

            {/* View All Links Row */}
            <tr className="border-t">
              {megaMenuData.columns.map((col, idx) => (
                <td key={idx} className="px-4 py-3">
                  {col.viewAll && (
                    <Link
                      href={col.viewAll.link}
                      className="font-semibold text-black hover:underline"
                    >
                      {col.viewAll.label}
                    </Link>
                  )}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

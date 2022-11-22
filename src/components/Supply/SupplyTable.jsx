import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

function DemandTable() {
  const [supplyData, setSupplyData] = useState([]);
  const navigate = useNavigate();
  const getsupplyData = () => [
    axios("http://35.79.69.32:8000/coal/supply/filter", {
      headers: {
        accept: "application / json",
      },
    })
      .then((res) => {
        const { data } = res;
        if (res.status === 200) {
          setSupplyData(data.message);
          console.log(supplyData, "supplyData");
        }
      })
      .catch((err) => {
        console.error(err);
      }),
  ];

  useEffect(() => {
    getsupplyData();
  }, []);

  return (
    <div class="flex demand-table mt-12  flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <Link className="demand-btn bg-blue-400" to={"/supplypost"}>
          Add{" "}
        </Link>

        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full">
              <thead class=" border-b">
                <tr>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Grade id
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Port id
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    origin id
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    status
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    importer
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    stock qty
                  </th>

                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    stock status
                  </th>

                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    in transit vessel name
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    in transit eta date
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    in transit status
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    in transit status
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    in transit origin id
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    in transit qty
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    in transit mines
                  </th>
                </tr>
              </thead>
              <tbody>
                {supplyData.map((data) => (
                  <tr class="border-b">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {data.grade_id}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {data.port_id}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {data.origin_id}
                    </td>

                    <td
                      className={data.is_active ? "bg-green-500" : "bg-red-500"}
                      class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                    >
                      <p
                        className={
                          data.is_active
                            ? "bg-green-300 p-2 rounded-md"
                            : "bg-red-300  p-2 rounded-md"
                        }
                      >
                        {" "}
                        {data.is_active ? "true" : "fasle"}
                      </p>
                    </td>

                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {data.importer}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {data.stock_qty}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {data.stock_status}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {data.in_transit_vessel_name}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {data.in_transit_eta_date}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {data.in_transit_status}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {data.in_transit_origin_id}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {data.in_transit_mines}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {data.in_transit_qty}
                    </td>
                    {/* <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {data.demandent_name}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {data.data}
                    </td> */}
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {data.importer}
                    </td>
                    <td>
                      <buton
                        onClick={() => {
                          navigate("/supplyedit", { state: data, id: data.id });
                        }}
                        className="bg-blue-400 cursor-pointer py-2 px-4 rounded-md text-white"
                      >
                        Edit
                      </buton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default DemandTable;

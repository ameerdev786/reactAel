import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
  import { ToastContainer, toast } from "react-toastify";


function DemandTable() {
  const [demandData, setDemandData] = useState([]);
  const navigate=useNavigate()
  const getDemandData = () => [
    axios("http://13.230.65.59:8000/coal/demand/filter", {
      headers: {
        accept: "application / json",
      },
    })
      .then((res) => {
        const { data } = res;
        if (res.status === 200) {
          setDemandData(data.message);
          console.log(demandData,"demandata");
        }
      })
      .catch((err) => {
        console.error(err);
      }),
  ];

  useEffect(() => {
    getDemandData();
  }, []);

  return (
    <div class="flex demand-table mt-12  flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <Link className="demand-btn bg-blue-400" to={"/demandpost"}>
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
                    Origin Id
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Net physical stock
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    is_active
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Demandent Name
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Dispatch qty
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    importer
                  </th>
                </tr>
              </thead>
              <tbody>
                {demandData.map((data) => (
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
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {data.net_physical_stock}
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
                      {data.demandent_name}
                    </td>

                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {data.dispatch_qty}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {data.importer}
                    </td>
                    <td>
                      <buton onClick={()=>{navigate("/demandedit", { state: data ,id:data.id});}} className="bg-blue-400 py-2 px-4 rounded-md text-white">
                        Edit
                      </buton >
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default DemandTable;

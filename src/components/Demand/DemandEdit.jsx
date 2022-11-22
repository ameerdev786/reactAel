import React, { useEffect, useState } from "react";
import "../../style/sidefilters.css";
import Selector from "../filters/DemandDD";
import SelectPort from "../filters/EditSelect.jsx/SelectPort";
import SelectGrade from "../filters/EditSelect.jsx/SelectGrade";
import SelectOrigin from "../filters/EditSelect.jsx/SelectOrigin";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { FaSearch, FaBars } from "react-icons/fa";
import axios from "axios";
import { useLocation } from "react-router-dom";

function DemandEdit() {
  const [portId, setPortId] = useState(null);
  const location = useLocation();
  const [originId, setOriginId] = useState(null);
  const [gradeId, setgradeID] = useState(null);
  const navigate = useNavigate();
  const [demandValues, setValues] = useState({
    dispatch_qty: "",
    importer: "",
    net_physical_stock: "",
    demandent_name: "",
  });
  const gradeApi = "http://35.79.69.32:8000/coal/grade";
  const originApi = "http://35.79.69.32:8000/coal/origin";
  const portApi = "http://35.79.69.32:8000/coal/port";

  function changeHandler(e) {
    let value = e.target.value;
    let name = e.target.name;
    setValues({ ...demandValues, [name]: value });
  }
  function submit() {
    demandValues.grade_id = parseInt(gradeId);
    demandValues.origin_id = parseInt(originId);
    parseInt(demandValues.dispatch_qty);
    parseInt(demandValues.net_physical_stock);
    demandValues.port_id = parseInt(portId);
    console.log(demandValues, "demandValues");
    createDemand(demandValues);
    // setValues({
    //   dispatch_qty: "",
    //   importer: "",
    //   net_physical_stock: "",
    //   demandent_name: "",
    // });
    // setPortId(0);
    // setOriginId(0);
    // setgradeID(0);
  }

  const createDemand = (data) => {
    console.log("test of data===", location.state && location.state.id, "y id");

    axios({
      method: "put",
      url: `http://35.79.69.32:8000/coal/demand/${location?.state?.id}`,
      headers: {
        accept: "application/json",
        // "Content-Type": "multipart/form-data",
        // Authorization: `Bearer ${token}`,
      },
      data,
    })
      .then((res) => {
        // let { data, message, status } = res.data;
        console.log("result of creat field", res);
        if (res.status === 200) {
          toast.success("demand edited sucessfully!", {
            position: toast.POSITION.TOP_RIGHT,
          });
          setTimeout(() => {
            navigate("/demand");
          }, 1500);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    setPortId(location.state.port_id);
    setgradeID(location.state.grade_id);
    setOriginId(location.state.origin_id);
    setValues({
      dispatch_qty: location.state.dispatch_qty,
      importer: location.state.importer,
      net_physical_stock: location.state.net_physical_stock,
      demandent_name: location.state.demandent_name,
    });
  }, [location.state]);
  return (
    <div className="demandpost">
      <form>
        <div>
          <h1>select port</h1>
          <SelectPort
            title="Port"
            defaultVal={location?.state.port_id}
            api={portApi}
            setSelectId={setPortId}
          />
        </div>
        <div>
          <h1>select grade</h1>
          <SelectGrade
            title="grade"
            api={gradeApi}
            setSelectId={setgradeID}
            defaultVal={location?.state.grade_id}
          />
        </div>
        <div>
          <h1>select origin</h1>
          <SelectOrigin
            title="origin"
            api={originApi}
            setSelectId={setOriginId}
            defaultVal={location?.state.origin_id}
          />
        </div>
        <div>
          <h1>Importer</h1>
          <input
            type="text"
            name="importer"
            value={demandValues.importer}
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <div>
          <h1>Dispatch qty</h1>
          <input
            type="number"
            name="dispatch_qty"
            value={demandValues.dispatch_qty}
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <div>
          <h1>Net physical stock</h1>
          <input
            type="number"
            name="net_physical_stock"
            value={demandValues.net_physical_stock}
            onChange={(e) => changeHandler(e)}
          />
        </div>

        <div>
          <h1>Demandent name</h1>
          <input
            type="text"
            name="demandent_name"
            value={demandValues.demandent_name}
            onChange={(e) => changeHandler(e)}
          />
        </div>
      </form>
      <div className="btn-con">
        <button onClick={submit}> Edit</button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default DemandEdit;

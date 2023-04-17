import React from "react";
import "./index.css";
import Button from "../../../component/Button";

const DisplayStaff = () => {
  const data = [
    {
      key1: "value1",
      key2: "value2",
      key3: "value1",
      key4: "value2",
    },
    {
      key1: "value1",
      key2: "value2",
      key3: "",
      key4: "",
    },
    {
      key1: "value1",
      key2: "value2",
      key3: "value1",
      key4: "value2",
    },
    {
      key1: "value1",
      key2: "value2",
      key3: "",
      key4: "",
    },
    {
      key1: "value1",
      key2: "value2",
      key3: "value1",
      key4: "value2",
    },
    {
      key1: "value1",
      key2: "value2",
      key3: "",
      key4: "",
    },
    {
      key1: "value1",
      key2: "value2",
      key3: "value1",
      key4: "value2",
    },
    {
      key1: "value1",
      key2: "value2",
      key3: "",
      key4: "",
    },
    {
      key1: "value1",
      key2: "value2",
      key3: "value1",
      key4: "value2",
    },
    {
      key1: "value1",
      key2: "value2",
      key3: "",
      key4: "",
    },
  ];

  const getStaffKeys = () => {
    if (data[0] != null) {
      return (
        <tr>
          {Object.keys(data[0]).map((key) => {
            return <th>{key}</th>;
          })}
          <th></th>
        </tr>
      );
    } else {
      return (
        <h3 style={{ display: "flex", justifyContent: "center" }}>
          Dữ liệu nhân viên chưa được khởi tạo!!!
        </h3>
      );
    }
  };

  const getStaffValues = () => {
    if (data != null) {
      return data.map((item) => {
        return (
          <tr>
            {Object.values(item).map((value) => {
              return <td>{value}</td>;
            })}
            <td id="delete-staff">
              <i class="fa-solid fa-trash-can"></i>
            </td>
          </tr>
        );
      });
    } else {
      return (
        <h3 style={{ display: "flex", justifyContent: "center" }}>
          Dữ liệu nhân viên chưa được khởi tạo!!!
        </h3>
      );
    }
  };

  const AddStaff = () => {
    document.location.href = "/admin/add-staff";
  };

  return (
    <div className="container-staff">
      <div className="btn-add">
        <Button text="Thêm" type={1} onClick={AddStaff} />
      </div>

      <table className="staff-table">
        <thead>{getStaffKeys()}</thead>
        <tbody>{getStaffValues()}</tbody>
      </table>
    </div>
  );
};

export default DisplayStaff;

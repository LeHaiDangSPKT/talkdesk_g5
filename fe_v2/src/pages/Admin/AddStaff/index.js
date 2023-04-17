import React from "react";
import "./index.css";
import Button from "../../../component/Button";

const AddStaff = () => {
  const button = [
    {
      name: "Thêm nhân viên",
      type: 1,
      onClick: () => {
        alert("Thêm nhân viên thành công");
      },
    },
    {
      name: "Hủy",
      type: 2,
      onClick: () => {
        window.location.href = "/admin";
      },
    },
  ];

  return (
    <div class="input__container">
      <div>
        <label class="input__label">Họ Tên</label>
        <input
          placeholder="Nhập họ và tên"
          class="input"
          name="text"
          type="text"
        ></input>
      </div>
      <div>
        <label class="input__label">Email</label>
        <input
          placeholder="Nhập email"
          class="input"
          name="text"
          type="email"
        ></input>
      </div>
      <div>
        <label class="input__label">Mật khẩu</label>
        <input
          placeholder="Nhập mật khẩu"
          class="input"
          name="text"
          type="text"
        ></input>
      </div>

      <div style={{ margin: "20px 0 0 -20px" }}>
        {button.map((item) => {
          return (
            <Button text={item.name} type={item.type} onClick={item.onClick} />
          );
        })}
      </div>
    </div>
  );
};

export default AddStaff;

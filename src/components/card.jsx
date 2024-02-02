import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";

const Card = ({ number, result }) => {
  const [name, setName] = useState("Person " + number);
  const [edit, setEdit] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center bg-black bg-opacity-75 rounded-lg p-4 border shadow-lg text-white w-full">
      <PersonIcon fontSize="large" />
      {edit ? (
        <>
          <p className="w-full">Edit name:</p>
          <input
            className="text-center bg-inherit border rounded-lg w-full"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </>
      ) : (
        <p className="text-center">{name} </p>
      )}
      <p className="text-center my-1 text-xl font-bold">${new Intl.NumberFormat().format(result.toFixed(2))}</p>
      <button
        className={`text-center ${edit ? "text-green-500" : "bg-inherit"}`}
        onClick={() => setEdit(!edit)}
      >
        {edit ? (
          <>
            Save <SaveIcon fontSize="small" />
          </>
        ) : (
          <>
            Edit <EditIcon />
          </>
        )}
      </button>
    </div>
  );
};

export default Card;

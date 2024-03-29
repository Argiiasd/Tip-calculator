import React, { useState } from "react";
import Card from "./components/card";
import GroupsIcon from "@mui/icons-material/Groups";
import PaidIcon from "@mui/icons-material/Paid";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "./App.css";

function App() {
  const [totalAmount, setTotalAmount] = useState();
  const [numberOfPeopleInput, setNumberOfPeopleInput] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [result, setResult] = useState(0);
  const [showDetail, setShowDetail] = useState(false);

  const calculatePayment = () => {
    if (totalAmount > 0 && numberOfPeopleInput > 0) {
      setResult(totalAmount / numberOfPeopleInput);
      setNumberOfPeople(numberOfPeopleInput);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "totalAmount") {
      setTotalAmount(parseInt(e.target.value));
    }
    if (e.target.name === "numberOfPeople") {
      setNumberOfPeopleInput(parseInt(e.target.value));
    }
  };

  const handleDetails = () => {
    setShowDetail(!showDetail);
  };

  const reset = () => {
    setTotalAmount("");
    setNumberOfPeopleInput("");
    setNumberOfPeople("");
    setResult(0);
  };

  return (
    <div className="App">
      <h1 className="text-3xl text-white font-bold mt-8">SplitWise</h1>
      <p className="text-white w-3/4 bg-black bg-opacity-75 rounded-lg p-4">
        ¿Have you ever wondered how to simplify the division of expenses between
        friends, housemates or colleagues? SplitWise is the answer! Our app is
        designed to make splitting expenses easy, fast and hassle-free.
      </p>

      <div className="flex flex-col w-3/4 bg-black bg-opacity-75 rounded-lg p-4 border shadow-lg text-white gap-3">
        <div className="flex flex-col mb-8">
          <p className="font-bold text-lg">Calculate Payment</p>
          <p className="text-sm leading-4">
            Enter the total amount and the number of people.
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="totalAmount" className="flex gap-1">
            <PaidIcon />
            Total Amount
          </label>
          <input
            className="border rounded-lg p-1 w-full bg-inherit px-2"
            type="number"
            placeholder="Enter total amount"
            name="totalAmount"
            onChange={handleChange}
            value={totalAmount}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="numberOfPeople" className="flex gap-1">
            <GroupsIcon /> Number of People
          </label>
          <input
            className="border rounded-lg p-1 w-full bg-inherit px-2"
            type="number"
            placeholder="Enter number of people"
            name="numberOfPeople"
            onChange={handleChange}
            value={numberOfPeopleInput}
          />
        </div>

        <button
          className="bg-black text-white py-2 px-4 rounded mt-8 border"
          onClick={calculatePayment}
        >
          Calculate
        </button>
      </div>

      <div className="flex flex-col w-3/4 bg-black bg-opacity-75 rounded-lg p-4 border shadow-lg text-white gap-3">
        <p className="font-bold text-lg">Payment Per Person</p>

        <div className="flex flex-col items-center mb-4">
          <p className="text-3xl font-bold ">
            ${new Intl.NumberFormat().format(result.toFixed(2))}
          </p>
        </div>

        <button
          className="bg-black text-white py-2 px-4  rounded border"
          onClick={reset}
        >
          Reset
        </button>

        {result > 0 ? (
          <button
            className="bg-black flex justify-center text-white py-2 px-4 rounded border"
            onClick={handleDetails}
          >
            {showDetail ? (
              <>
                Hide Detail <KeyboardArrowUpIcon />
              </>
            ) : (
              <>
                Show Detail <KeyboardArrowDownIcon />
              </>
            )}
          </button>
        ) : (
          <></>
        )}

        <div>
          {result > 0 && showDetail === true ? (
            <>
              <p className="font-bold text-lg">Details</p>
              <div className="flex flex-row flex-wrap gap-5 justify-between">
                {Array.from({ length: numberOfPeople }).map((_, i) => (
                  <Card key={i} number={i + 1} result={result} />
                ))}
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>

      <footer className="w-full flex justify-center bg-red-500 ">
        <div className="w-3/4 h-32 bg-black p-4 rounded-t-xl">
          <p className="text-white text-center">
            Copyright &copy; {new Date().getFullYear()} SplitWise. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

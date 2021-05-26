import React from "react";
import { useState, Dispatch, SetStateAction } from "react";

const Form = (props: { setResult: Dispatch<SetStateAction<number>> }) => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    const regEx = /^[0-9]{1,3}(\.{1}\d{1,3})?$/;
    const secRegEx = /^[0-9]{1,3}\.{1}?$/;
    let result = regEx.exec(e.target.value);
    let secResult = secRegEx.exec(e.target.value);
    switch (type) {
      case "weight":
        if (result || secResult) {
          setWeight(e.target.value);
        }
        e.target.value === "" ? setWeight("") : (() => {})();
        break;
      case "height":
        if (result || secResult) {
          setHeight(e.target.value);
        }
        e.target.value === "" ? setHeight("") : (() => {})();
        break;
      default:
        return null;
    }
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result: number =
      Math.round(
        (Number(weight) / (Number(height) * Number(height)) + Number.EPSILON) *
          100
      ) / 100;
    props.setResult(result);
  };
  return (
    <form
      className="flex flex-col place-self-center w-10/12 md:w-5/12 bg-white bg-opacity-10 shadow-xl justify-between items-center text-gray-400 p-4 rounded-xl"
      autoComplete="off"
      onSubmit={(e) => submitHandler(e)}
    >
      <span className="w-full">
        <Label display="weight" />
        <Input
          state={weight}
          placeholder="kilogram"
          value="weight"
          changeHandler={changeHandler}
        />

        <Label display="height" />
        <Input
          state={height}
          placeholder="metre"
          value="height"
          changeHandler={changeHandler}
        />
      </span>

      <input
        type="submit"
        value="calculate"
        className=" bg-brand text-brand-dark font-semibold w-40 py-2 px-1 rounded-[4.5px] mx-auto cursor-pointer hover:ring-brand-light hover:text-gray-700 hover:ring-inset hover:ring-2 mt-10"
      />
    </form>
  );
};

export default Form;

// form label
const Label = (props: { display: string }) => (
  <label htmlFor={props.display} className="block mb-1">
    {props.display}
  </label>
);

// input fields
const Input = (props: {
  value: string;
  placeholder: string;
  state: string;
  changeHandler: any;
}) => {
  return (
    <input
      required
      type="text"
      name={props.value}
      id={props.value}
      value={props.state}
      placeholder={props.placeholder}
      className="font-mono text-sm h-10 rounded-sm text-gray-700 px-3 py-1 w-full mb-7 focus:shadow-xl"
      onChange={(e) => props.changeHandler(e, props.value)}
    />
  );
};

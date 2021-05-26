const Greeting = (props: { result: number }) => {
  return (
    <h1 className="text-center font-mono text-brand-lightest text-xl md:text-4xl transform transition-all delay-300">
      {props.result
        ? `congratulations, your BMI is ${props.result}kg/m2`
        : "Hello! feel free to use this BMI calculator"}
    </h1>
  );
};

export default Greeting;

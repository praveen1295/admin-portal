const Error = ({ children }) => {
  return (
    <div
      className="w-50 p-2"
      style={{
        margin: "10px auto",
        borderRadius: 4,
        backgroundColor: "orangered",
        textAlign: "center",
        color: "white",
        textTransform: "capitalize",
      }}
    >
      {children}
    </div>
  );
};
export default Error;

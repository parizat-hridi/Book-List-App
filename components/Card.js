export const Card = ({ name, author, prices = [] }) => {
  return (
    <div className="my-5 flex flex-col justify-between border-2 rounded-md w-1/4 text-center bg-white ring ring-white ring-offset-green-100">
      <h1 className="font-bold">"{name}"</h1>
      <h5>Author :{author}</h5>
      {prices.length && (
        <p>
          {prices.map((price) => (
            <div key={JSON.stringify(price)}>
              {price.type} : {price.value}$
            </div>
          ))}
        </p>
      )}
    </div>
  );
};

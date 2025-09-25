import banner from "../../assets/images/bannercafe.jpg";

const Panel = () => {
  return (
    <main className="grid grid-cols-3 gap-4">
      <div className="...">
        <h1 id="panel-title" className="text-4xl font-bold w-2/5">
          Dashboard
        </h1>
      </div>
      <div className="col-span-2">
        <img
          src={banner}
          alt="Banner Image"
          className="w-full h-auto rounded-2xl"
        />
      </div>
      <div className="...">03</div>
      <div className="...">04</div>
      <div className="...">05</div>
      <div className="...">06</div>
      <div className="col-span-2 ...">07</div>
    </main>
  );
};

export default Panel;

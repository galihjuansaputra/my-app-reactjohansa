import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="Parentbox">
      <FotoProduk />
      <ProdukInfo isDiscount="coming" category="SNEAKER" name="Nike Air Zoom Pegasus" />
    </div>
  );
}

function FotoProduk() {
  return (
    <div className="Foto">
      <img src="sneaker.jpg" />
    </div>
  );
}

function CheckDiscount(props) {
  const { isDiscount } = props;

  if (isDiscount == "no") {
    return <p>Discount 50% Off</p>;
  } else if(isDiscount == "coming") {
    return <p>Akan Ada Discount</p>;
  } else {
    return <p>Belum Ada Discount</p>;
  }
}

function ProdukInfo(props) {
  const { category, name, isDiscount } = props;

  return (
    <div>
      <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Title">{name}</h1>
        <p className="Price">IDR 73.399.399</p>
        <CheckDiscount isDiscount={isDiscount} />
        <p className="Info">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
          aliquam quam exercitationem blanditiis tenetur nihil molestias nam
          odit laboriosam commodi ad illum libero repudiandae id voluptatum
          dolore voluptate, officiis impedit.
        </p>
        <p className="Info">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
          aliquam quam exercitationem blanditiis tenetur nihil molestias nam
          odit laboriosam commodi ad illum libero repudiandae id voluptatum
          dolore voluptate, officiis impedit.
        </p>
        <a onClick={(e) => TambahCart(name, e)} href="#">
          Add to Cart
        </a>
      </div>
    </div>
  );
}

function TambahCart(e) {
  console.log("Membeli " + e);
}

export default App;

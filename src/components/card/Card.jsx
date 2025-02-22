export default function Card({info}) {
  return (
    <div className="card">
      <img src={info.image} alt="" />
      <h4>{info.firstName}</h4>
      <h5>{info.lastName}</h5>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        fuga nihil commodi magni culpa! Veritatis voluptatum dolorum rerum
        officia, quidem consequatur laboriosam ab temporibus tempore numquam nam
        fugiat corrupti facilis!
      </p>
    </div>
  );
}

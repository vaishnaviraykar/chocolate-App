import './chocolate.css';

function Chocolate({title, description,imgurl}) {
  return (
    <div className="chocolate-card">
        <h2>{title}</h2>
        <img src={ imgurl} alt='chocolate'/>
        <p>{description}</p>
    </div>
  )
}

export default Chocolate


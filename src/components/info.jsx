
const Info = ({ valor , texte}) => { 

return (

<>
  {/* Button trigger modal */}
  <button
    type="button"
    className="btn btn-primary rounded-circle"
    data-bs-toggle="modal"
    data-bs-target={'#'+texte}
  >
    i
  </button>
  {/* Modal */}
  <div
    className="modal fade"
    id={texte}
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered modal-sm ">
      <div className="modal-content">
        <div className="modal-body">Has triat fer una web amb {valor} {texte}</div>
        
      </div>
    </div>
  </div>
</>
)
}
export default Info;
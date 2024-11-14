function Table() {
  return (
    <div>
      <div className="d-flex p-2" style={{ background: '#e2f5ff' }}>
        <button type="button" className="btn btn-primary mx-1">
          <i className="bi bi-lock"></i> Block
        </button>
        <button type="button" className="btn btn-primary mx-1">
          <i className="bi bi-unlock"></i>
        </button>
        <button type="button" className="btn btn-danger btn-outline  mx-1">
          <i className="bi bi-trash"></i>
        </button>
        <form className="form-inline my-2 my-lg-0 d-flex ms-auto">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Filter"
            aria-label="Search"
          />
        </form>
      </div>
      <div className="p-2">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckIndeterminate"
                  />
                </div>
              </th>

              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Last seen</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                {
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckIndeterminate"
                  />
                }
              </th>
              <td>Mark</td>
              <td>sd46@.mail.ru</td>
              <td>5 min</td>
            </tr>
            <tr>
              <th scope="row">
                {
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckIndeterminate"
                  />
                }
              </th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;

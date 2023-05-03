import "./PropsExample.css";

const PropsExample = ({ employee }) => {
  console.log("PropsExample props: ", employee);
  const { street, city, state, zip } = employee.address;
  return (
    <section>
      <div className="props-example">
        <h1>Props Example</h1>
        <div className="card">
          <div className="card-header">
            <div className="avatar">
              <img src={employee.avatar} alt="employee avatar" />
            </div>
          </div>
          <div className="card-details">
            <div className="detail">
              <label>First Name: </label>
              {employee.firstName}
            </div>
            <div className="detail">
              <label>Last Name: </label>
              <p>{employee.lastName}</p>
            </div>
            <div className="detail">
              <label>Title: </label>
              <p>{employee.title}</p>
            </div>
            <div className="detail">
              <label>Address: </label>
              <p>{`${street} ${city}, ${state} ${zip}`}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropsExample;

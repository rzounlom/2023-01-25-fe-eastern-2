import "./PropsExample.css";

const PropsExample = ({ employee }) => {
  const { firstName, lastName, title, avatar, address } = employee;

  console.log("PropsExample props: ", employee);

  return (
    <section>
      <div className="props-example">
        <h1>Props Example</h1>
        <div className="card">
          <div className="card-header">
            <div className="avatar">
              <img src={avatar} alt="employee avatar" />
            </div>
          </div>
          <div className="card-details">
            <div className="detail">
              <label>First Name: </label>
              <p>{firstName}</p>
            </div>
            <div className="detail">
              <label>Last Name: </label>
              <p>{lastName}</p>
            </div>
            <div className="detail">
              <label>Title: </label>
              <p>{title}</p>
            </div>
            <div className="detail">
              <label>Address: </label>
              <p>{`${address.street} ${address.city}, ${address.state} ${address.zip}`}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropsExample;

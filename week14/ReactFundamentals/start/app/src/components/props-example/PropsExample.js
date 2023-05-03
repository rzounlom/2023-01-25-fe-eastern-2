import "./PropsExample.css";

const PropsExample = (props) => {
  console.log("PropsExample props: ", props);

  return (
    <section>
      <div className="props-example">
        <h1>Props Example</h1>
        <div className="card">
          <div className="card-header">
            <div className="avatar">
              <img
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt="employee avatar"
              />
            </div>
          </div>
          <div className="card-details">
            <div className="detail">
              <label>First Name: </label>
              Employee First Name
            </div>
            <div className="detail">
              <label>Last Name: </label>
              <p>Employee Last Name</p>
            </div>
            <div className="detail">
              <label>Title: </label>
              <p>Employee Title</p>
            </div>
            <div className="detail">
              <label>Address: </label>
              <p>Employee Address</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropsExample;

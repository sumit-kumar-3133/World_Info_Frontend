export const Contact = () => {

  const showAlert = ()=>{
      alert('Form Submitted Sucessfully !!!')   
  };
  const handleFormSubmit = (formData) =>{
      console.log(formData.entries());
  }
  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>
      <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
          <input
            type="email"
            required
            className="form-control"
            autoComplete="false"
            placeholder="Enter your email"
            name="email"
          />

          <textarea
            className="form-control"
            rows="10"
            placeholder="Enter your message here"
            name="message"
            required
            autoComplete="false"
          ></textarea>
          <button type="submit" value="send" onClick = {showAlert}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};





const ContactUs = () => {
  return (
    <div className="bg-gray-300 mt-20 p-5 rounded-md">
      <h1 className="text-center text-2xl lg:text-4xl">Contact Us</h1>
      <div>
      <div className="hero bg-gray-300">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea name="textares" id="textarea" placeholder="Type your message"></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-accent">Send Your Message</button>
        </div>
      </form>
    </div>
  </div>
</div>
      </div>
    </div>
  )
}

export default ContactUs

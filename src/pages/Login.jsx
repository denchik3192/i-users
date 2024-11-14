const Login = () => {
  return (
    <div className="d-flex justify-content-between" style={{ height: '100vh' }}>
      <div className="align-self-center" style={{ margin: '0 auto' }}>
        {' '}
        <h5 className="text-secondary">Start your journey</h5>
        <h3>Sign in to the App</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Адрес электронной почты
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              Мы никогда никому не передадим вашу электронную почту.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Пароль
            </label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Remember me
            </label>
          </div>
          <button type="button" className="btn btn-primary w-100">
            {/* <button type="submit" className="btn btn-primary width-full"> */}
            Sign In
          </button>
        </form>
      </div>

      <div
        style={{
          background: 'linear-gradient(0.2deg, rgb(51, 204, 255) 4.8%, rgb(51, 102, 255) 85.5%)',
          width: '50%',
        }}></div>
    </div>
  );
};

export default Login;

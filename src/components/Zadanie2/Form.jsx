function Form() {
    return (
      <form id="register-form">
        <h1>Rejestracja</h1>
        <div className="input-container">
          <label htmlFor="name">Imię</label>
          <input type="text" name="name" className="form-control"/>
        </div>
        <div className="input-container">
          <label htmlFor="surname">Nazwisko</label>
          <input type="text" name="surname" className="form-control"/>
        </div>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" className="form-control"/>
        </div>
        <div className="input-container">
          <label htmlFor="password">Hasło</label>
          <input type="password" name="password" className="form-control"/>
        </div>
        <div className="input-container">
          <label htmlFor="confirm-password">Potwierdź hasło</label>
          <input type="password" name="confirm" className="form-control"/>
        </div>

        <button type="submit" className="btn btn-primary">Zarejestruj się</button>
      </form>
    )
  }
  
  export default Form;
  
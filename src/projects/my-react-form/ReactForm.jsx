function ReactForm() {
  return (
    <>
      <div className="app">
        <h1>Form in React</h1>
        <fieldset>
          <form action="" method="get">
            <label htmlFor="firstname">First Name*</label>
            <input type="text" name="firstname" id="firstname" />
          </form>
        </fieldset>
      </div>
    </>
  );
}

export default ReactForm;

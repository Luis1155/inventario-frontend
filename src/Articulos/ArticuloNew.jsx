import React from "react";

const ArticuloNew = () => {
  return (
    <div style={{marginTop: 30}}>
      <form>
        <label>
          Nombre:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ArticuloNew;

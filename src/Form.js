import React from "react";

export default function Form() {
  return (
    <div className="Form">
      <form>
        <input type="text" placeholder="Enter city name" />
        <button type="button" className="btn btn-primary">
          Search
        </button>
      </form>
    </div>
  );
}

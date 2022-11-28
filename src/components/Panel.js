import styled from "styled-components";

export default function Panel() {
  return (
    <>
      Número de pàgines:<input
        className="form-control form-control-sm"
        type="number"
        aria-label=".form-control-sm example"
      />
      Número d'idiomes:<input
        className="form-control form-control-sm"
        type="number"
        aria-label=".form-control-sm example"
      />
    </>
  );
}

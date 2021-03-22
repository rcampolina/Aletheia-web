import api from "../../services/api";

async function dataTable() {
  const resultado = await api.get('users').then(res => res.data);
  console.log(resultado)
  return resultado;
}

export default dataTable;
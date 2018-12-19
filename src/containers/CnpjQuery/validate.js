import Helpers from "../../utils/cnpjValidation"

const validate = (values) => {
    let errors = {};

    if (!values.cnpj) {
      errors.cnpj = 'Campo Obrigatório!';
    } else if (!Helpers.cnpjValidation(values.cnpj)) {
      errors.cnpj = 'CNPJ Inválido!';
    }

    return errors;
  };
  

  export default validate
import Api from "../utils/api"

class CnpjService  {

    static getCnpj(cnpj) {
        return Api.get(`/enterprises/${cnpj}`)
    }
}

export default CnpjService

const applyCnpjMask = value => {
    const cnpj = String(value)

    return `${cnpj.slice(0, 2)}.${cnpj.slice(2, 5)}.${cnpj.slice(5, 8)}/${cnpj.slice(8, 12)}-${cnpj.slice(12, 14)}`
}

export {
    applyCnpjMask
}
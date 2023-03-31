const URL = "https://chessable-backend.onrender.com"

export const indexLoader = async () => {
    const response = await fetch(URL + "/Chess/")
    const chess = await response.json()
    return chess
}

export const showLoader = async (params: any) => {
    const response = await fetch(URL + `/Chess/${params.params.id}/`)
    const chess = await response.json()
    return chess
}
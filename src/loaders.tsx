const URL = "https://chessable-backend.onrender.com"

export const indexLoader = async () => {
    const response = await fetch(URL + "/Chess/")
    const chess = await response.json()
    return chess
}

interface ChessParams{
    id: string;
}

export const showLoader = async (params: ChessParams) => {
    const response = await fetch(URL + `/Chess/${params.id}/`)
    const chess = await response.json()
    return chess
}
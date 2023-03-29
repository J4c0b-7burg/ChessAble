import { redirect } from "react-router-dom"

const URL = "https://chessable-backend.onrender.com"

interface ChessParams{
    id: string;
}

interface ChessRequest{
    formData: any;
}

export const createAction = async (request: ChessRequest) => {
    const formData = await request.formData()

    const newChess = {
        title: formData.get("title"),
        type: formData.get("type"),
        date: formData.get("date"),
        image: formData.get("image"),
        notes: formData.get("notes"),
        link: formData.get("link")
    
    }

    await fetch(URL + "/Chess/", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newChess)
    })

    return redirect("/")
}

export const updateAction = async (request: ChessRequest, params: ChessParams) => {
    const formData = await request.formData()

    const id = params.id

    const updatedChess = {
        title: formData.get("title"),
        type: formData.get("type"),
        date: formData.get("date"),
        image: formData.get("image"),
        notes: formData.get("notes"),
        link: formData.get("link")
    }

    await fetch(URL + `/Chess/${id}/`, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedChess)
    })

    return redirect(`/post/${id}`)
}

export const deleteAction = async (params: ChessParams) => {
    const id = params.id

    await fetch(URL + `/Chess/${id}/`, {
        method: "delete",
    })

    return redirect("/")
}
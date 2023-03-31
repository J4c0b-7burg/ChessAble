import { redirect } from "react-router-dom"

const URL = "https://chessable-backend.onrender.com"

// interface ChessParams{
//     id: string;
// }

// interface ChessRequest{
//     formData: any;
// }

export const createAction = async (request: any) => {
    console.log(request)
    const formData = await request.request.formData()

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

export const updateAction = async (request: any, params: any) => {
    const formData = await request.request.formData()

    const id = request.params.id

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

export const deleteAction = async (params: any) => {
    const id = params.params.id

    await fetch(URL + `/Chess/${id}/`, {
        method: "delete",
    })

    return redirect("/")
}
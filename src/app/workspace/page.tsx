import { redirect } from "next/navigation"

const data: string | any[] = [
    {
        "_id": "66fbf8243e240bfd4606574c",
        "name": "workspace 1",
        "description": "description workspace 1",
        "boards": [
            "66fbf82c3e240bfd46065750"
        ],
        "members": [
            {
                "userId": "66f21db5585fb91a698ca4a3",
                "role": "admin"
            }
        ],
        "createdAt": "2024-10-01T13:24:52.403Z",
        "updatedAt": "2024-10-01T13:25:00.940Z"
    }
]

const Workspace = () => {
    data.length && redirect(`/workspace/${data[0]?._id}`)
}

export default Workspace
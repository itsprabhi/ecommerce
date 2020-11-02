const textAction = (str) => {
    return {
        type: "CHANGE_TEXT",
        payload: str
    }
}

export default textAction
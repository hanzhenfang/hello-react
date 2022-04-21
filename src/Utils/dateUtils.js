const formatDate = () => {
    const date = new Date();
    return date.getFullYear()
        + "-" + (date.getMonth() + 1)
        + "-" + date.getHours()
        + ":" + date.getMinutes()
        + ":" + date.getSeconds()
}

export default formatDate
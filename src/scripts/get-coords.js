export const getCoords = async () => {
    navigator.geolocation.getCurrentPosition(pos => {
        console.log(pos.coords)
        return pos.coords 
    })
}
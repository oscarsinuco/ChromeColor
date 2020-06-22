export const getColors = (img, color, varia) => {
    let htmlImg = document.querySelector(img)
    let canvas = document.querySelector("canvas")
    canvas.width = htmlImg.width
    canvas.height = htmlImg.height
    let ctx = canvas.getContext("2d");
    ctx.drawImage(htmlImg, 0, 0, canvas.width, canvas.height);

    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const longitud = imgData.data.length
    for (let i = 0; i < longitud; i = i + 4) {
        const offset = i + 4;
        const red = imgData.data[offset + 0]
        const green = imgData.data[offset + 1]
        const blue = imgData.data[offset + 2]

        //Conditions

        let greenc = green > red && green > blue && green > green * varia && blue < 230 && red < 230 && green > 255 * (varia / 5) 
        let bluec = blue > red && blue > green && blue > blue * varia && green < 230 && red < 230 && blue > 255 * (varia / 5)
        let redc = red > blue && red > green && red > red * varia && green < 120 && blue < 230 && red > 255 * (varia / 5)
        let yellowc = red > blue && green > blue && red > red * varia && green > green * varia && blue < 80 && green > 170 && red > 170
        let blackc = red < 100 * varia && green < 100 * varia && blue < 100 * varia
        let orangec = red > blue && green > blue && red > red * varia && blue < 180 && green > 170*(varia*1.2) && red > 210*varia
        let whitec = red > 255*varia && green > 255*varia & blue > 255*varia;
        switch (color) {
            case 'green':
                if (greenc) {
                    imgData.data[offset + 3] = 1
                }
                break;
            case 'blue':
                if (bluec) {
                    imgData.data[offset + 3] = 1
                }
                break;
            case 'red':
                if (redc) {
                    imgData.data[offset + 3] = 1
                }
                break;
            case 'yellow':
                if (yellowc) {
                    imgData.data[offset + 3] = 1
                }
                break;
            case 'black':
                if (blackc) {
                    imgData.data[offset + 3] = 1
                }
                break;
            case 'orange':
                if (orangec) {
                    imgData.data[offset + 3] = 1
                }
                break;
            case 'white':
                if (whitec) {
                    imgData.data[offset + 3] = 1
                }
                break;
            default:
                break;
        }



    }
    ctx.putImageData(imgData, 0, 0)
}
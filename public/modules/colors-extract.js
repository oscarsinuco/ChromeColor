export const getColors = (img, color, varia) => {

    let htmlImg = document.querySelector(img)
    let canvas = document.createElement("canvas")
    canvas.width = htmlImg.width
    canvas.height = htmlImg.height
    let ctx = canvas.getContext("2d")

    ctx.drawImage(htmlImg, 0, 0, canvas.width, canvas.height);

    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)

    let applyCondition = (element, offset, condition) => {
        switch (element) {
            case 'green':
                if (condition['greenc']) {
                    imgData.data[offset + 3] = 1
                }
                break;
            case 'blue':
                if (condition['bluec']) {
                    imgData.data[offset + 3] = 1
                }
                break;
            case 'red':
                if (condition['redc']) {
                    imgData.data[offset + 3] = 1
                }
                break;
            case 'yellow':
                if (condition['yellowc']) {
                    imgData.data[offset + 3] = 1
                }
                break;
            case 'black':
                if (condition['blackc']) {
                    imgData.data[offset + 3] = 1
                }
                break;
            case 'orange':
                if (condition['orangec']) {
                    imgData.data[offset + 3] = 1
                }
                break;
            case 'white':
                if (condition['whitec']) {
                    imgData.data[offset + 3] = 1
                }
                break;
            default:
                break;
        }
    }


    const longitud = imgData.data.length
    for (let i = 0; i < longitud; i = i + 4) {
        const offset = i + 4;
        const red = imgData.data[offset + 0]
        const green = imgData.data[offset + 1]
        const blue = imgData.data[offset + 2]

        //Conditions
        let greenc = green > red && green > blue && green > green * varia && blue < 230 && red < 230 && green > 255 * (varia)
        let bluec = blue > red && blue > green && blue > blue * varia && green < 230 && red < 230 && blue > 255 * (varia)
        let redc = red > blue && red > green && red > red * varia && green < 120 && blue < 230 && red > 255 * (varia / 5)
        let yellowc = red > blue && green > blue && red > red * varia && green > green * varia && blue < 100 && green > 170 && red > 170
        let blackc = red < 100 * varia && green < 100 * varia && blue < 100 * varia
        let orangec = red > blue && green > blue && red > red * varia && blue < 180 && green > 170 * (varia * 1.2) && red > 210 * varia
        let whitec = red > 255 * varia && green > 255 * varia & blue > 255 * varia

        if (typeof color === 'string') {
            applyCondition(color, offset, { greenc, bluec, redc, yellowc, blackc, orangec, whitec })
        } else if (typeof color === 'object') {
            try {
                color.forEach(element => {
                    applyCondition(element, offset, { greenc, bluec, redc, yellowc, blackc, orangec, whitec })
                });
            } catch (error) {
                console.error("Color should be a string or array.")
                break;
            }

        }
    }
    ctx.putImageData(imgData, 0, 0)
    return canvas
}
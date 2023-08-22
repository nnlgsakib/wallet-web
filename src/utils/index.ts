// Generate random colors
export const getRandomColor = () => {    
    return `#${Math.floor(Math.random() * 0xffffff).toString(16)}`
 }


 var colors = [
    '#8473C6',
    '#DBBB9A',
    '#84BED4',
    '#6F99D2',
    '#9EDB90'
]


export interface IconData{
    list: Array<any>
    color: string
}

export const getRandomIcon = () => {
    let data = []
    for (let i = 0; i < 5; i++) {
        data.push([
            Math.floor(Math.random() * 2),
            Math.floor(Math.random() * 2),
            Math.floor(Math.random() * 2)
        ])
    }
    data = data.map(function(d) {
            d.push(d[1], d[0])
            return d
        })
        // duplicate first two rows
    var color = getRandomColor()
    const res:IconData = {
        list: data,
        color
    }
    return res
}



//Generate a globally unique identifier
export function guid() {
    function S4() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    }
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}
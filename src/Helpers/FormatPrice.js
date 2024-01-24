

const FormatPrice =({price})=>{
    return Intl.NumberFormat("ne-NP",{
        style:"currency",
        currency:"VND",
        maximumFractionDigits:2,
    }).format(price/50);

}

export default FormatPrice;
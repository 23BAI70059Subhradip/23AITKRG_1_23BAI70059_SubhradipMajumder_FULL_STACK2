
export function CalculateTotalRevenue(data) {
    const safeData = Array.isArray(data) ? data : [];
    console.log("Calculating total revenue from data:", safeData); // Debugging log
    return safeData.reduce((total, item) => {
        total += item.revenue || 0; // Ensure revenue is treated as 0 if undefined
        return total;
    }, 0); 
}



export function CalculateTotalBuy(data){
    const safeData = Array.isArray(data) ? data : [];
    return safeData.reduce((total, item)=> {
        if(item.type === "Buy" || item.Type === "Buy"){
            total += item.revenue || 0; 
        }
        return total;
    }, 0); 
}

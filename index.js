// 数组操作
function arraySum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

function arrayAverage(arr) {
    if (arr.length === 0) return 0;
    return arraySum(arr) / arr.length;
}

// 字符串处理
function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function truncateString(str, length) {
    if (str.length > length) {
        return str.slice(0, length) + '...';
    }
    return str;
}

// 日期时间
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
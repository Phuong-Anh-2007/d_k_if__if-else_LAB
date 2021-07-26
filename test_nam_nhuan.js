function checked() {
    let year = document.getElementById('nam');
    year = year.value;
    if ((year % 4 ==0) && (year % 100 !=0)) {
        document.getElementById('result').innerHTML='Đây là năm nhuận';
    } else if ((year % 4 !=0) && (year % 100 ==0)) {
        document.getElementById('result').innerHTML='Đây không phải là năm nhuận';
    } else if ((year %4 ==0) && (year %100 == 0)) {
        document.getElementById('result').innerHTML='Đây là năm nhuận';
    } else {
        document.getElementById('result').innerHTML='Đây không phải là năm nhuận';
    }
}


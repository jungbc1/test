const book_ea_up = function(tag){
    // tag 현재 선택된 태그
    // tag.previousElementSibling.value 현재 태그의 이전요소노드의 값
    tag.previousElementSibling.value++
    // 주문금액 변경
    console.log(tag.parentNode.parentNode.nextElementSibling.innerHTML)
    tag.parentNode.parentNode.nextElementSibling.innerHTML
    =(tag.parentNode.parentNode.previousElementSibling.innerHTML.replace(",","")*tag.previousElementSibling.value)
    .toLocaleString('ko-KR');
    // 총주문금액변경
    let order_sum = document.getElementById("order_sum");
    let arSums = document.querySelectorAll("#cart_table tr td:nth-child(6)");
    let total = 0;
    for (const sums of arSums) {
        total += Number(sums.innerHTML.replace(",",""));
    }
    console.log(total)
    order_sum.innerHTML = total.toLocaleString('ko-KR');
}
const book_ea_down = function(tag){
    tag.nextElementSibling.value==0 ? 0 : tag.nextElementSibling.value--;
    // 주문금액 변경
    tag.parentNode.parentNode.nextElementSibling.innerHTML
    =(tag.parentNode.parentNode.previousElementSibling.innerHTML.replace(",","")
    *tag.nextElementSibling.value+"")
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    // 총주문금액변경
    let order_sum = document.getElementById("order_sum");
    let arSums = document.querySelectorAll("#cart_table tr td:nth-child(6)");
    let total = 0;
    for (const sums of arSums) {
        total += Number(sums.innerHTML.replace(",",""));
    }
    order_sum.innerHTML = (total+"").replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

const check_all = function(tag){
    let arSums = document.querySelectorAll("#cart_table tr td:nth-child(1) input[type=\"checkbox\"]");
    for (const sums of arSums) {
        // 전체선택하기가 체크되었으면
        if (tag.checked){
            sums.checked=true;
        }else{
            sums.checked=false;
        }
    }
}

const enterkey = function(tag){
    if(event.keyCode==13){
        // 주문금액 변경
        tag.parentNode.parentNode.nextElementSibling.innerHTML
        =(tag.parentNode.parentNode.previousElementSibling.innerHTML.replace(",","")
        *tag.value+"")
        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        // 총주문금액변경
        let order_sum = document.getElementById("order_sum");
        let arSums = document.querySelectorAll("#cart_table tr td:nth-child(6)");
        let total = 0;
        for (const sums of arSums) {
            total += Number(sums.innerHTML.replace(",",""));
        }
        order_sum.innerHTML = (total+"").replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }
}

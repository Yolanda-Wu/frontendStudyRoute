/**
 * 92. 反转链表 II
 */
var reverseBetween = function(head, m, n) {
    let nodeArr = [];
    let now = head;
    let count=0;
    let start = m===1?1:(m-1);
    while(count<=n){
        count++;
        if(count>=start && count<=n+1){
            nodeArr.push(now);
        }
        now = now?now.next:null;
    }
    if(m!=1){
        //都不在边界或尾在边界
        for(let i=nodeArr.length-2;i>0;i--){
            if(i==nodeArr.length-2){
                nodeArr[0].next = nodeArr[i];
            }
            if(i==1){
                nodeArr[i].next = nodeArr[nodeArr.length-1];
            }else{
                nodeArr[i].next = nodeArr[i-1];
            }
        }
    }else{
        //都在边界或头在边界
        for(let i=nodeArr.length-2;i>0;i--){
            if(i==nodeArr.length-2){
                head = nodeArr[i];
            }
            nodeArr[i].next = nodeArr[i-1];
        }
        nodeArr[0].next = nodeArr[nodeArr.length-1];

    }
    return head;
};



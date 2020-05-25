#### 463.岛屿的周长（容易）：
##### 题目描述：
给定一个包含 0 和 1 的二维网格地图，其中 1 表示陆地 0 表示水域。

网格中的格子水平和垂直方向相连（对角线方向不相连）。整个网格被水完全包围，但其中恰好有一个岛屿（或者说，一个或多个表示陆地的格子相连组成的岛屿）。

岛屿中没有“湖”（“湖” 指水域在岛屿内部且不和岛屿周围的水相连）。格子是边长为 1 的正方形。网格为长方形，且宽度和高度均不超过 100 。计算这个岛屿的周长。

>来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/island-perimeter

##### 题解：
本题是网格搜索，加上一个计算周长的要求，周长的计算思路可以看下图：
![岛屿周长](https://img-blog.csdnimg.cn/20200525014747415.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQwMzQwNDc4,size_16,color_FFFFFF,t_70)
也就是说，不计算岛屿方格内部的边，只计算岛屿与非岛屿方格之间的共享边。
具体只要在每次搜索的时候，判断是否污染到非岛屿方格（包括水域或者边界外），是则对就对周长+1，否则不增加。
#### Code
```javascript
// 第一次AC
var islandPerimeter = function(grid) {
    for(let r=0;r<grid.length;r++){
        for(let c=0;c<grid[0].length;c++){
            if(grid[r][c]==1){
                //遇到一个陆地，开始进入dfs(本题规定了只有一个岛屿，所以只需计算一个)
                return dfs(grid,r,c);
            }
        }
    }
};
function dfs(grid,r,c){
    if(r<0||r>=grid.length||c<0||c>=grid[0].length)
        return 1;
    if(grid[r][c]==0)// 该方格是水域不是岛屿
        return 1;
    if(grid[r][c]!=1)// 该方格已被遍历过
        return 0;
    grid[r][c]=2;// 该方格是岛屿，并标记该岛屿已被遍历过
    return dfs(grid,r-1,c)+
    dfs(grid,r,c+1)+
    dfs(grid,r+1,c)+
    dfs(grid,r,c-1);
}
```

#### 701.BST的插入操作（中等）：
##### 题目描述：
给定二叉搜索树（BST）的根节点和要插入树中的值，将值插入二叉搜索树。 返回插入后二叉搜索树的根节点。 保证原始二叉搜索树中不存在新值。

注意，可能存在多种有效的插入方式，只要树在插入后仍保持为二叉搜索树即可。 你可以返回任意有效的结果。

>来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/insert-into-a-binary-search-tree
##### 题解：
本题考察BST的插入操作，因为我不太会调整树的算法，所以只是简单用递归去做。
具体就是，当前节点<插入点，进入右子树搜索；当前节点>插入点，进入左子树搜索（相等就随便吧，样例能过的话）。
#### Code
```javascript
// 第一次AC
var insertIntoBST = function(root, val) {
    let newNode=new TreeNode(val);
    if(!root) return root=newNode;
    find(root);
    return root;
    //递归函数
    function find(node){
        if(!node) return;
        if(node.val<val){
            if(!node.right){
                node.right=newNode;
                return;
            }
            if(node.right)
                find(node.right);
        }
        if(node.val>val){
            if(!node.left){
                node.left=newNode;
                return;
            }
            if(node.left)
                find(node.left);
        }
    }
};
// 简化版
var insertIntoBST = function(root, val) {
    if(!root){
        return new TreeNode(val);
    }else{
        if(root.val < val){
            root.right = insertIntoBST(root.right,val)
        }else{
            root.left = insertIntoBST(root.left,val)
        }
    }
    return root;
};
```

#### 1335.工作计划的最低难度（困难）：
##### 题目描述：
你需要制定一份 d 天的工作计划表。工作之间存在依赖，要想执行第 i 项工作，你必须完成全部 j 项工作（ 0 <= j < i）。

你每天 至少 需要完成一项任务。工作计划的总难度是这 d 天每一天的难度之和，而一天的工作难度是当天应该完成工作的最大难度。

给你一个整数数组 jobDifficulty 和一个整数 d，分别代表工作难度和需要计划的天数。第 i 项工作的难度是 jobDifficulty[i]。

返回整个工作计划的 最小难度 。如果无法制定工作计划，则返回 -1 。

>来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/minimum-difficulty-of-a-job-schedule
##### 题解：
1、假设当前的位置是 i，然后从 i 开始我们还差 j 天（j次拆分任务）没有做。我们把当前状态下的这个最小值记作 dp[i][j]。
2、从原始数组中截取下标从 i 开始到 j 的一段，这一段里的最大值我们记作 max(i, j)。

```javascript
目标：计算出dp[0][d]
递推公式：dp[i][j] = Math.min(
  dp[i + 1][j - 1] + max(i, i),
  dp[i + 2][j - 1] + max(i, i + 1),
  ...
  dp[n - j + 1][j - 1] + max(i, n - j)
);
```

#### Code
```javascript
// 动态规划：
var minDifficulty = function(jobDifficulty, d) {
    const len = jobDifficulty.length;
    if(len<d) return -1;
    const dp=Array.from({length:len},()=>new Uint16Array(d+1).fill(10000));
    
    for(let i=len-1,curMax=0;i>=0;i--){
        if(jobDifficulty[i]>curMax)
            curMax=jobDifficulty[i];
        dp[i][1]=curMax;
    }

    for(let i=2;i<=d;i++){
        for(let j=0;j<=len-i;j++){
            let max=0;
            for(let k=j;k<=len-i;k++){
                if(jobDifficulty[k]>max)
                    max=jobDifficulty[k];
                dp[j][i]=Math.min(dp[j][i],dp[k+1][i-1]+max);
            }
        }
    }
    return dp[0][d];
};

// 优化后的动态规划（dp降维）
var minDifficulty = function(jobDifficulty, d) {
    const len = jobDifficulty.length;
    if(len<d) return -1;
    const dp=new Uint16Array(len+1);
    
    for(let i=len-1,curMax=0;i>=0;i--){
        dp[i]=jobDifficulty[i]>dp[i+1]?jobDifficulty[i]:dp[i+1];
    }

    for(let i=2;i<=d;i++){
        for(let j=0;j<=len-i;j++){
            let max=0;
            dp[j]=10000;
            for(let k=j;k<=len-i;k++){
                if(jobDifficulty[k]>max)
                    max=jobDifficulty[k];
                if(dp[j]>dp[k+1]+max)
                    dp[j]=dp[k+1]+max;
            }
        }
    }
    return dp[0];
};

// 递归法：
const minDifficulty = (jobDifficulty, d) => {
  const LEN = jobDifficulty.length;
  if (LEN < d) return -1;
  const cache = new Map();
  return helper(0, d);

  function helper(idx, count) {
    const key = idx * 100 + count;
    if (!cache.has(key)) {
      if (count === 1) {
        let max = 0;
        for (let i = idx; i < LEN; ++i) {
          jobDifficulty[i] > max && (max = jobDifficulty[i]);
        }
        return max;
      }
      let min = 10000;
      let curMax = 0;
      for (let i = idx; i <= LEN - count; ++i) {
        if (jobDifficulty[i] > curMax) curMax = jobDifficulty[i];
        min = Math.min(min, curMax + helper(i + 1, count - 1));
      }
      cache.set(key, min);
    }
    return cache.get(key);
  }
};
```
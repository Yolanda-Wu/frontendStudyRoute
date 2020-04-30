## linux命令
|命令|含义|
|--|--|
|pwd|打印当前路径|
|cd 目录名|切换目录|
|mkdir 文件夹名字|创建目录|
|ls -al|显示当前目录下所有文件|
|touch 文件名|创建文件|
|mv 文件夹 路径|移动文件夹|
|rm 文件名|删除文件|
| rm -rf 文件夹名| 强制删除文件|
|cat 文件名|打开文件|
|echo 内容 >> 文件名|输入内容到文件,>表示输入,>>表示追加|
|vi 文件名|编辑文件,i:插入模式,esc：推出编辑,q!：强制退出,wq:保存后退出|
|history > 文件名|将历史命令导入到文件|

## git命令
#### 基本命令
|命令|含义|
|--|--|
|git init|初始化|
|git status|查看git状态|
|git add .|放到暂存区|
|git commit -m '备注信息'|提交到版本库|
|git commit -a -m '备注信息'|提交到暂存区和版本库，文件需要提交过一次|
|git rm --cached 文件名 -r|删除暂存区文件,删除全部要加-r|
|git log|查看当前版本以前的提交日志|
|git log --graph|查看合并图谱，加--oneline显示一行|
|git reflog|查看所有提交日志|
|git config --list|查看配置|
|git config --global user.name '名字'|修改配置|
#### 对比和撤销
|命令|含义|
|--|--|
|git diff|比较工作区和暂存区|
|git diff 分支名|比较工作区和版本库|
|git diff --cached|比较暂存区和版本库|
|git checkout 文件名|撤销工作区更改,取出暂存区文件覆盖掉工作区内容|
|git reset HEAD 文件名|撤销暂存区更改|
|git reset --hard 版本号|回滚历史版本|
|git reset --hard HEAD^|回滚上一个版本|
#### 分支
|命令|含义|
|--|--|
|git branch [分支名]|查看/创建分支|
|git branch -D 分支名|删除分支|
|git checkout -b 分支名|创建并切换分支|
|git checkout 分支名|切换分支|
|git stash|分支有更改未提交不能直接切换，可以使用此命令暂存更改|
|git stash pop|取出stash暂存内容|
|git merge 分支名|合并分支，遇到冲突保存全部自己选择再提交|
#### 远程提交
|命令|含义|
|--|--|
|git remote add 仓库标识名 仓库地址|连接远程仓库|
|git remote -v|查看远程连接配置|
|git remote rm 标识名|删除一个远程连接|
|git push -u 仓库标识名 分支名|提交到远程仓库|
|git pull -u 仓库标识名 分支名|把远程库的修改拉取到本地,包含了fetch和merge|
|git fetch 仓库标识名 分支名|抓取远程库的指定分支到本地，但没有合并|
|git merge 仓库标识名 分支名|将抓取下的分支和当前分支合并|
|git clone 仓库地址 文件夹名字|克隆仓库到本地|

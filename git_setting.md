## git 설정 
    1. git으로 관리할 폴더에서 power shell(or cmd) 열기 
    2. 해당 폴더를 git으로 관리하기 위한 명령 입력 
        1. git init
    3. 사용자 설정 
        1. git config --global [user.name](http://user.name) '본인github username'
        2. git config --global [user.](http://user.name)email '본인github email'
        3. 위의 두줄 입력 후 git config --global --list 입력했을 때 입력한 정보가 나오면 성공 
    4. 사용자 설정 하다가 잘못 입력한 경우 reset 방법 
        1. git config --global --unset user.name
        2. git config --global --unset user.email
        3. 위의 두 줄 실행하고 사용자설정 다시 
    5. [github.com](http://github.com) 에서 로그인 후 repository 생성 
        1. repository는 해당 프로젝트를 저장할 공간 
        2. git remote add origin 'git주소' 입력 
            1. 처음 repository 만들었을 때 나오는 주소 복사해서 사용할 것 
            2. 주소를 잘못 입력했거나 변경할 경우 
                1. git remote set-url origin 'git주소'
        3. 입력 후 git config --local --list 로 git 주소 세팅 제대로 됐는지 확인 
    6. git status 
        1. 현재 폴더에서 어떤 파일을 올리도록 했는지 보여줌. 
        2. 올릴 준비가 된 파일은 초록색. 준비되지 않은 파일은 빨간색으로 보임. 
    7. git add .
        1. 현재 폴더의 모든 파일을 git에 올리겠다는 설정 
        2. stage에 올린다고도 표현함. 
    8. 커밋 
        1. git commit -m '커밋메시지'
        2. 커밋은 하나의 버전을 의미함. 
            1. github에서 어떻게 표현되는지 확인
    9. main 으로 branch 변경 
        1. git branch -M main
    10. push 
        1. 현재 pc에 있는 파일을 github에 업로드 
        2. git push -u origin main 
            1. -u 옵션을 주면 앞으로는 git push 또는 git pull 명령어로 사용이 가능함. 
    11. github 확인 
        1. push가 정상적으로 됐다면 github의 해당 repository 페이지 접속해서 파일이 올라왔는지 확인. 
            1. 새로고침 해볼 것 
## PC 1대를 2명의 유저가 사용하는 경우 
    1. git config --global --list 로 username, email 확인 후 본인 계정으로 세팅 
    2. 제어판-사용자계정-자격증명관리자-Windows자격증명 들어가서 
        1. git 으로 등록된 부분 제거 
        2. 제거 후 push 할 때 로그인 창이 출력되는데 주의할 점!!
            1. github에 본인 계정으로 로그인 되어있는지 반드시 확인. 
    3. 세팅 완료 후 commit, push 하면 됨. 
## github에 있는 소스를 로컬PC로 가져올 때 
    1. git clone '깃주소'
        1. 소스가 프로젝트 폴더 형태로 다운되기 때문에 특정 프로젝트에서 하지 않고 workspace에서 하는 것이 좋음.
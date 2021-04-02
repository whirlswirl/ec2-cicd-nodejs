# ApplicationStart.sh

#!/bin/bash
export NVM_DIR="/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

npm install pm2@latest -g
pm2 update
cd /home/ec2-user/Src/cicd-nodejs-ec2
pm2 start
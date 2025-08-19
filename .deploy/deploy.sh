cd course
npm run build:prod

cd ../../../
sudo rm -rf var/www/course/html

sudo mv home/asetzhanedilov6/course/build var/www/course/html 
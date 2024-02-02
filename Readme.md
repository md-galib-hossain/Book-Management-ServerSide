# To run this project locally 
1st. First need to download the repository
2nd. Then If you want to run my server locally then first create an env file and add your variables i gave env examples below to suggest u how the env gonna be like

NODE_ENV=development
PORT=5000
DATABASE_URL= your db url
BCRYPT_SALT_ROUNDS=8
JWT_ACCESS_SECRET=3c6992504cfc418ab11f7abcf6f0970483a138b4b3f72ba3436f1e023bad
1ed6
JWT_REFRESH_SECRET=8aca6b6380afc9d0aa704a191593f8659a6ad58643dddfda6f4feb7ddaa9
6895
JWT_ACCESS_EXPIRES_IN=1d
JWT_REFRESH_EXPIRES_IN=365d

3rd. then you have to open terminal & then run theese commands 
      npm install 
      npm run start:dev
4th.  You are ready to go to test it localy

# LiveSite : https://book-management-galib.netlify.app
# Server   : https://book-management-server-seven.vercel.app